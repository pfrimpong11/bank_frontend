import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './styles/LoginScreen.css';


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
        <div style={styles.container} >
            <div style={styles.topHalf}>
                <img src={require('./images/hq-bank-logo.png')} alt="Bank Logo" style={styles.bankImage} />
            </div>
            <div style={styles.bottomHalf}>
                <div style={styles.inputBox}>
                <input
                    type="text"
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                </div>
                <div style={styles.inputBox}>
                <input
                    type="password"
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>

                <p style={styles.forgotPassword}>
                    <Link style={styles.forgotPassworLink} onClick={() => setModalVisible(true)} >Forgot Password?</Link>
                </p>

                {/* Modal content */}
                {modalVisible && (
                    <div style={styles.modal}>
                        <div style={styles.modalContent}>
                            <h2 style={styles.modalTitle}>Forgot Password</h2>
                            <div style={styles.emailAddressTextBox}>
                                <span style={styles.emailAddressText}>Enter email address</span>
                            </div>
                            <div style={styles.modalEmailbox}>
                                <input
                                    type="text"
                                    style={styles.forgotpasswordemailInput}
                                    onChange={(event) => setForgotPasswordEmail(event.target.value)}
                                />
                            </div>
                            <div style={styles.modalResetButtonBox}>
                                <button style={styles.resetButton} onClick={handleResetPasswordPress}>
                                    Reset Password
                                </button>
                            </div>
                            <div style={styles.modalCloseButtonBox}>
                                <button style={styles.closeButton} onClick={() => setModalVisible(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div style={styles.loginButtonBox}>
                <button style={styles.loginButton} onClick={handleLoginPress}>
                    Login
                </button>
                </div>
                <p style={styles.signupText}> 
                    Don't have an account? <Link to="/Signup" style={styles.signupLink} > Sign up </Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection : 'column',
        minHeight: '100vh',
        backgroundColor : 'white',
    },
    topHalf: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bankImage: {
        width: '250px', /* Adjust the desired width */
        height: '250px', /* Adjust the desired height */
      },
      
      bottomHalf: {
        flex: 1,
        backgroundColor: '#66b5e1',
        borderTopLeftRadius: '120px',
        padding: '30px',
        paddingLeft: '50px',
      },
      
      appName: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '10px',
      },
    
      input: {
        height: '50px',
        width: '95%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: '50px',
        marginTop: '40px',
        paddingVertical: '30px',
        paddingLeft: 10,
        backgroundColor: '#ffffff',
      },
    
      forgotPassword: {
        marginTop: '7px',
        marginLeft: '20px',
        textAlign: 'left',
      },
    
    forgotPassworLink: {
      textDecoration: 'none',
      color: 'white',
    },
    
    loginButtonBox:{
        marginLeft: '50px',
    },
    
    loginButton: {
        backgroundColor: 'white',
        borderRadius: '25px',
        marginTop: '20px',
        padding: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
        color: '#000',
    },
      
      loginButtonText: {
        color: '#222',
        fontWeight: 'bold',
      },
      
      signupText :{
        color: 'white',
        fontWeight: 500,
        textAlign: 'center',
      },
    
      signupLink:{
        textDecoration: 'none',
        color: '#fff',
      },
      
      /* Modal Styling */
      modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '80%',
      },
      
      modalTitleBox: {
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '20px',
      },
      
      modalTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
      },
      
      emailAddressTextBox: {
        marginLeft: '20px',
        marginBottom: '5px',
      },
      
      emailAddressText: {
        fontWeight: 'bold',
      },
      
      modalEmailbox: {
        margin: '10px',
        marginBottom: '20px',
      },
      
      forgotpasswordemailInput: {
        height: '40px',
        width: '80%',
        marginBottom: '10px',
        paddingVertical: '10px',
        paddingLeft: '15px',
        borderColor: '#66b5e1',
        borderWidth: 1,
        borderRadius: '50px',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '15px',
      },
      
      modalResetButtonBox: {
        marginHorizontal: '50px',
        marginLeft: '25%',
      },
      
      resetButton: {
        backgroundColor: '#66b5e1',
        padding: '10px',
        alignItems: 'center',
        borderRadius: '50px',
        marginBottom: '10px',
      },
      
      resetButtonText: {
        color: 'white',
      },
      
      modalCloseButtonBox: {
        marginHorizontal: '50px',
        marginLeft: '25%',
      },
      
      closeButton: {
        backgroundColor: 'gray',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        alignItems: 'center',
        borderRadius: '50px',
      },
      
      closeButtonText: {
        color: 'white',
      },
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
