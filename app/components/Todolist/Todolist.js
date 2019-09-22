import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    YellowBox,
    ActivityIndicator
} from 'react-native';

import TodolistUI from "./TodolistUI";

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: Each child in a list should have a unique'
        ])
        this.state = {
            // inputValue,
            // list,
            isShow: true
        };
    }
    componentDidMount() {
        this.setState({
            isShow: false
        })
    }
    render() {
        let Loading = (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator animating={this.state.isShow} /></View>
        )
        let PageW = (
            <TodolistUI
            //   inputValue={this.state.inputValue}
            //   list={this.state.list}
            //   _handleInputChange={this._handleInputChange}
            //   _onChangeData={this._onChangeData}
            //   _openId={this._openId}
            />
        )
        return (
            <View style={{ width: '100%', height: '100%' }}>
                {
                    this.state.isShow ? Loading : PageW
                }
            </View >
        );
    }
}
