import React, { useState } from 'react';

const InputBar = props => {
  const [input, setInput] = useState(props.value);

  const handleKeyPress = e => {
    if (e.key === 'Enter' && input) {
      props.onEnter(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        style={{ fontFamily: 'sans-serif', fontSize: 16 }}
        placeholder={props.placeholder}
        value={input}
        onKeyPress={handleKeyPress}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
};

InputBar.defaultProps = {
  value: '',
  placeholder: '',
};

export default InputBar;
