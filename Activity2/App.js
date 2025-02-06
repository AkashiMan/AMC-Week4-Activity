import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textBold}>Nathan <Text style={styles.textItalic}>Santos</Text></Text>
        </View>
    </ScrollView>
  );
 
};
const styles = StyleSheet.create({
  container: {
      borderWidth: 10,
      padding: 20,
      backgroundColor: "#9DC08B",
 
  },
  textBold:{
      fontSize: 35,
      textAlign: "center",
      fontWeight: 'bold',
  },
  textItalic:{
      fontStyle: "italic"
  }
 
  })

export default App;