import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({onClick, completed, text, removeItem, removed}) => (
    <>
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
        <button
            onClick={removeItem}
          >
            {removed ? 'Restore' : 'Delete'}
        </button>
    </>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default Todo;
