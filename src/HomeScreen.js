import React from 'react';

const MainScreen = () => {
  const accountBalanceDetails = {
    accountBalance: "1000.64",
  };

  const handleTransferPress = () => {
    // Handle transfer press logic
  };

  // Rest of the handle functions...

  return (
    <div style={styles.container}>
      <div style={styles.balanceContainer}>
        <h2 style={styles.balanceLabel}>Balance (GHS)</h2>
        <p style={styles.balanceAmount}>{accountBalanceDetails.accountBalance}</p>
      </div>

      <div style={styles.iconsContainer}>
        <button style={styles.iconButton} >
          <img src={require('./images/transfer.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>Transfer</div>
        </button>
        <button style={styles.iconButton} >
          <img src={require('./images/momo.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>MOMO</div>
        </button>
        <button style={styles.iconButton} >
          <img src={require('./images/bills.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>Bills</div>
        </button>
        <button style={styles.iconButton} >
          <img src={require('./images/transaction_history.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>History</div>
        </button>
        <button style={styles.iconButton} >
          <img src={require('./images/currency-converter.jpg')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>converter</div>
        </button>
        {/* Rest of the icon buttons */}
      </div>

      <div style={styles.additionalContainer}>
        <button style={styles.additionalButton} >
          <img src={require('./images/profile.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>Profile</div>
        </button>
        <button style={styles.additionalButton} >
          <img src={require('./images/help.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>Help</div>
        </button>
        <button style={styles.additionalButton} >
          <img src={require('./images/about.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>about</div>
        </button>
        {/* Rest of the additional buttons */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: '20px',
  },
  balanceContainer: {
    backgroundColor: '#66B5E1',
    borderRadius: '10px',
    paddingLeft: '50px',
    paddingTop: '5px',
    paddingBottom: '1px',
    marginBottom: '20px',
    marginTop: 0,
    alignItems: 'center',
  },
  balanceLabel: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  balanceAmount: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  iconsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '10px',
    marginTop: '5px',
  },
  iconButton: {
    alignItems: 'center',
    marginBottom: '30px',
    width: '48%',
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  iconImage: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  iconText: {
    color: '#222',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  additionalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    paddingLeft: '15px',
    paddingRight: '20px',
    backgroundColor: '#66B5E1',
    borderRadius: '10px',
    height: '70px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  additionalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66B5E1',
    borderWidth: 0,
  },
  additionalIcon: {
    width: '30px',
    height: '30px',
    marginBottom: '10px',
  },
  additionalText: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default MainScreen;
