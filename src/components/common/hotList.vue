<template>
	<div class="wrap container-padding">
		<div class="hot-list">
			<h3>{{title}}</h3>
			<div class="list">
				<router-link class="list-item" tag="div" :to="`/bookdetail/${item.id}`" v-for="item in bookList" key="item.id">
				    <img :src="item.images" alt="">
				    <div class="book-info">
				    	<h4>{{item.name}}</h4>
				    	<p class="digest">{{item.intro}}</p>
				    	<div class="bottom">
				    		<p class="name">{{item.author}}</p>
				    		<p class="dec">
				    			<span>{{item.type}}</span>
				    			<span>{{item.serialize}}</span>
				    			<span>{{item.wordcount}}</span>
				    		</p>
				    	</div>
				    </div>
				</router-link>
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
	.hot-list{
		overflow: hidden;
		>h3{
			border-left: 2px solid red;
			padding-left: .1rem;
			font-size: .25rem;
			font-weight: bold;
			margin: .2rem 0;
		}
		.list{
			.list-item{
				display:flex;
				padding: .25rem 0;
				border-bottom: 1px solid #eee;
				img{
					margin-right: .2rem;
					height: 2rem;
				}
				.book-info{
					flex:1;
					display: flex;
					flex-direction: column; 
					justify-content: space-between;
					padding: .1rem 0;
					h4{
						font-size: .20rem;	
						font-weight: bold;
					}
					.digest{
						font-size: .18rem;
						line-height: .33rem;
						height: 1rem;
						overflow: hidden;
						text-overflow: ellipsis;
						// padding: .1rem 0;
					}
					.bottom{
						font-size: .15rem;
						display: flex;
						.name{
							flex: 1;
						}
						.dec{
							flex: 2;
							text-align: right;
							span{
								display: inline-block;
								border: 1px solid #bbb;
								padding: 0 .05rem;
								white-space: nowrap;
								&:nth-child(1){
									color: #bbb;
								}
								&:nth-child(2){
									color: #ed424b;
								}
								&:nth-child(3){
									color: #4284ed;
								}
							}
						}
					}
				}
			}
		}
	}
}	
</style>
