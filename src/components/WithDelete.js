import React from 'react';
import CrossButton from './CrossBtn';

export default Component => {
  return props => (
    <div className='cross-hover' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Component {...props} />
      <CrossButton className='cross' onClick={props.deleteAction} />
    </div>
  );
};
