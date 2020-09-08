import React, { useState } from 'react';
import InputBar from './InputBar';

const Header = props => {
  const [isEditable, setIsEditable] = useState(false);

  const saveNewTitle = heading => {
    props.updateHeading(heading);
    setIsEditable(value => !value);
  };

  const defaultHeader = (
    <div onClick={() => setIsEditable(value => !value)}>{props.heading}</div>
  );

  const editableHeader = (
    <InputBar
      placeholder='Add new Title'
      value={props.heading}
      onEnter={saveNewTitle}
    />
  );

  return (
    <div className='header'>{isEditable ? editableHeader : defaultHeader}</div>
  );
};

export default Header;
