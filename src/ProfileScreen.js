import React from "react";

const ProfileScreen = ({ navigation }) => {
  const profileData = {
    //data should be fetched from database
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01-01-2000",
    phoneNumber: "233540734085",
    email: "group19@gmail.com",
    ghanaCardNumber: "GH-xxxxxxxxxxxx-x",
    address: "GA-123-4567",
    accountNumber: "1400005260509",
  };

  const handleLogoutPress = () => {
    //log the user out of the app and navigate to the login screen
    navigation.navigate("HomeScreen");
  };


  return (
    <div style={styles.container}>
      <div style={styles.logoutContainer} onClick={handleLogoutPress}>
        <div style={styles.logoutText}>Logout</div>
      </div>
      <div style={styles.profileContainer}>
        <img
          src={require("./images/profile.png")}
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileText}>PROFILE</div>
      </div>
      <div style={styles.detailsContainer}>
        <div>First Name</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.firstName}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>Last Name</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.lastName}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>DoB</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.dateOfBirth}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>Phone Number</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.phoneNumber}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>Email</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.email}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>GH Card Number</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.ghanaCardNumber}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>Address</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.address}</div>
        </div>
      </div>
      <div style={styles.detailsContainer}>
        <div>Account Number</div>
        <div style={styles.details}>
          <div style={styles.detailsText}>{profileData.accountNumber}</div>
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
    logoutContainer: {
      backgroundColor: "#66B5E1",
      width: 120,
      paddingVertical: 15,
      borderRadius: 50,
      alignItems: "center",
      left: 10,
      top: 5,
    },
    logoutText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    profileContainer: {
      alignItems: "center",
      marginVertical: 10,
    },
    profileImage: {
      alignItems: "center",
      width: 100,
      height: 100,
    },
    profileText: {
      color: "#66B5E1",
      fontWeight: "bold",
      fontSize: 18,
    },
    detailsContainer: {
      marginHorizontal: 15,
    },
    details: {
      height: 50,
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 50,
      marginTop: 1,
      marginBottom: 6,
      paddingHorizontal: 10,
      backgroundColor: "#66B5E1",
    },
    detailsText: {
      color: "#fff",
      margin: 15,
    },
  };

export default ProfileScreen;
