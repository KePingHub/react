import React, {Component} from 'react';

class Clock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time : this.props.time.toLocaleTimeString()
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick()
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	tick() {
		this.setState({time: new Date().toLocaleTimeString()})
	}

	render() {
		return <span>{this.state.time}</span>
	}
}

export default Clock