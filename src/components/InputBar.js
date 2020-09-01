import React from 'react';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const { value } = this.state;
    const isEnterPressed = e.key === 'Enter';
    if (isEnterPressed && value) {
      this.props.onEnter(value);
      this.setState(() => ({ value: this.props.value }));
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => {
      return { value };
    });
  }

  render() {
    return (
      <div>
        <input
          style={{ fontFamily: 'sans-serif', fontSize: 16 }}
          value={this.state.value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

InputBar.defaultProps = {
  value: '',
};

export default InputBar;
