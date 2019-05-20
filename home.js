import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitleContainerStyle: {
        justifyContent: "center"
      },
      headerTitle: (
        <Text style={styles.headerText}>Zikr Counter</Text>
      ),
    };
  };
  

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>        
        <Button
          title="Manual Counter"
          onPress={() => {this.props.navigation.navigate('Counter');}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white', margin: 10, fontSize: 25, fontWeight: 'bold'
  }
});