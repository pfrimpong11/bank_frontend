import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TransferScreen = () => {
    const navigate = useNavigate();

    const [accountData, setAccountData] = useState({
        //data should be fetched from database
        name: "John Doe",
    });

    const handleVerifyPress = () => {
        //verify the account number and input the name related to the account number in the name box
        // Implement your verification logic here, for now, let's just assume the verification is successful and update the account name
        setAccountData({
            ...accountData,
            name: "John Doe", // Replace this with the actual name fetched from the verification process
        });
    };

    const handleSendPress = () => {
        //perform transaction and navigate to the transaction complete screen
        // Implement your transaction logic here
        // For now, let's just navigate to the TransactionCompleteScreen
        navigate("/Status"); // Navigate to TransactionCompleteScreen
    };


    return (
        <div style={styles.container}>
            <div style={styles.headerBox}>
                <h2 style={styles.headerText}>Transfer</h2>
            </div>
            <div style={styles.formContainer}>
                <div style={styles.formElement}>
                    <label style={styles.label}>Account Number</label>
                    <div style={styles.inputContainer}>
                        <input style={styles.input} type="number" placeholder="Enter account number" />
                        <button style={styles.verifyButton} onClick={handleVerifyPress}>Verify</button>
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Account Name</label>
                    <div style={styles.input}>
                        <div style={styles.outputText}>{accountData.name}</div>
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Reference</label>
                    <div>
                        <input style={styles.input} type="text" placeholder="Enter reference" />
                    </div>
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Amount</label>
                    <div>
                        <input style={styles.input} type="number" placeholder="Enter amount" />
                    </div>
                </div>
                <button style={styles.sendButton} onClick={handleSendPress}>Send</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerBox:{
    backgroundColor: '#66B5E1',
    borderRadius: '10px',
    paddingLeft: '25%',
    width: '70%',
    marginBottom: '20px',
    marginTop: '15px',
    alignItems: 'center',
    },
    headerText: {
        color: '#fff',
    },
    formContainer: {
        paddingTop: 20,
    },
    formElement: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        paddingBottom: '5px',
        paddingLeft: '5px',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        height: 40,
        border: '1px solid lightgray',
        borderRadius: '25px',
        padding: '0 10px',
        marginBottom: 5,
        backgroundColor: 'lightgray',
    },
    outputText: {
        padding: 10,
    },
    verifyButton: {
        backgroundColor: '#66B5E1',
        borderRadius: '25px',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        marginLeft: '10px',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderWidth: 0,
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: '25px',
        alignItems: 'center',
        marginBottom: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        cursor: 'pointer',
        borderWidth: 0,
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '15px',
        paddingBottom: '15px',
    },
};

export default TransferScreen;
