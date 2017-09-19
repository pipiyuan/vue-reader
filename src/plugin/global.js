export default {
	install(Vue, options) {
		Vue.prototype.global = {
			setLocalStorage(key, val) {
				localStorage.setItem(key, JSON.stringify(val))
			},
			getLocalStorage(key) {
				return JSON.parse(localStorage.getItem(key))
			},
			api: 'http://120.77.81.108:3000/qidian'
		}
	}
}
