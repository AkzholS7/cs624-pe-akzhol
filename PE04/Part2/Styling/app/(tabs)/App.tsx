import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

const profileCardColor = 'dodgerblue';

const data = Array.from({ length: 6 }, (_, i) => ({
  id: i.toString(),
  name: 'John Doe',
  title: 'React Native Developer',
  description:
    'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
}));

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setSelectedId(prev => (prev === id ? null : id));
  };

  const renderItem = ({ item }: { item: typeof data[0] }) => {
    const isSelected = selectedId === item.id;

    return (
      <TouchableOpacity onPress={() => handlePress(item.id)} activeOpacity={0.8}>
        <View style={[styles.cardContainer, isSelected && styles.cardExpanded]}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('../../assets/images/user.png')} />
          </View>
          {isSelected && (
            <>
              <Text style={styles.cardName}>{item.name}</Text>
              <View style={styles.cardOccupationContainer}>
                <Text style={styles.cardOccupation}>{item.title}</Text>
              </View>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const cardWidth = 150;
const expandedCardWidth = 300;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: cardWidth,
    height: 200,
    margin: 10,
    padding: 5,
  },
  cardExpanded: {
    width: expandedCardWidth,
    height: 400,
    padding: 10,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    paddingTop: 5,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 5,
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  cardDescription: {
    fontStyle: 'italic',
    marginHorizontal: 20,
    marginTop: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
