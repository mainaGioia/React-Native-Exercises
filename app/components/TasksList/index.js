import React, { Component } from 'react';
import { ListView, Text, TextInput, View, AsyncStorage } from 'react-native';
import { TasksListItem } from '../TasksListItem';
import styles from './styles';

export default class TasksList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
			//listOfTasks: ['buy milk', 'walk the dog', 'do the laundry'],
			listOfTasks: [],
			text: 'Type here'
		};
	}

	render() {
		const dataSource = this.state.ds.cloneWithRows(this.state.listOfTasks);
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
		)
	}


	async _addTask(){
		const singleTask = { completed: false, text: this.state.text };
		const listOfTasks = [...this.state.listOfTasks, this.state.text];
		try {
			await AsyncStorage.setItem('listOfTasks', JSON.stringify(listOfTasks));
		}
		catch (error) {
			console.log('error setting data');
		}
		this._updateState(listOfTasks);
	}

	_changeTextInputValue(text){
		this.setState({text});
	}

	_renderRowData(rowData, rowID){
		return (
			<TasksListItem
				completed = { rowData.completed }
				id = { rowID }
				onPress = { (rowID) => this._completeTask(rowID) }
				text = { rowData.text }
			/>)
	}

	_completeTask (rowId) {
		
	}

	_updateState(listOfTasks){
		this.setState({listOfTasks});
		this._changeTextInputValue('');
	}

	componentDidMount(){
		this._updateList();
	}

	async _updateList(){
		try {
			let response = await AsyncStorage.getItem('listOfTasks');
			let listOfTasks = await JSON.parse(response) || [];
			this._updateState(listOfTasks);
		}
		catch (error) {
			console.log('error retrieving data');
		}
	}



}
