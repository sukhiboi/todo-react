import React from 'react';
import CrossButton from './CrossBtn';

export default Component => {
  return props => (
    <div className='cross-hover'>
      <Component {...props} />
      <CrossButton onClick={props.deleteAction} />
    </div>
  );
};
