
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';




export default class App extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
	  
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <Text style={styles.noteText}>{this.props.val.date}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>

	  </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 30,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#eeeeee'
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#22B8B1',
  },
  noteDeleteText: {
      color: 'white',
  }
});

