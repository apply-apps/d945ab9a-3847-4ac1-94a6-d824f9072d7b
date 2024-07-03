// Filename: index.js
// Combined code from all files
import "react-native-gesture-handler";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const tales = [
  { id: '1', title: 'The Little Red Hen' },
  { id: '2', title: 'The Tortoise and the Hare' },
  { id: '3', title: 'The Three Little Pigs' },
];

const talesDetails = {
  '1': 'Once upon a time, a little red hen...',
  '2': 'Once upon a time, a hare who was very proud...',
  '3': 'Once upon a time, three little pigs...',
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="TalesList">
          <Stack.Screen name="TalesList" component={TalesList} options={{ title: 'Tales for Kids' }} />
          <Stack.Screen name="TaleDetail" component={TaleDetail} options={{ title: 'Tale Detail' }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const TalesList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {tales.map(tale => (
        <View style={styles.taleContainer} key={tale.id}>
          <Text style={styles.taleTitle}>{tale.title}</Text>
          <Button
            title="Read More"
            onPress={() => navigation.navigate('TaleDetail', { taleId: tale.id })}
          />
        </View>
      ))}
    </View>
  );
};

const TaleDetail = ({ route }) => {
  const { taleId } = route.params;
  const taleContent = talesDetails[taleId];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.content}>{taleContent}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  taleContainer: {
    marginBottom: 20,
  },
  taleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});