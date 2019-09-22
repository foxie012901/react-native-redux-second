import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import TabNavigator from "react-native-tab-navigator"

import IconFont from 'react-native-vector-icons/Ionicons'

import Todolist from './app/components/Todolist/Todolist'
import PickerThree from './app/components/PickerThree/PickerThree'
// import pickThree

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'todolist'
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TabNavigator>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'todolist'}
            title='todolist'
            renderIcon={() => <IconFont name={'ios-globe'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'ios-globe'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'todolist' })}
          >
            <Todolist />
          </TabNavigator.Item>




          <TabNavigator.Item
            selected={this.state.selectedTab === 'pickerthree'}
            title='pickerthree'
            renderIcon={() => <IconFont name={'ios-settings'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'ios-settings'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'pickerthree' })}
          >
            <PickerThree />
          </TabNavigator.Item>


        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});