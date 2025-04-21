# cs624-pe-akzhol

Input

The application accepts input from the user through a TextInput field, allowing them to type in their favorite MSCS course. This input is managed using React's useState hook to update and reflect changes in real-time. Additionally, the app uses a local image (icon.png) from the assets folder, which is loaded using the Image component. No external APIs or files are required beyond these two inputs.

Process

The app is built using a functional component structure with an arrow function as required. It utilizes the core components from React Native—View, Text, ScrollView, Image, TextInput, and StyleSheet. The courses are hardcoded into three categories: core, depth of study, and capstone. The ScrollView makes the screen vertically scrollable. StyleSheet is used to format and layout the UI elements. Input entered into the TextInput is captured using onChangeText and displayed below the input field.

Output

The user interface displays the app icon, a text input field for entering a favorite course, and a scrollable list of 8 core courses, 2 depth of study courses, and 1 capstone course. The UI is clean, readable, and responds dynamically to the user’s typed input. It meets all the assignment requirements and is ready to run on Expo Go or a web browser using npm run web.

