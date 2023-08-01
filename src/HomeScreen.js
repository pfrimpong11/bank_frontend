import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {

    const navigate = useNavigate();

    useEffect(()=>{

      alert("Congratulations on creating the account your account have been credited with Ghc 1000.00")
    },[])
  const accountBalanceDetails = {
    accountBalance: "1000",
  };

  const handleTransferPress = () => {
    // Handle transfer press logic
    navigate("/Transfer");
  };

  const handleMomoPress = () => {
    // Handle MOMO press logic
    navigate("/Momo");
  };

  const handleBillPress = () => {
    // Handle Bill press logic
    navigate("/Bill");
  };

  const handleHistoryPress = () => {
    // Handle Transaction history press logic
    navigate("/History");
  };

  const handleConverterPress = () => {
    navigate("/Converter");
  };

  const handleProfilePress = () => {
    navigate("/Profile");
  };

  const handleHelpPress = () => {
    navigate("/Help");
  };

  const handleAboutPress = () => {
    navigate("/About");
  };


  return (
    <div style={styles.container}>
      <div style={styles.balanceContainer}>
        <h2 style={styles.balanceLabel}>Balance (GHS)</h2>
        <p style={styles.balanceAmount}>{accountBalanceDetails.accountBalance}</p>
      </div>

      <div style={styles.iconsContainer}>
        <button style={styles.iconButton} onClick={handleTransferPress} >
          <img src={require('./images/transfer.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>Transfer</div>
        </button>
        <button style={styles.iconButton} onClick={handleMomoPress} >
          <img src={require('./images/momo.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>MOMO</div>
        </button>
        <button style={styles.iconButton} onClick={handleBillPress} >
          <img src={require('./images/bills.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>Bills</div>
        </button>
        <button style={styles.iconButton} onClick={handleHistoryPress} >
          <img src={require('./images/transaction_history.png')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>History</div>
        </button>
        <button style={styles.iconButton} onClick={handleConverterPress} >
          <img src={require('./images/currency-converter.jpg')} alt="Transfer Icon" style={styles.iconImage} />
          <div style={styles.iconText}>converter</div>
        </button>
      </div>

      <div style={styles.additionalContainer}>
        <button style={styles.additionalButton} onClick={handleProfilePress} >
          <img src={require('./images/profile.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>Profile</div>
        </button>
        <button style={styles.additionalButton} onClick={handleHelpPress} >
          <img src={require('./images/help.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>Help</div>
        </button>
        <button style={styles.additionalButton} onClick={handleAboutPress} >
          <img src={require('./images/about.png')} alt="Profile Icon" style={styles.additionalIcon} />
          <div style={styles.additionalText}>about</div>
        </button>
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
