import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/page/Home'

const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const bookdetail = r => require.ensure([], () => r(require('../page/bookdetail')), 'bookdetail')
const reader = r => require.ensure([], () => r(require('../page/reader')), 'reader')

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: {
	        	template: '<router-view></router-view>'
	        },
			// name: 'home',
			// component: home
			children: [ //子级路由
				{
		            path: '',
		            redirect: '/home'
		        },
				{
					path: '/home',
					name: 'home',
					component: home
				},
				{
					path: '/bookdetail/:id',
					name: 'bookdetail',
					component: bookdetail
				},
				{
					path: '/reader/:id',
					name: 'reader',
					component: reader
				}
			]
		}
	]
})
