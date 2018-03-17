import React from 'react';
import ReactDOM from 'react-dom';
 /**
   * 函数式组件
   */
  /*let Message = props => <h2>函数式组件的{props.msg}</h2>

  ReactDOM.render(
  	<Message msg="hello" />,
  	document.getElementById('root'))*/

/**
 * 类组件
 */
  class Msg extends React.Component {
  	render() {
  		return <h3>类组件的{this.props.msg}</h3>
  	}
  }
  ReactDOM.render(
  	<Msg msg="hello" />,
  	document.getElementById('root'))