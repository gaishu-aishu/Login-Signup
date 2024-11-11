const request = require('supertest');
const express = require('express');
const mysql = require('mysql2');

// Initialize Express App
const app = require('.src/index'); // Assuming your index.js exports the app

// Setup Database Connection (you might want to use a testing database)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Replace with your MySQL password
  database: 'login_system_test', // Use a separate test database
});

// Create the necessary table before tests
beforeAll((done) => {
  db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      is_authorized BOOLEAN DEFAULT FALSE
    )`, 
    () => {
      done();
    });
});

// Cleanup after tests
afterAll((done) => {
  db.query('DROP TABLE IF EXISTS users', () => {
    db.end();
    done();
  });
});

// Test Cases

describe('Authentication API', () => {
  it('should signup a new user successfully', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        name: 'Test User',
        email: 'testuser@gmail.com',
        password: 'TestPassword123!'
      });
      
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Signup successful');
  });

  it('should return an error if email already exists', async () => {
    await request(app).post('/signup').send({
      name: 'Existing User',
      email: 'testuser@gmail.com',
      password: 'TestPassword123!'
    }); // Signup again to create a duplicate

    const response = await request(app)
      .post('/signup')
      .send({
        name: 'Another User',
        email: 'testuser@gmail.com',
        password: 'AnotherPassword123!'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Email already exists');
  });

  it('should return an error if fields are missing during signup', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: 'incompleteuser@gmail.com',
        password: 'Password123!'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('All fields are required');
  });

  it('should login successfully with authorized user', async () => {
    await request(app).post('/signup').send({
      name: 'Authorized User',
      email: 'authuser@gmail.com',
      password: 'AuthUserPassword123!',
    });

    // Authorize the user
    db.query(`UPDATE users SET is_authorized = true WHERE email = 'authuser@gmail.com'`);

    const response = await request(app)
      .post('/login')
      .send({
        email: 'authuser@gmail.com',
        password: 'AuthUserPassword123!'
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });

  it('should return error for unauthorized user', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'testuser@gmail.com', // Test with previously registered email
        password: 'TestPassword123!'   // This user is not authorized
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Unauthorized or invalid credentials');
  });

  it('should return error for invalid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'nonexistent@gmail.com',
        password: 'InvalidPassword123!'
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Unauthorized or invalid credentials');
  });

  it('should return error if fields are missing during login', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'authuser@gmail.com'
      });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Unauthorized or invalid credentials');
  });
});
