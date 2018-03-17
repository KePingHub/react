import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PersonInfo extends Component {
	render() {
		return (
			<div>
				<span>{this.props.name}</span>
				<span>{this.props.age}</span>
				<span>{this.props.todo(this)}</span>
			</div>
		)
	}
}

PersonInfo.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired,
	todo: PropTypes.func
}

export default PersonInfo