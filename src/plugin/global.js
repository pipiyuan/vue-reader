export default {
	install(Vue, options) {
		Vue.prototype.global = {
			setLocalStorage(key, val) {
				localStorage.setItem(key, JSON.stringify(val))
			},
			getLocalStorage(key) {
				return JSON.parse(localStorage.getItem(key))
			},
			api: 'https://www.pipiyuan.top/qidian/reader/api/qidian'
		}
	}
}
