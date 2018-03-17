import React, {Component} from 'react'

export default class TodoBody extends Component {
	render() {
		return (
			<div className="ui checkbox">
			  <input type="checkbox" name="example"/>
			  <label>Make my profile visible</label>
			</div>
			)
	}
}