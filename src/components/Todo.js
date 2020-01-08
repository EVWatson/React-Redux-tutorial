import React from 'react';
import PropTypes from 'prop-types';
import {removeTodo} from "../actions";
import {connect} from 'react-redux';


const Todo = ({onClick, completed, text, key, dispatch}) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <h2 onClick={onClick}>
            {text }
        </h2>
        <button
            onClick={() => (dispatch(removeTodo(key))
            )}
        >delete
        </button>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default connect()(Todo);
