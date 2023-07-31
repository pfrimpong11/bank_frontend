import React from "react";

const HelpScreen = () => {
  const handleEmailUsPress = () => {
    // Add your email handling logic for regular React
    //For example, you can use window.open('mailto:thehqbank@gmail.com?subject=HQBankCustomerService&body=');
  };

  const handleWhatsAppPress = () => {
    // Add your WhatsApp handling logic for regular React
    // For example, you can use window.open('whatsapp://send?text=&phone=+233540734085');
  };

  const handleCallUsPress = () => {
    // Add your phone call handling logic for regular React
    // For example, you can use window.open('tel:233540734085');
  };

  return (
    <div style={styles.container}>
      <div style={{ flex: 1, padding: 16 }}>
        <div style={styles.container}>
          <div style={styles.helpContainer}>
            <img src={require('./images/help.png')} style={styles.helpImage} alt="Help" />
            <p style={styles.helpText}>Help</p>
          </div>
          <div style={styles.contactContainer} onClick={handleEmailUsPress}>
            <div style={styles.contactImageBox}>
              <img src={require('./images/email.png')} style={styles.contactImage} alt="Email" />
            </div>
            <div style={styles.contactTextBox}>
              <p style={styles.contactText}>Email Us</p>
            </div>
          </div>
          <div style={styles.contactContainer} onClick={handleWhatsAppPress}>
            <div style={styles.contactImageBox}>
              <img src={require('./images/WhatsApp.png')} style={styles.contactImage} alt="WhatsApp" />
            </div>
            <div style={styles.contactTextBox}>
              <p style={styles.contactText}>WhatsApp Us</p>
            </div>
          </div>
          <div style={styles.contactContainer} onClick={handleCallUsPress}>
            <div style={styles.contactImageBox}>
              <img src={require('./images/call.jpg')} style={styles.contactImage} alt="Call" />
            </div>
            <div style={styles.contactTextBox}>
              <p style={styles.contactText}>Call Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  helpContainer: {
    alignItems: "center",
    marginVertical: 50,
    marginBottom: 70,
  },
  helpImage: {
    alignItems: "center",
    width: 100,
    height: 100,
  },
  helpText: {
    color: "#66B5E1",
    fontWeight: "bold",
    fontSize: 18,
  },
  contactContainer: {
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: "row",
    cursor: "pointer",
  },
  contactImageBox: {
    marginVertical: 5,
  },
  contactImage: {
    width: 40,
    height: 40,
  },
  contactTextBox: {
    marginVertical: 5,
    padding: 10,
  },
  contactText: {
    fontWeight: "400",
  },
};

export default HelpScreen;
