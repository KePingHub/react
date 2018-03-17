import React, {Component} from 'react'

class Sum extends Component {

	handleChange = (e) => {
		let a = parseInt(this.a.value || 0)
		let b = parseInt(this.b.value || 0)
		this.res.value = a + b
	}

	render() {
		// ref 等于一个函数， 表示当元素被挂载到页面中之后会立即调用此函数， 并传入渲染后的DOM元素
		return (
			<div onChange={this.handleChange}>
				<input ref={input => this.a = input} type="text" />+
				<input ref={input => this.b = input} type="text" />=
				<input ref={input => this.res = input} type="text" />
			</div>
			)
	}
}

export default Sum