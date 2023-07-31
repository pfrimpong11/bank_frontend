import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillsScreen = () => {
    const navigate = useNavigate();

    const [selectedType, setSelectedType] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handlePayPress = () => {
        //perform transaction and navigate to the transaction complete screen
        // Implement your transaction logic here
        // For now, let's just navigate to the TransactionCompleteScreen
        navigate("/Status"); // Navigate to TransactionCompleteScreen
    };

    const handleToggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        setDropdownVisible(false);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <div style={styles.formElement}>
                    <label style={styles.label}>Type</label>
                    <div
                        style={styles.input}
                        onClick={handleToggleDropdown}
                    >
                        <span style={styles.dropdownValue}>
                            {selectedType || 'Select Type'}
                        </span>
                    </div>
                    {dropdownVisible && (
                        <div style={styles.dropdown}>
                            <div
                                style={styles.dropdownItem}
                                onClick={() => handleSelectType('Electricity')}
                            >
                                <span style={styles.dropdownItemText}>Electricity</span>
                            </div>
                            <div
                                style={styles.dropdownItem}
                                onClick={() => handleSelectType('Dstv')}
                            >
                                <span style={styles.dropdownItemText}>Dstv</span>
                            </div>
                            <div
                                style={styles.dropdownItem}
                                onClick={() => handleSelectType('Water')}
                            >
                                <span style={styles.dropdownItemText}>Water</span>
                            </div>
                        </div>
                    )}
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>ID Number</label>
                    <input
                        style={styles.input}
                        placeholder="Enter ID"
                    />
                </div>
                <div style={styles.formElement}>
                    <label style={styles.label}>Amount</label>
                    <input
                        style={styles.input}
                        placeholder="Enter amount"
                        type="number"
                    />
                </div>
                <button
                    style={styles.sendButton}
                    onClick={handlePayPress}
                >
                    Pay
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
        marginTop: 50,
    },
    formElement: {
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
    },
    dropdownValue: {
        fontSize: 16,
        color: 'black',
    },
    dropdown: {
        marginTop: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#66B5E1',
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#fff',
    },
    sendButton: {
        backgroundColor: '#66B5E1',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
};

export default BillsScreen;
