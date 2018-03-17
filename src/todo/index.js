import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import TodoHead from './TodoHead'
import TodoBody from './TodoBody'
import TodoFoot from './TodoFoot'
import TodoItem from './TodoItem'
import * as filterTypes from './filterTypes'


export default class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// todos: [
			// 	{id: Date.now(), title: '今天一起回家', completed: false}
			// ],
			filterType: filterTypes.ALL
		}
	}

	changeFilterType = filterType => this.setState({filterType})

	render() {
		let model = this.props.model
		let todos = model.todos
		let showTodos = todos.filter((todo) => {
			switch (this.state.filterType) {
				case filterTypes.ACTIVE:
					return !todo.completed
				case filterTypes.COMPLETED:
					return todo.completed
				default:
					return true
			}
		})
		let activeTodoCount = showTodos.reduce((count, todo) => count+(todo.completed?0:1),0)
		let main = (
				<ul className="list-group">
					<li className="list-group-item">
						{
							showTodos.length > 0 ?
							<div className="row">
								<div className="col-md-12">
									<input type="checkbox" onChange={() => model.toggleAllCompleted(activeTodoCount)} checked={activeTodoCount? "":true}/>
									全部选中
								</div>
							</div>
							: null
						}
					</li>
					{
						showTodos.map((ele, index) => <TodoItem delTodo={model.delTodo} toggleCompleted={model.toggleCompleted} key={index} todo={ele}></TodoItem>)
					}
				</ul>
			)
		return (
			<div className="container" style={{marginTop: 50}}>
				<div className="row">
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading" style={{margin:"15px 0"}}>
								<TodoHead addTodo={model.addTodo}/>
							</div>
							<div className="panel-body" style={{margin:"15px 0"}}>
								{main}
							</div>
							<div className="panel-footer" style={{margin:"15px 0"}}>
								<TodoFoot
									activeTodoCount={activeTodoCount}
									changeFilterType={this.changeFilterType}
									filterType={this.state.filterType}
									delCompleted={model.delCompleted}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}