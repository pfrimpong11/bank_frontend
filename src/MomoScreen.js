import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MomoScreen = () => {
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('Bank to MOMO');
    const highlightPosition = useRef(0);

    const handleSendPress = () => {
        //perform transaction and navigate to the transaction complete screen
        // Implement your transaction logic here
        // For now, let's just navigate to the TransactionCompleteScreen
        navigate("/Status"); // Navigate to TransactionCompleteScreen
    };

    const handleToggle = (option) => {
        setSelectedOption(option);
        highlightPosition.current = option === 'Bank to MOMO' ? 0 : 1;
    };

    const highlightStyle = {
        transform: `translateX(${highlightPosition.current === 0 ? 0 : 210}px)`, // Adjust the value as per your requirement
    };

    return (
        <div style={styles.container}>
            <div style={styles.toggleContainer}>
                <div
                    className={`toggleItem ${selectedOption === 'Bank to MOMO' ? 'selectedToggle' : ''}`}
                    onClick={() => handleToggle('Bank to MOMO')}
                >
                    <span className={`toggleText ${selectedOption === 'Bank to MOMO' ? 'selectedToggleText' : ''}`}>
                        Bank to MOMO
                    </span>
                </div>
                <div
                    className={`toggleItem ${selectedOption === 'MOMO to Bank' ? 'selectedToggle' : ''}`}
                    onClick={() => handleToggle('MOMO to Bank')}
                >
                    <span className={`toggleText ${selectedOption === 'MOMO to Bank' ? 'selectedToggleText' : ''}`}>
                        MOMO to Bank
                    </span>
                </div>
                <div className="highlight" style={highlightStyle}></div>
            </div>
            <div style={styles.formContainer}>
                <div style={styles.formElement}>
                    <label className="label">Amount</label>
                    <input className="input" placeholder="Enter amount" type="numeric" />
                </div>
                <div style={styles.formElement}>
                    <label className="label">Wallet Number / Account Number</label>
                    <input className="input" placeholder="Enter Wallet/Account Number" type="number" />
                </div>
                <div style={styles.formElement}>
                    <label className="label">Reference</label>
                    <input className="input" placeholder="Enter your reference" />
                </div>
                <button className="sendButton" onClick={handleSendPress}>
                    Send
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    toggleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px', // Add horizontal padding for space
        marginTop: '50px',
        marginBottom: '20px',
    },
    toggleItem: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderWidth: '1px',
        borderColor: '#66B5E1',
        borderRadius: '25px',
    },
    selectedToggle: {
        backgroundColor: '#66B5E1',
    },
    toggleText: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    selectedToggleText: {
        color: 'white',
    },
    highlight: {
        position: 'absolute',
        width: '50%', // Adjust the value as per your requirement
        height: '100%',
        backgroundColor: 'rgba(135, 206, 250, 0.2)', // Light blue color with opacity
        borderRadius: '25px',
    },
    formContainer: {
        padding: '20px',
    },
    formElement: {
        marginBottom: '20px',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    input: {
        height: '40px',
        borderColor: 'lightgray',
        borderWidth: '1px',
        borderRadius: '25px',
        padding: '10px',
        marginBottom: '5px',
        backgroundColor: 'lightgray',
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: '25px',
        padding: '10px',
        alignItems: 'center',
        marginBottom: '20px',
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
    },
};

export default MomoScreen;
