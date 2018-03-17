import React, {Component} from 'react'
import * as filterTypes from './filterTypes'

export default class TodoFoot extends Component {
	changeType = (e, type) => {
		e.preventDefault()
		this.props.changeFilterType(type)
	}

	delCompleted = e => {
		e.preventDefault()
		this.props.delCompleted()
	}

	render() {
		let filterType = this.props.filterType
		return (
			<div className="row">
				<div className="col-xs-4">
					<button className="btn btn-primary" style={{marginLeft: 15}} type="button">
					  待办事件数量 <span className="badge">{this.props.activeTodoCount}</span>
					</button>
				</div>
				<div className="col-xs-4">
					<div className="btn-group" style={{margin: "0 5px"}} role="group" aria-label="...">
						<button type="button" onClick={e => this.changeType(e, 'all')} className={`btn ${filterType === 'all' ? 'btn-success' : 'btn-default'}`}>全部</button>
						<button type="button" onClick={e => this.changeType(e, 'active')} className={`btn ${filterType === 'active' ? 'btn-success' : 'btn-default'}`}>未完成</button>
						<button type="button" onClick={e => this.changeType(e, 'completed')} className={`btn ${filterType === 'completed' ? 'btn-success' : 'btn-default'}`}>已完成</button>
					</div>
				</div>
				<div className="col-xs-4">
					<button type="button" onClick={this.delCompleted} className="btn btn-danger">删除已完成</button>
				</div>
			</div>
			)
	}
}