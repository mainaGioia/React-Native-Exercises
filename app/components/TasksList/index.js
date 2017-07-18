import React, { Component } from 'react';
import { ListView, Text, TextInput, View } from 'react-native';
import styles from './styles';

export default class TasksList extends Component {

	constructor(props) {
		super(props);
		// const ds = new ListView.DataSource({
		// 	rowHasChanged: (r1, r2) => r1 !== r2
		// });
		this.state = {
			ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
			//items: ['buy milk', 'walk the dog', 'do the laundry'],
			items: [],
			text: 'ciao'
		};
	}

	render() {
		const dataSource = this.state.ds.cloneWithRows(this.state.items);
		return (
			<View style={ styles.container }>
				<TextInput
					autoCorrect={ false }
					onChangeText={ (text) => this._changeTextInputValue(text) }
					onSubmitEditing={ () => this._addTask() }
					returnKeyType={ 'done' }
					style={ styles.textInput }
					value={ this.state.text }
				/>
				<ListView
					dataSource = { dataSource }
					enableEmptySections={ true }
					renderRow = { (rowData) => this._renderRowData(rowData) }
				/>
			</View>
		);
	}



	_addTask(){
		const items = [...this.state.items, this.state.text];
		this.setState({items});
		this._changeTextInputValue('');
	}

	_changeTextInputValue(text){
		this.setState({text});
	}

	_renderRowData(rowData){
		return (<Text>{rowData}</Text>)
	}

}
