import React, {Component} from 'react'

class Panel extends Component {
	constructor() {
		super()
		this.state = {color: 'black'}
	}

	render() {
		let props = this.props
		return (
			<div>
				<button onClick={() => this.setState({color: 'red'})}>红</button><button onClick={() => this.setState({color: 'green'})}>绿</button>
				<PanelHeader color={this.state.color} head={props.head}/>
				<PanelBody body={props.body}/>
				<PanelFooter foot={props.foot}/>
			</div>
			)
	}
}

class PanelHeader extends Component {
	render() {
		return <div style={{color: this.props.color}} className="panel-header">{this.props.head}</div>
	}
}

class PanelBody extends Component {
	render() {
		return <div className="panel-body">{this.props.body}</div>
	}
}

class PanelFooter extends Component {
	render() {
		return <div className="panel-footer">{this.props.foot}</div>
	}
}

export default Panel