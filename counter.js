import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Vibration } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export class Counter extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Manual Counter',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  constructor(props) {
    super(props);
    this.state = { actual: 0, mode: 3 };
  }

  render() {
    var target = modes[this.state.mode];
    var nextValue = (this.state.actual + 1) % maxNumber;
    nextValue = nextValue === 0 & this.state.actual > 0 ? nextValue + maxNumber : nextValue;
    var labelValue = this.state.actual % target;
    labelValue = labelValue === 0 & this.state.actual > 0 ? labelValue + target : labelValue;
    var backColorTouch = '#e9e9ef';
    if (labelValue === target) {
      Vibration.vibrate(vibratePattern);
      backColorTouch = 'khaki';
    } else if (labelValue === 0) {
      backColorTouch = 'palegreen';
    }
    var percentValue = labelValue * 100 / target;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItem0}>
            <Button onPress={() => { this.setState({ actual: 0 }) }}
              color='crimson'
              title='Reset'
            />
          </View>
          {modes.map((item, index) => {
            return <View key={index} style={buttonStyles[index]}>
              <Button onPress={() => { this.setState({ mode: index }) }}
                color={colors[index]}
                title={item.toString()}
              />
            </View>
          })}
        </View>
        <TouchableOpacity style={styles.touchContainer} onPress={() => { this.setState({ actual: nextValue }) }}>
          <ProgressCircle
            percent={percentValue}
            radius={170}
            borderWidth={17}
            color={colors2[this.state.mode]}
            shadowColor="#D3D3D3"
            bgColor={colors[this.state.mode]}
          >
            <Text style={styles.bigValue}>{labelValue}</Text>
          </ProgressCircle>
        </TouchableOpacity>
        <View style={styles.infoHeader}>
          <View>
            <Text>Target: {target}</Text>
          </View>
          <View>
            <Text>Saat ini: {this.state.actual}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: 20
  },
  buttonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonItem0: {
    flex: 5, margin: 1
  },
  buttonItem1: {
    flex: 2, margin: 1
  },
  buttonItem2: {
    flex: 3, margin: 1
  },
  buttonItem3: {
    flex: 4, margin: 1
  },
  touchContainer: {
    alignItems: 'center',  flex: 1,  justifyContent: 'center'
  },
  infoHeader: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  bigValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 170
  }
});

const modes = [3, 7, 10, 33, 100, 1000]
const colors = ['#0099FF', '#0099CC', '#009999', '#009966', '#009933', '#009900'];
const colors2 = ['#00FFFF', '#00FFCC', '#00FF99', '#00FF66', '#00FF33', '#00FF00'];
const buttonStyles = [styles.buttonItem1, styles.buttonItem1, styles.buttonItem2, styles.buttonItem2, styles.buttonItem2, styles.buttonItem3];
const maxNumber = 3000;
const vibratePattern = [500, 1000, 1500];