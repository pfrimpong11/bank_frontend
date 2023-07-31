import React from 'react';

const HistoryScreen = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Transaction History</h1>
                <p style={styles.details}>
                    {/* transaction history of the user fetched from the database and displayed here */}
                    Past transactions made
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    details: {
        fontSize: '18px',
        textAlign: 'center',
    },
};

export default HistoryScreen;
