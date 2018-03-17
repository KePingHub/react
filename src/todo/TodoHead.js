import React, {Component} from 'react'
const ENTRY_KEY = 13

export default class TodoHeader extends Component {
	handleKeyDown = e => {
		e.preventDefault()
		let title = this.element.value.trim()
		if (title !== "") {
			this.props.addTodo({title})
			this.element.value = ""
		}
	}

	render() {
		return (
			<form>
				<div className="form-group">
				  <input ref={input => this.element = input} type="text" autoFocus={true} className="form-control" placeholder="情输入待做事件..."/>
				  <button className="btn btn-default" onClick={this.handleKeyDown}>添加</button>
				</div>
			</form>
		)
	}
}