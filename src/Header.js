import React from 'react';
import InputBar from './InputBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.saveNewTitle = this.saveNewTitle.bind(this);
    this.toggleTitleView = this.toggleTitleView.bind(this);
  }

  toggleTitleView() {
    this.setState(state => ({ isEditable: !state.isEditable }));
  }

  saveNewTitle(newTitle) {
    this.props.updateTitle(newTitle);
    this.toggleTitleView();
  }

  render() {
    const defaultHeader = (
      <div onClick={this.toggleTitleView}>{this.props.value}</div>
    );
    
    const editableHeader = (
      <InputBar
        className='header'
        value={this.props.value}
        onEnter={this.saveNewTitle}
      />
    );

    return (
      <div className='header'>
        {this.state.isEditable ? editableHeader : defaultHeader}
      </div>
    );
  }
}

export default Header;
