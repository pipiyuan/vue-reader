<template>
	<div class="wrap container-padding">
		<div class="recommend-list">
			<h3>{{title}}{{bookList.length}}</h3>
			<div class="list">
				<div class="list-item" v-for="item in bookList">
					<router-link :to="`/bookdetail/${item.id}`">
					    <img :src="item.images" alt="">
					    <p>{{item.name}}</p>
					    <p>{{item.author}}</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {}
	},
	mounted(){
		// console.log(this.bookList)
	},
	props: ['title', 'bookList', 'discribe'],
	methods: {

	}
}
</script>
<style scoped lang="scss">
@import '../../assets/style/mixin.scss';
.wrap{
	background-color: #fff;
	margin: .2rem 0;
	.recommend-list{
		overflow: hidden;
		h3{
			border-left: 2px solid red;
			padding-left: .1rem;
			font-size: .25rem;
			font-weight: bold;
			margin: .2rem 0;
		}
		.list{
			display:flex;
			overflow-x: auto;
			overflow-y: hidden;
			white-space: nowrap;
			a{
				display: block;
			}
			.list-item{
				flex:1;
				margin-right: .1rem;
				img{
					height: 2rem;
				}
				p{
					font-size: .2rem;
				}
			}
		}
	}
}	
</style>
