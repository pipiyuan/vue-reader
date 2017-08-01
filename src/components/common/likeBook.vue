<template>
	<div class="like">
		<router-link :to="{path:'/bookdetail/'+ likeBookData.id}">
		    <img :src="likeBookData.images" alt="">
		    <p>{{likeBookData.name}}</p>
		</router-link>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			likeBookData: {},
		}
	},
	mounted(){
		axios(`${this.apis.api}/booklist?id=${this.like}`)
		    .then(res => {
		      this.loading = true;
		      this.likeBookData = res.data
		    })
	},
	props: ['like'],
	methods: {

	}
}
</script>
<style scoped lang="scss">
@import '../../assets/style/mixin.scss';
.like{
	a{
		display: block;
		img{
			display: block;
			width: 1.1rem; 
          	height: 1.5rem;
		}
		p{
			font-size: .15rem;
		}
	}
}	
</style>
