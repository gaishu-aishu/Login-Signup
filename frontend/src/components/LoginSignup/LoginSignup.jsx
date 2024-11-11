// // import React, { useState, useRef , useEffect } from 'react';
// // import './LoginSignup.css';
// // import user_icon from '../Assets/person.png';
// // import email_icon from '../Assets/mail.png';
// // import password_icon from '../Assets/password.png';



// // export default function LoginSignup() {
// //   const [action, setAction] = useState('Sign Up');
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [previousPasswords, setPreviousPasswords] = useState([]);
  
  
// //   const tooltipRef = useRef(null);

// //   const validatePassword = (password) => {
// //     const minLength = 12;
// //     const regex =
// //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}|:;<>,.+\-_=~])[A-Za-z\d@$!%*?&#^()[\]{}|:;<>,.+\-_=~]{12,}$/;

// //     if (password.length < minLength) {
// //       return 'Password must be at least 12 characters long.';
// //     }
// //     if (!regex.test(password)) {
// //       return 'Password must contain uppercase, lowercase, numbers, and symbols.';
// //     }
// //     if (previousPasswords.includes(password)) {
// //       return 'Password must be different from your previous passwords.';
// //     }
// //     return '';
// //   };

// //   const handleSubmit = () => {
// //     const passwordError = validatePassword(password);
// //     if (action === 'Sign Up' && passwordError) {
// //       alert(passwordError);
// //       return;
// //     }

// //     if (name && email && password) {
// //       // alert(`${action} successful!`);
// //       alert(`successfully logged in!`);
      
// //       setPreviousPasswords([...previousPasswords, password]);
// //       resetFields();
// //     } else {
// //       alert('Please fill in all the fields.');
// //     }
// //   };

// //   const resetFields = () => {
// //     setName('');
// //     setEmail('');
// //     setPassword('');
// //   };

// //   const showTooltip = () => {
// //     tooltipRef.current.classList.add('visible');
// //   };

// //   const hideTooltip = () => {
// //     tooltipRef.current.classList.remove('visible');
// //   };

// //   useEffect(() => {
// //     document.title = action === 'Sign Up' ? 'Signup Page' : 'Login Page';
// //   }, [action]);

// //   return (
// //     <div className="container">
// //       <div className="header">
// //         <div className="text">{action}</div>
// //         <div className="underline"></div>
// //       </div>

// //       <div className="inputs">
// //         {action === 'Sign Up' && (
// //           <div className="input">
// //             <img src={user_icon} alt="" />
// //             <input
// //               type="text"
// //               placeholder="Enter your name..."
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //             />
// //           </div>
// //         )}

// //         <div className="input">
// //           <img src={email_icon} alt="" />
// //           <input
// //             type="email"
// //             placeholder="Enter your Mail..."
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>

// //         <div className="input password-input">
// //           <img src={password_icon} alt="" />
// //           <input
// //             type="password"
// //             placeholder="Password..."
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             onMouseEnter={showTooltip}
// //             onMouseLeave={hideTooltip}
// //           />
// //           <div className="tooltip" ref={tooltipRef}>
// //             <b>Note:</b> Password must follow these rules:
// //             <ul>
// //               <li>At least 12 characters long but 14 or more is better.</li>
// //               <li>A combination of uppercase, lowercase, numbers, and symbols.</li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* {action === 'Login' && (
// //           <div className="forgot-password">
// //             Lost Password? <span>Click Here!</span>
// //           </div>
// //         )} */}
// //       </div>

// //       <div className="submit-container">
// //         <div className="submit" onClick={handleSubmit}>
// //           {action}
// //         </div>
// //         <div
// //           className="submit"
// //           onClick={() =>
// //             setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')
// //           }
// //         >
          
// //            {action === 'Sign Up' ? 'Login' : 'Sign Up'}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useRef, useEffect } from 'react';
// import './LoginSignup.css';
// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/mail.png';
// import password_icon from '../Assets/password.png';

// export default function LoginSignup() {
//   const [action, setAction] = useState('Sign Up');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
  
//   const tooltipRef = useRef(null);

//   const validatePassword = (password) => {
//     const minLength = 12;
//     const regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}|:;<>,.+\-_=~])[A-Za-z\d@$!%*?&#^()[\]{}|:;<>,.+\-_=~]{12,}$/;

//     if (password.length < minLength) {
//       return 'Password must be at least 12 characters long.';
//     }
//     if (!regex.test(password)) {
//       return 'Password must contain uppercase, lowercase, numbers, and symbols.';
//     }
//     return '';
//   };

//   // const handleSubmit = async () => {
//   //   const passwordError = validatePassword(password);
//   //   if (action === 'Sign Up' && passwordError) {
//   //     alert(passwordError);
//   //     return;
//   //   }

//   //   if (action === 'Sign Up') {
//   //     // Sign Up logic
//   //     try {
//   //       const response = await fetch('http://localhost:5000/signup', {
//   //         method: 'POST',
//   //         headers: { 'Content-Type': 'application/json' },
//   //         body: JSON.stringify({ name, email, password }),
//   //       });
//   //       const data = await response.json();
//   //       setMessage(data.message || 'Signup failed!');
//   //     } catch (error) {
//   //       setMessage('Error: ' + error.message);
//   //     }
//   //   } else {
//   //     // Handle Login (optional)
//   //     alert('Login functionality is not yet implemented!');
//   //   }

//   //   resetFields();
//   // };




//   // const handleSubmit = async () => {
//   //   try {
//   //     const response = await fetch(`http://localhost:5000/signup`, {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ name, email, password }),
//   //     });
  
//   //     const data = await response.json();
//   //     if (response.ok) {
//   //       setMessage(data.message); // Signup successful
//   //     } else {
//   //       setMessage(data.error || 'Signup failed!'); // Handle errors
//   //     }
//   //   } catch (error) {
//   //     console.error('Signup Error:', error);
//   //     setMessage('An unexpected error occurred.');
//   //   }
  
//   //   resetFields();
//   // };
  









//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: 'John Doe',
//           email: 'john@example.com',
//           password: 'Example@123',
//         }),
//       });
  
//       const data = await response.json();
//       if (response.ok) {
//         console.log(data.message);
//       } else {
//         console.error(data.error);
//       }
//     } catch (error) {
//       console.error('Signup Error:', error);
//     }
//   };
  






//   const resetFields = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//   };

//   const showTooltip = () => {
//     tooltipRef.current.classList.add('visible');
//   };

//   const hideTooltip = () => {
//     tooltipRef.current.classList.remove('visible');
//   };

//   useEffect(() => {
//     document.title = action === 'Sign Up' ? 'Signup Page' : 'Login Page';
//   }, [action]);

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>

//       <div className="inputs">
//         {action === 'Sign Up' && (
//           <div className="input">
//             <img src={user_icon} alt="" />
//             <input
//               type="text"
//               placeholder="Enter your name..."
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input
//             type="email"
//             placeholder="Enter your Mail..."
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="input password-input">
//           <img src={password_icon} alt="" />
//           <input
//             type="password"
//             placeholder="Password..."
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onMouseEnter={showTooltip}
//             onMouseLeave={hideTooltip}
//           />
//           <div className="tooltip" ref={tooltipRef}>
//             <b>Note:</b> Password must follow these rules:
//             <ul>
//               <li>At least 12 characters long but 14 or more is better.</li>
//               <li>A combination of uppercase, lowercase, numbers, and symbols.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="submit-container">
//         <div className="submit" onClick={handleSubmit}>
//           {action}
//         </div>
//         <div
//           className="submit"
//           onClick={() =>
//             setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')
//           }
//         >
//           {action === 'Sign Up' ? 'Login' : 'Sign Up'}
//         </div>
//       </div>
//       {message && <p>{message}</p>} {/* Displaying message to the user */}
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/password.png';

export default function LoginSignup() {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const tooltipRef = useRef(null);

  const validatePassword = (password) => {
    const minLength = 12;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{12,}$/;
    if (password.length < minLength) return 'Password must be at least 12 characters long.';
    if (!regex.test(password)) return 'Password must contain uppercase, lowercase, numbers, and symbols.';
    return '';
  };

  const handleSubmit = async () => {
    const passwordError = validatePassword(password);
    if (action === 'Sign Up' && passwordError) {
      setMessage(passwordError);
      return;
    }
    const endpoint = action === 'Sign Up' ? 'signup' : 'login';
    const payload = { name, email, password };
    
    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) setMessage(data.message);
      else setMessage(data.error || 'An error occurred');
    } catch (error) {
      setMessage('Server error: ' + error.message);
    }
    resetFields();
  };

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    document.title = action === 'Sign Up' ? 'Signup Page' : 'Login Page';
  }, [action]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter your name..." value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Enter your Mail..." value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input password-input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>{action}</div>
        <div className="submit" onClick={() => setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')}>
          {action === 'Sign Up' ? 'Login' : 'Sign Up'}
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
