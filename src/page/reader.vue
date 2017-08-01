<template>
  <div class="reader">
    <div class="container container-padding">
      <h2>{{articleData.title}}</h2>
      <div class="article-content">
        {{articleData.content}}
      </div>
    </div>
    <!-- <div class="home-nav">
      <a class="book-type-item" href="" title="" v-for="item in bookType" key="item.num">
        <i></i>
        <h4>{{item.name}}</h4>
      </a>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import recommendList from '../components/common/recommendList.vue'
import hotList from '../components/common/hotList.vue'

export default {
  name: 'hello',
  data () {
    return {
      articleData:{},
      loading: false
    }
  },
  mounted(){
    axios(`${this.apis.api}/book?book=${this.$route.params.id}&id=1`)
    .then(res => {
      this.loading = true;
      this.articleData = res.data
      console.log(this.articleData)
    })
  },
  components:{
    
  },
  filters:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
  .reader{
    background-color: #e9dfc7;
    .container{
      h2{
        padding: .1rem 0 .2rem;
        font-size: .25rem;
        font-weight: bold;
      }
      .article-content{
        font-size: 18px;
        line-height: 31px;
      }
    }
  }

</style>
