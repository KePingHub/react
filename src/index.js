import React from 'react';
import ReactDOM from 'react-dom';
// import Toggle from './components/ButtonToggle'

/*import PropTypes from './components/prop-types.js'
ReactDOM.render(
	<PropTypes age={10} name="小明" todo={(_this) => console.log(_this.props.name)} />,
	document.getElementById('root'))*/

/*import Input from './components/Input.js'
ReactDOM.render(
	<Input />,
    document.getElementById('root'))*/

/*import Sum from './components/ControlComponent.js'

ReactDOM.render(
	<Sum />,
	document.getElementById('root'))*/

/*import Sum from './components/UnControlComponent.js'
ReactDOM.render(
	<Sum />,
	document.getElementById('root'))*/

/*import Panel from './components/CompositeComponents.js'
ReactDOM.render(
	<Panel head="头部" body="身体" foot="底部"/>,
	document.getElementById('root'))*/
	
import Todo from './todo/index.js'
import TodoModel from './todo/TodoModel'
let model = new TodoModel()
function render() {
	ReactDOM.render(
		<Todo model={model}/>,
		document.getElementById('root'))
}

model.subscribe(render)
render()