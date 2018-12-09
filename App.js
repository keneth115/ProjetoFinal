/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, AppRegistry , StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';

import Note from './app/componentes/note';


export default class App extends Component {

  state = {
    noteArray: [{'note': 'Teste sobre notas', 'date':'29/11/2018'}],
    noteText: '',
  }

  render() {
    
    let notes = this.state.noteArray.map((vol, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={ () => this.deleteNote(key)}/>

    });

    return (
      <View style={styles.container}>
	  
		<View style={styler.header}>
		  <Text style={styles.headerText}> Maua Keep </Text>
		</View>
		
    <ScrollView style={styles.scrollContainer}>
      {notes}
    </ScrollView>


    <View style={styles.footer}>
    
      <TouchableOpacity onPress = {this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <TextInput style = {styles.TextInput}
        onChangeText = {(noteText) => this.setState({noteText})} value={this.state.noteText}
        placeholder = '> Escrever Nota' placeholderTextColor='white' underlineColorAndroid='Transparent'>
      </TextInput>
  
    </View>

	  </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var data = new Date();
      this.state.noteArray.push({date: data.getFullYear() + "/" + data.getMonth()+ "/"+ data.getDate(), 'note': this.state.noteText} );
      this.setState({ noteArray: this.state.noteArray})
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({ noteArray: this.state.noteArray}); 

  }

}

const styles = StyleSheet.create({
  container: {
	  flex: 1,  
  },
  header: {
    backgroundColor: '#22B8B1' ,
    alignItens: 'center',
    justifyContent: 'center',
    borderBottonWidth: 10,
    borderBottonColor: '#22B8B1',
  },
  headerText: {
    color: 'white',
    fontsize: '15',
    padding: '25',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItens: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor:'#22B8B1',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItens: 'center',
    borderColor: '#aaa',
    justifyContent: 'center',
    elevation: 10,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color:'#eee',
    fontsize: 24,
  },
  TextInput: {
    alignSelf: 'scretch',
    color: '#eee',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#eeeeee',
  }

});

AppRegistry.registryComponent('projetofinal', () => projetofinal);