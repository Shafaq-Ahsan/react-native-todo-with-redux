import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../actions/TodoActions';
import Main from '../components/Main';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: task => dispatch(addTodo(task)),
        removeTodo: index => dispatch(removeTodo(index)),
        toggleTodo: index => dispatch(toggleTodo(index))
    }
};

export const TodoContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Main)