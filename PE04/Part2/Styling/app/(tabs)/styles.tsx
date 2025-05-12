import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

const baseBoxStyles = {
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  borderWidth: 2,
  height: 150,
  width: 150,
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});

export default function getStyleSheet(useDarkTheme: boolean) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
