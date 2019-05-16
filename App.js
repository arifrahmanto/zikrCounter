/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Button, View, Text, TouchableOpacity, Vibration } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class App extends Component {
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
    } else if(labelValue === 0) {
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
          <View style={styles.buttonItem1}>
            <Button onPress={() => { this.setState({ mode: 0 }) }}
              color={colors[0]}
              title={modes[0].toString()}
            />
          </View>
          <View style={styles.buttonItem1}>
            <Button onPress={() => { this.setState({ mode: 1 }) }}
              color={colors[1]}
              title={modes[1].toString()}
            />
          </View>
          <View style={styles.buttonItem2}>
            <Button onPress={() => { this.setState({ mode: 2 }) }}
              color={colors[2]}
              title={modes[2].toString()}
            />
          </View>
          <View style={styles.buttonItem2}>
            <Button onPress={() => { this.setState({ mode: 3 }) }}
              color={colors[3]}
              title={modes[3].toString()}
            />
          </View>
          <View style={styles.buttonItem2}>
            <Button onPress={() => { this.setState({ mode: 4 }) }}
              color={colors[4]}
              title={modes[4].toString()}
            />
          </View>
          <View style={styles.buttonItem3}>
            <Button onPress={() => { this.setState({ mode: 5 }) }}
              color={colors[5]}
              title={modes[5].toString()}
            />
          </View>
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

const colors = ['#0099FF', '#0099CC', '#009999', '#009966', '#009933', '#009900'];
const colors2 = ['#00FFFF', '#00FFCC', '#00FF99', '#00FF66', '#00FF33', '#00FF00'];
const modes = [3, 7, 10, 33, 100, 1000]
const maxNumber = 3000;
const vibratePattern = [500, 1000, 1500];
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
    flex: 5,
    margin: 1
  },
  buttonItem1: {
    flex: 2,
    margin: 1
  },
  buttonItem2: {
    flex: 3,
    margin: 1
  },
  buttonItem3: {
    flex: 4,
    margin: 1
  },
  touchContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
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

AppRegistry.registerComponent('App', () => App);