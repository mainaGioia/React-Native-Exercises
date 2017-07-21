import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

export default class TasksListItem extends Component {

  static propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props);
  }

  render() {
    const isCompleted = this.props.completed ? 'line-through' : 'none';
    const textStyle = { fontSize: 20, textDecorationLine: isCompleted };
    return (
      <View>
        <TouchableHighlight
            onPress = { () => this.props.onPress(this.props.id) }
            underlayColor = { '#D5DBDE' }>
            <Text style = { textStyle }> {this.props.text} </Text>
        </TouchableHighlight>
      </View>
    )
  }


}
