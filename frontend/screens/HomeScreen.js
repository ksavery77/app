import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the English Learning Agent</Text>
      <Button
        title="Start Lesson"
        onPress={() => navigation.navigate('Lesson')}
      />
    </View>
  );
}
