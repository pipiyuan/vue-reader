<template>
	<div class="catalog">
		<h3>目录</h3>
		<div class="list">
			<div class="module-header">
				<p>共{{chapterList.length-1}}章</p>
				<p>共章</p>
			</div>
			<div class="volumes">
				<div class="item" :class="[{'chapter-bar': (item.chapterId==chapterId)}, {'chapter-li': (item.chapterId!==0)}, {'red': (item.chapterId==chapterId)}]" v-for="(item, index) in chapterList" key="index">
					<a class="" @click="switchChapterId(item.chapterId)">{{item.title}}</a>
				</div>
			</div>		
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			chapterList: []
		}
	},
	computed: {
		articleId(){
			return this.$store.state.article.articleId
		},
		chapterId(){
			return this.$store.state.article.chapterId
		},
		showCatalog(){
			return this.$store.state.article.chapterListState
		}
	},
	mounted(){
		axios(`${this.global.api}/book/chapter/${this.articleId}`)
        .then(res => {
            this.loading = true;
            this.chapterList = res.data;
        })
	},
	// props: ['showCatalog'],
	methods: {
		switchChapterId(id){
			this.$store.dispatch('setReaderInfoOne', {key: 'chapterListState', val: !this.showCatalog});
			this.$store.dispatch('setReaderInfoOne', {key: 'chapterId', val: id});
		}
	}
}
</script>
<style scoped lang="scss">
@import '../../assets/style/mixin.scss';
.catalog{
	background-color: #fff;
	h3{
		border-bottom: 1px solid #ed424b;
		padding: .2rem;
		font-size: .4rem;
		text-align: center;
		color: #ed424b;
		// margin: .2rem 0;
	}
	.list{
		overflow: hidden;
		padding: .2rem 0;
		.module-header{
			display: flex;
			padding: .2rem .3rem;
			justify-content:space-between;
			p{
				font-size: .3rem;
				font-weight: bold;
			}
		}
		.volumes{
			.item{
				padding: 0px .5rem;
				a{
					padding: 8px 0;
					display: block;
				    font-size: .28rem;
				    border-bottom: 1px solid #f0f1f2;
				}
			}
			.red{
				a{
					color: #ed424b!important;
				}
			}
			.chapter-bar{
			    background-color: #f6f7f9;
			    a{
			    	color: #969ba3;
			    }
			}
			.chapter-li{
				a{
			    	color: #555;
				}
			    background-color: #fff;
			}
		}
	}
}	
</style>
