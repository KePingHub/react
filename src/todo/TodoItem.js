import React from 'react'

export default class TodoItem extends React.Component {

	handleClick = (id, e) => {
		let props = this.props
		e.preventDefault()
		props.delTodo(props.todo.id)
	}

	render() {
		let props = this.props
		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-md-1">
						<input type="checkbox" onChange={() => props.toggleCompleted(props.todo.id)} checked={props.todo.completed}/>
					</div>
					<div className="col-md-9" style={{textDecoration: props.todo.completed ? 'line-through' : ""}}>
						{props.todo.title}
					</div>
					<div className="col-md-1">
						<button onClick={e => this.handleClick(props.todo.id, e)} className="btn btn-danger btn-xs">X</button>
					</div>
				</div>	
			</li>
			)
	}
}