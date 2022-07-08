import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter password..."
          ref={passwordRef}
        />
        <button className="btn btn-secondary" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="btn btn-primary">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { login } from '../../utilities/users-service'

// const Login = ({ setUser }) => {
//     const [message, setMessage] = useState("your email is secured")
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     })
//     const navigate = useNavigate()

//     const handleChange = e => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = async e => {
//         // Prevents form from being submitted to the server
//         e.preventDefault()
//         try {
//             const user = await login(credentials)
//             // Once we get our user back, update our App.js user state with the user's firstname
//             console.log(user)
//             if(user) {
//                 setUser(user)
//                 // Redirect to posts page after successful login
//                 navigate('/posts')
//             } else {
//                 throw new Error()       
//             }
//         } catch(e) {
//             setMessage('Log in Failed - Try Again')
//         }
//     }

//     return (
//         <form className='mx-auto w-50 border p-3' onSubmit={handleSubmit}>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                 <input 
//                     type="email" 
//                     className="form-control" 
//                     id="exampleInputEmail1" 
//                     aria-describedby="emailHelp" 
//                     name='email'
//                     onChange={handleChange}
//                     value={credentials.email}
//                 />
//                 <div id="emailHelp" className="form-text">{message}</div>
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input 
//                     type="password" 
//                     className="form-control" 
//                     id="exampleInputPassword1"
//                     name='password'
//                     onChange={handleChange}
//                     value={credentials.password}
//                 />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     );
// }

// export default Login;