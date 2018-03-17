import React, {Component} from 'react'
import Clock from './Clock'

class Toggle extends Component {
	constructor(props) {
		super(props)
		this.changeToggleState = this.changeToggleState.bind(this)
		this.state = {isToggleOn: true}
	}

	changeToggleState() {
		this.setState({isToggleOn: !this.state.isToggleOn})
	}

	render() {
		return (
			<div>
				<span>{this.state.isToggleOn ? 'ON' : 'OFF'}</span>
				<button onClick={this.changeToggleState}>clickMe</button>
				<Clock time={new Date()}/>
			</div>
		)
	}
}
export default Toggle