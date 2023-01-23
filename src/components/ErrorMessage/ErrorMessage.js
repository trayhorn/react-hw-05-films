import React from 'react';
import s from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <h1>Error</h1>
      <p>
        Sorry, there was an error processing your request. Please try again
        later.
      </p>
    </div>
  );
};

export default ErrorMessage;
