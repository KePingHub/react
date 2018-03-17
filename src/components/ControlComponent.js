import React, {Component} from 'react'

class Sum extends Component {
	constructor(props) {
		super(props)
		this.state = {
			a: 0,
			b: 0,
			res: 0
		}
	}

	handleChangeA = (e) => {
		let val = e.target.value
		val = val === "" ? 0 : parseInt(val)
		this.setState({
			a: val,
			res: val + this.state.b
		})
	}

	handleChangeB = (e) => {
		let val = e.target.value
		val = val === "" ? 0 : parseInt(val)
		this.setState({
			b: val,
			res: val + this.state.a
		})
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChangeA} type="text" value={this.state.a}/>+
				<input onChange={this.handleChangeB} type="text" value={this.state.b}/>=
				<input type="text" value={this.state.res}/>
			</div>
			)
	}
}

export default Sum