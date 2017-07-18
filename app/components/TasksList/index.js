import React, { Component } from 'react';
import { ListView, Text } from 'react-native';

export default class TasksList extends Component {

	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.state = {
			dataSource: ds.cloneWithRows([
			'buy milk',
			'walk the dog',
			'do laundry',
			'finish the app'
			])
		};
	}

	render() {
		return (
			<ListView
			dataSource = { this.state.dataSource }
			renderRow = { (rowData) => <Text> {rowData} </Text> }
			/>
            );

	}

}
