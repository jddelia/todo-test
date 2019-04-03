import React from 'react';
import PropTypes from 'prop-types';

const ToDoCounter = ({ count }) => {
  return (
    <div>
      {count}
    </div>
  )
}

export default ToDoCounter;

ToDoCounter.propTypes = {
  count: PropTypes.string.isRequired
};