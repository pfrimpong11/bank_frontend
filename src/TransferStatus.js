import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransferStatus = () => {
    const navigate = useNavigate();

    const transactionData = {
        //data should be fetched from database of the transaction performed
        amount: "100.00",
        recipient: "[account number / wallet number / name]",
        // reference: "[reference]",
    };

    const handleDonePress = () => { //navigate to the main screen to perform other transactions
        navigate("/Home");
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Transaction Complete</h1>
                <p style={styles.details}>
                    You have sent ${transactionData.amount} to {transactionData.recipient} with reference {transactionData.reference}.
                </p>
                <button style={styles.doneButton} onClick={handleDonePress}>
                    <span style={styles.doneButtonText}>Done</span>
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: '20%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '20%',
    },
    details: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: '20%',
    },
    doneButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 25,
        padding: '10px 60px',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        border: 'none',
        cursor: 'pointer',
        marginLeft: '20%',
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
};

export default TransferStatus;
