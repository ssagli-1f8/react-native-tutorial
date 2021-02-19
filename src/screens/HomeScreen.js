import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

// props passed in as first arg
const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;