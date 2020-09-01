import React from 'react';
import InputBar from './InputBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.saveNewTitle = this.saveNewTitle.bind(this);
    this.toggleEditability = this.toggleEditability.bind(this);
  }

  toggleEditability() {
    this.setState(state => ({ isEditable: !state.isEditable }));
  }

  saveNewTitle(newTitle) {
    this.props.updateTitle(newTitle);
    this.toggleEditability();
  }

  render() {
    const defaultHeader = (
      <div onClick={this.toggleEditability}>{this.props.title}</div>
    );

    const editableHeader = (
      <InputBar value={this.props.title} onEnter={this.saveNewTitle} />
    );

    return (
      <div className='header'>
        {this.state.isEditable ? editableHeader : defaultHeader}
      </div>
    );
  }
}

export default Header;
