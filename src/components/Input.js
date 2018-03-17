import React, {Component} from 'react'

class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {val: ""}
	}
	handleChange = (e) => {
		let val = e.target.value
		this.setState({val})
	}
	render() {
		return (
			<div>
				<p>{this.state.val}</p>
				<input type="text" onChange={this.handleChange} value={this.state.vaL}/>
			</div>
		)
	}
}

export default Input