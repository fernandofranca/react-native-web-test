import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SharedApp from './src/App.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SharedApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
