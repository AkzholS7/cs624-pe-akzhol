import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 502 - Secure Systems and Programs',
    'CS 504 - Operating Systems',
    'CS 506 - Software Engineering',
    'CS 508 - Database Systems',
    'CS 510 - Data Structures and Algorithms',
    'CS 512 - Programming Languages',
    'CS 520 - Web Application Development',
    'CS 624 - Full-Stack Development'
  ];

  const depthCourses = [
    'CS 530 - Machine Learning',
    'CS 531 - AI and Data Science'
  ];

  const capstoneCourse = 'CS 690 - Capstone Project';

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Your Favorite Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {favoriteCourse !== '' && (
        <Text style={styles.courseName}>You entered: {favoriteCourse}</Text>
      )}

      <Text style={styles.sectionTitle}>Core Courses</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Depth of Study Courses</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseItem}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Capstone Course</Text>
      <Text style={styles.courseItem}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  courseName: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  courseItem: {
    fontSize: 16,
    paddingVertical: 4
  }
});

export default App;
