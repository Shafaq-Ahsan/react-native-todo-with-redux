import React, { Component } from 'react';
import Todo from './Todo';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class Main extends Component {
  constructor(props){
    super(props);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.state = {
        task: ''
    }
  }
  textChangeHandler(e) {
    this.setState({ task: e })
}


addTodoHandler() {
    const task = this.state.task.trim();
    if(task) {
        this.props.addTodo(task);
        this.setState({ task: '' });
        this.taskInput.focus();
    }
}

  render() {
  //   let todo = this.state.todoArray.map((val, key)=>{
  //     return <Todo key={key} keyval={key} val={val}
  //             deleteMethod={()=>this.deleteTodo(key)}/>
  // });
 let todo =  this.props.todos.map((todo, i) =>
 <Todo todo={todo} 
 key={i} removeTodo={() => this.props.removeTodo(i)}
 completeTodo ={()=> this.props.completeTodo(i)} />)

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TODO APP</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
        {todo}
        </ScrollView>
          <View style={styles.footer}>
          <TextInput style = { styles.textInput} 
          placeholder='-Add todo' 
          ref={input => this.taskInput = input}
          placeholderTextColor='white'
          onChangeText={this.textChangeHandler}
          value={this.state.task}
          underlineColorAndroid='transparent'
          ></TextInput>
            <TouchableOpacity 
            onPress={ this.addTodoHandler } 
            style={styles.addButton}>
            <Text style={styles.addButtonText} >+</Text>
            </TouchableOpacity>
        </View>
    
      </View>
    );
  }
//   todoArray(){
//     if(this.state.todoText){
//         this.state.todoArray.push({
//             'todo': this.state.todoText
//         });
//         this.setState({ todoArray: this.state.todoArray });
//         this.setState({todoText:''});
//     }
// }

// deleteTodo(key){
//     this.state.todoArray.splice(key, 1);
//     this.setState({todoArray: this.state.todoArray});
// }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  header : {
    backgroundColor : '#3f639c',
    alignItems : 'center',
    justifyContent : 'center',
    elevation : 10,
    borderBottomWidth : 2,
    borderBottomColor:'#ddd'

  },
  footer : {
    position : 'absolute',
    bottom : 0,
    left : 0 ,
    right : 0,
    zIndex : 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor : '#3f639c',
    borderTopWidth : 2,
    borderTopColor : "#ddd",
    elevation:10,
    flexDirection : 'row'
  },
  headerText : {
    color : 'white',
    fontSize : 18,
    padding : 26

  },
  scrollContainer : {
    flex : 1,
    marginBottom : 80
  },
 textInput : {
    alignSelf : 'stretch',
    color :'white',
    marginRight : 65,
    marginLeft : 20,
    marginTop: 10,
    marginBottom : 10,
    flex : 2

 },
 addButton : {
    position : 'absolute',
    right : 20,
    backgroundColor:'white',
    flex : 1,
    width:40,
    height :40,
    borderRadius : 50,
    alignItems:'center',
    justifyContent:'center',
    elevation: 8 
 },
 addButtonText :  {
    color : '#3f639c',
    fontSize : 24
 }
});
