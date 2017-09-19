<template>
	<div class="like">
		<router-link :to="{path:'/bookdetail/'+ likeBookData.id}">
		    <img :src="likeBookData.imageUrl" alt="">
		    <p>{{likeBookData.bookName}}</p>
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
		axios(`${this.global.api}/book/${this.like}`)
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
			// width: 1.1rem; 
          	// height: 1.5rem;
   			width: 100%;
		}
		p{
			font-size: .15rem;
		}
	}
}	
</style>
