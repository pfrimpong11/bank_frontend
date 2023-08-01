import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './styles/SignupScreen.css';

const SignupScreen = () => {
    const navigateToLogin = "/Login";
    const navigate = useNavigate();

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [ghana_card_number, setGhanaCardNumber] = useState('');
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

    const handleSignUpPress = async() => {
        // Save the details of the user in the database and navigate to the login screen
        const payload = {
            first_name,
            last_name,
            date_of_birth,
            phone,
            email,
            ghana_card_number,
            address,
            password
        }

   const res =   await  axios.post("",JSON.stringify(payload),{
        headers:{
            withCredentials:true
        }
      })
      if (res.data.ok) {
          navigate("/Login");
        
      }
      else{

        alert("Something bad hapened try agian")
      }


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
        <div style={styles.container}>
            <div style={styles.registerBox}>
                <h1 style={styles.registerText}>Register</h1>
            </div>
            <div style={styles.bottomHalf}>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="First Name"
                        value={first_name}
                        onChange={handleFirstNameChange}
                        required
                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={handleLastNameChange}
                        required

                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Date of Birth (dd-mm-yy)"
                        value={date_of_birth}
                        onChange={handleDateOfBirthChange}
                        required

                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="tel"
                        placeholder="Phone Number (233XXXXXXX)"
                        value={phone}
                        onChange={handlePhoneNumberChange}
                        required

                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required

                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Gh Card Number"
                        value={ghana_card_number}
                        onChange={handleGhanaCardNumberChange}
                        required

                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Address (GA-xxx-xxxx)"
                        value={address}
                        required
                        onChange={handleAddressChange}
                    />
                </div>
                <div style={styles.inputBox}>
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required

                    />
                </div>
                <div style={styles.signupButtonBox}>
                <button style={styles.signupButton} onClick={handleSignUpPress}>
                    Register
                </button>
                </div>
                <p style={styles.signInText}>
                    Already have an account? <Link to={navigateToLogin} style={styles.signinLink} > Sign in </Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#66B5E1',
        minHeight: '100vh',
    },
    
    registerBox :{
        paddingTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 0,
    },
    
    registerText :{
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: '5px',
    },
    
    bottomHalf: {
        flex: 1,
        backgroundColor: '#66B5E1',
        padding: '20px',
    },
    
    input: {
        height: '50px',
        width: '90%',
        borderColor: 'whit',
        borderRadius: '50px',
        marginTop: '20px',
        paddingVertical: '10px',
        paddingLeft: '20px',
        backgroundColor: '#ffffff',
        borderWidth: 0,
    },
    
    signupButtonBox:{
        marginLeft: '25%',
    },
    
    signupButton: {
        backgroundColor: 'white',
        borderRadius: '25px',
        marginTop: '20px',
        padding: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',
        color: '#000',
        borderWidth: 0,
    },
    
    signupButtonText: {
        color: '#222',
        fontWeight: 'bold',
    },
    
    signInButton: {
        marginTop: '20px',
        alignSelf: 'center',
        
    },
    
    signInText: {
        color: 'white',
        fontWeight: '500',
    },
    
    signinLink:{
        textDecoration: 'none',
        color: '#fff',
    },
};

export default SignupScreen;























// import React, { useState } from 'react';

// import './styles/SignUpScreen.css';

// const SignUpScreen = () => {
//     const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     date_of_birth: '',
//     phone: '',
//     email: '',
//     ghana_card_number: '',
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
//             <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Last Name:</label>
//             <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Date of Birth:</label>
//             <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Phone Number:</label>
//             <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//             <label>Ghana Card Number:</label>
//             <input type="text" name="ghana_card_number" value={formData.ghana_card_number} onChange={handleChange} />
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
