import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/LoginScreen.css';


const HomeScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginPress = () => {
        // Save login details of the user and grant them access to the app's features

        // const userEmail = 'email'; // valid email of user
        // const userPassword = '123'; // valid password of user

        // if (email === userEmail && password === userPassword) {
        //     // Navigate to the mainscreen on successful login
        //     // handleNavigationToMainScreen();
        //     setEmail('');
        //     setPassword('');
        // } else {
        //     // Show an error message for an invalid credential
        //     alert('Invalid email or password');
        // }

        // For demonstration purposes, directly navigate to the MainScreen
        // handleNavigationToMainScreen();
        setEmail('');
        setPassword('');
    };

    const handleResetPasswordPress = () => {
        // Implement your password reset logic here
        // You can use the 'forgotPasswordEmail' state variable to retrieve the entered email address
        // and send a reset password link to the user's email.
        // This is just a placeholder function, replace it with your actual logic.
        alert(`Reset password link sent to: ${forgotPasswordEmail}`);
        setModalVisible(false);
        // handleNavigationToForgotPasswordModal();
    };

    return (
        <div className="container">
            <div className="topHalf">
                <img src={require('./images/hq-bank-logo.png')} alt="Bank Logo" className="bankImage" />
            </div>
            <div className="bottomHalf">
                <div className="inputBox">
                <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                </div>
                <div className="inputBox">
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>

                <p className="forgotPassword">
                    <Link className="forgotPassworLink" onClick={() => setModalVisible(true)} >Forgot Password?</Link>
                </p>

                {/* Modal content */}
                {modalVisible && (
                    <div className="modal">
                        <div className="modalContent">
                            <h2 className="modalTitle">Forgot Password</h2>
                            <div className="emailAddressTextBox">
                                <span className="emailAddressText">Enter email address</span>
                            </div>
                            <div className="modalEmailbox">
                                <input
                                    type="text"
                                    className="forgotpasswordemailInput"
                                    onChange={(event) => setForgotPasswordEmail(event.target.value)}
                                />
                            </div>
                            <div className="modalResetButtonBox">
                                <button className="resetButton" onClick={handleResetPasswordPress}>
                                    Reset Password
                                </button>
                            </div>
                            <div className="modalCloseButtonBox">
                                <button className="closeButton" onClick={() => setModalVisible(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="loginButtonBox">
                <button className="loginButton" onClick={handleLoginPress}>
                    Login
                </button>
                </div>
                <p className="signupText"> 
                    Don't have an account? <Link to="/Signup" className="signupLink" > Sign up </Link>
                </p>
            </div>
        </div>
    );
};

export default HomeScreen;
































// import React, { useState } from 'react';

// import './styles/LoginScreen.css';
// import logo from './images/hq-bank-logo.png';

// const LoginScreen = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     };

//     const handleLogin = () => {
//     // Add your login logic here using the email and password states
//     // For simplicity, let's just log the email and password for now
//     console.log('Email:', email);
//     console.log('Password:', password);
//     };

//     return (
//     <div className='container'>
//         <div className='imageBox'>
//             <img src={logo} alt="app_logo" />
//         </div>
//         <div className='buttomContainer'>
//             <div className='formBox'>
//                 <form className='login-form'>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={handleEmailChange} />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={handlePasswordChange} />
//                 </div>
//                 <button type="button" onClick={handleLogin}>Login</button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default LoginScreen;
