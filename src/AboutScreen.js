import React from "react";

const AboutScreen = () => {
    const handleTwitterPress = () =>{
        const twitterPageLink = 'https://twitter.com/bank_hq';
        window.open(twitterPageLink, '_blank'); // To open the link in a new tab
    };

    const handleInstagramPress = () =>{
        const instagramPageLink = 'https://www.instagram.com/thehqbank/?next=%2Fj8xt%2F&hl=en-gb';
        window.open(instagramPageLink, '_blank');
    };

    const handleFacebookPress = () =>{
        const facebookPageLink = 'https://www.facebook.com/profile.php?id=100095264677925';
        window.open(facebookPageLink, '_blank');
    };

    const handleLinkedInPress = () =>{
        const linkedInPageLink = 'https://www.linkedin.com/in/hq-bank-750675285/';
        window.open(linkedInPageLink, '_blank');
    };


    return (
        <div style={styles.container}>
            <div style={{ flex: 1, padding: 16 }}>
                <div style={styles.container}>
                    <div style={styles.aboutContainer}>
                        <img src={require('./images/about.png')} style={styles.aboutImage} alt="About" />
                        <span style={styles.aboutText}>About</span>
                    </div>
                    <div style={styles.aboutDetailsContainer}>
                        <div style={styles.visionBox}>
                            <span style={styles.visionTitle}>VISION:</span>
                            <p style={styles.visionText}>
                                To be the leading financial partner empowering individuals, businesses, and communities to achieve their dreams and aspirations through innovative banking solutions and exceptional customer experiences.
                            </p>
                        </div>
                        <div style={styles.missionBox}>
                            <span style={styles.missionTitle}>MISSION:</span>
                            <p style={styles.missionText}>
                                At HQ Banks, our mission is to provide trusted financial services that cater to the diverse needs of our customers. We are committed to fostering financial growth and stability by offering personalized, secure, and accessible banking solutions. Through a dedicated team of professionals, cutting-edge technology, and a strong community focus, we aim to deliver excellence in every interaction, helping our customers thrive and build a better future.
                            </p>
                        </div>
                    </div>
                    <div style={styles.socialMediaContainer}>
                        <div style={styles.SocialMediaBox} onClick={handleTwitterPress}>
                            <img src={require('./images/twitter.png')} style={styles.socialMediaImage} alt="Twitter" />
                        </div>
                        <div style={styles.SocialMediaBox} onClick={handleInstagramPress}>
                            <img src={require('./images/instagram.png')} style={styles.socialMediaImage} alt="Instagram" />
                        </div>
                        <div style={styles.SocialMediaBox} onClick={handleFacebookPress}>
                            <img src={require('./images/facebook.png')} style={styles.socialMediaImage} alt="Facebook" />
                        </div>
                        <div style={styles.SocialMediaBox} onClick={handleLinkedInPress}>
                            <img src={require('./images/linkedIn.png')} style={styles.socialMediaImage} alt="LinkedIn" />
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
        backgroundColor: '#fff',
    },
    aboutContainer: {
        alignItems: 'center',
        marginVertical: 50,
        marginBottom: 70,
    },
    aboutImage: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    aboutText: {
        color: '#66B5E1',
        fontWeight: 'bold',
        fontSize: 18,
    },
    aboutDetailsContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    visionBox: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    visionTitle: {
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20,
        color: '#66B5E1',
    },
    visionText: {
        borderRadius: 20,
        borderColor: '#66B5E1',
        borderWidth: 2,
        padding: 10,
        lineHeight: 18,
        textAlign: 'justify',
    },
    missionBox: {
        marginHorizontal: 20,
    },
    missionTitle: {
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20,
        color: '#66B5E1',
    },
    missionText: {
        borderRadius: 20,
        borderColor: '#66B5E1',
        borderWidth: 2,
        padding: 10,
        lineHeight: 18,
        textAlign: 'justify',
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    SocialMediaBox: {
        margin: 5,
    },
    socialMediaImage: {
        width: 50,
        height: 50,
    },
};

export default AboutScreen;
