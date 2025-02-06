import React from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Morning',
    data: [
      { id: '1', name: 'Wake up' },
      { id: '2', name: 'Take a bath' },
      { id: '3', name: 'Eat' },
      { id: '4', name: 'Watch a Movie' },
      { id: '5', name: 'Play ML' },
      { id: '6', name: 'Eat' },
    ],
  },
{
  title: 'Afternoon',
    data: [
      { id: '7', name: 'Sleep' },
      { id: '8', name: 'Eating a Dessert' },
      { id: '9', name: 'Watch a Movie' },
      { id: '10', name: 'Play ML' },
      { id: '11', name: 'Watch a Movie' },
      { id: '12', name: 'Take a bath' },
    ],
 },

 {
  title: 'Evening',
    data: [
      { id: '13', name: 'Take A Nap' },
      { id: '14', name: 'eat' },
      { id: '15', name: 'Play ml' },
      { id: '16', name: 'Watch' },
      { id: '17', name: 'wake ' },
      { id: '18', name: 'puyatan' },
      { id: '19', name: 'Eating a Dessert' },
      { id: '20', name: 'Watch a Movie' },
      { id: '21', name: 'Play ML' },
      { id: '22', name: 'Watch a Movie' },
      { id: '23', name: 'Take a bath' },
       { id: '24', name: 'Eating a Dessert' },
      { id: '25', name: 'Take a bath' },
    ],
 },

];



const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id} // Use the id as the key
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text> {/* Access item.name */}
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;