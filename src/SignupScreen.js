import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/SignupScreen.css';

const SignupScreen = () => {
    const navigateToLogin = "/Login";

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [ghanaCardNumber, setGhanaCardNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleGhanaCardNumberChange = (e) => setGhanaCardNumber(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignUpPress = () => {
        // Save the details of the user in the database and navigate to the login screen
        console.log('User details:', {
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
            email,
            ghanaCardNumber,
            address,
            password
        });

        // navigateToLogin();

        setFirstName('');
        setLastName('');
        setDateOfBirth('');
        setPhoneNumber('');
        setEmail('');
        setGhanaCardNumber('');
        setAddress('');
        setPassword('');
    };

    return (
        <div className='container'>
            <div className="registerBox">
                <h1 className="registerText">Register</h1>
            </div>
            <div className="bottomHalf">
                <div className="inputBox">
                    <input
                        className="input"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="text"
                        placeholder="Date of Birth (dd-mm-yy)"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="tel"
                        placeholder="Phone Number (233XXXXXXX)"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="text"
                        placeholder="Gh Card Number"
                        value={ghanaCardNumber}
                        onChange={handleGhanaCardNumberChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="text"
                        placeholder="Address (GA-xxx-xxxx)"
                        value={address}
                        onChange={handleAddressChange}
                    />
                </div>
                <div className="inputBox">
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="signupButtonBox">
                <button className="signupButton" onClick={handleSignUpPress}>
                    Register
                </button>
                </div>
                <p className="signInText">
                    Already have an account? <Link to={navigateToLogin} className="signinLink" > Sign in </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupScreen;























// import React, { useState } from 'react';

// import './styles/SignUpScreen.css';

// const SignUpScreen = () => {
//     const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     phoneNumber: '',
//     email: '',
//     ghanaCardNumber: '',
//     address: '',
//     password: ''
//     });

//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//         ...prevData,
//         [name]: value
//     }));
//     };

//     const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to the server
//     console.log(formData);
//         };

//         return (
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label>First Name:</label>
//             <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Last Name:</label>
//             <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Date of Birth:</label>
//             <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Phone Number:</label>
//             <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Ghana Card Number:</label>
//             <input type="text" name="ghanaCardNumber" value={formData.ghanaCardNumber} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Address:</label>
//             <input type="text" name="address" value={formData.address} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Password:</label>
//             <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit">Sign Up</button>
//     </form>
//     );
// };

// export default SignUpScreen;
