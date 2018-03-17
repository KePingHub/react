export default class TodoModel {
	constructor() {
		this.STORE_KEY = 'todos'
		// this.FILTERTYPE = 'filterType'
		this.todos = localStorage.getItem(this.STORE_KEY) ? JSON.parse(localStorage.getItem(this.STORE_KEY)) : []
		// this.filterType = localStorage.getItem(this.FILTERTYPE) ? JSON.parse()
		
		// 注册监听器，当模型数据发生变化之后会调用这些监听函数
		this.listeners = []
	}

	// 订阅 on(type, listener); emit
	subscribe(listener) {
		this.listeners.push(listener)
	}

	emit() {
		this.listeners.forEach(listener => listener())
	}

	notify(todos) {
		localStorage.setItem(this.STORE_KEY, JSON.stringify(todos))
		this.todos = todos
		this.emit()
	}

	// 增加todo
	addTodo = todo => {
		todo = Object.assign({}, {id: Date.now(), completed: false}, todo)
		let todos = this.todos
		todos.push(todo)
		this.notify(todos)
	}
	// 切换完成
	toggleCompleted = id => {
		let todos = this.todos
		todos = todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		})
		this.notify(todos)
	}
	// 切换全部选中
	toggleAllCompleted = activeTodoCount => {
		let todos = this.todos
		let isAllCompleted = activeTodoCount === 0
		todos = todos.map(ele => {
			ele.completed = !isAllCompleted
			return ele
		})
		this.notify(todos)
	}
	// 删除todo
	delTodo = id => {
		let todos = this.todos
		let index = todos.findIndex(todo => todo.id === id)
		todos.splice(index, 1)
		this.notify(todos)
	}
	// 删除已完成
	delCompleted = () => {
		let todos = this.todos
		todos = todos.filter(ele => !ele.completed)
		this.notify(todos)
	}
}