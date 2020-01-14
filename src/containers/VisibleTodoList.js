import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../actions/actions';
import TodoList from '../components/TodoList';
import {VisibilityFilters} from "../actions/actions";

const getVisibleTodos = (state) => {
    const {todos, visibilityFilter} = state;
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
            return todos.filter(t => !t.removed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed && !t.removed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed && !t.removed);
        case VisibilityFilters.SHOW_DELETED:
            return todos.filter(t => t.removed);
        default:
            throw  new Error('Unknown filter: ' + visibilityFilter)
    }
};

const mapStateToProps = state => ({
        todos: getVisibleTodos(state)
    });

const mapDispatchToProps = dispatch => ({
        toggleTodo: id => dispatch(toggleTodo(id)),
        removeTodo: id => dispatch(removeTodo(id))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

