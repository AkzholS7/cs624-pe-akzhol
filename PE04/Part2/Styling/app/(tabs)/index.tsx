import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';

const HomeScreen: React.FC = () => {
  return <App />;
};

export default HomeScreen;

// Register the main component (used in Expo projects)
registerRootComponent(HomeScreen);
