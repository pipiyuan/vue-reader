import Vue from 'vue';

Vue.directive('alert', {
	bind: (el, binding) => {
		let windowHeight = window.screen.height;
		let scrollEl = document.body;

		el.addEventListener('touchmove', () => {
			let elAttr = parseInt(getComputedStyle(el,null)['paddingBottom']) + 
						 parseInt(getComputedStyle(el,null)['marginBottom']);

			if (scrollEl.scrollTop + windowHeight + elAttr >= el.offsetHeight + el.offsetTop) {
				binding.value();
			}
		})
	}
})
