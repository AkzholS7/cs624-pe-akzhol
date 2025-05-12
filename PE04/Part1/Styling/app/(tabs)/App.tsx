import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const profileCardColor = 'dodgerblue';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={require('../../assets/images/user.png')}
          />
        </View>

        <Text style={styles.cardName}>John Doe</Text>

        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>React Native Developer</Text>
        </View>

        <Text style={styles.cardDescription}>
          John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    padding: 10,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
