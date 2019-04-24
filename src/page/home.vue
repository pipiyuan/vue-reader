<template>
    <div class="home">
        <div class="nav-title container-padding">
            <h2>起点中文网</h2>
            <div class="user"></div>
        </div>
        <div class="Carousel-container container-padding">
            <div class="block">
                <el-carousel trigger="click" height="2.87rem">
                    <el-carousel-item v-for="(item,index) in imgs" :key="index">
                        <img width="100%" :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="search-wrap container-padding">
            <div class="search">
                <i class="el-icon-search"></i>三生三世</div>
        </div>
        <div class="home-nav">
            <a class="book-type-item" href="" title="" v-for="(item,index) in bookType" :key="index">
                <i></i>
                <h4>{{item.name}}</h4>
            </a>
        </div>
        <div class="book-classfiy">
            <recommend-list title="热门小说" :bookList="bookList_slide | top_5"></recommend-list>
            <recommend-list title="排行榜" :bookList="bookList_slide | top_5_10"></recommend-list>
            <hot-list title="新书抢鲜" :bookList="bookList_desc"></hot-list>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import recommendList from '../components/common/recommendList.vue'
import hotList from '../components/common/hotList.vue'

export default {
    name: 'hello',
    data () {
        return {
            imgs: [ 
                require('../assets/image/0.jpg'),
                require('../assets/image/1.jpg'),
                require('../assets/image/2.jpg'),
                require('../assets/image/3.jpg'),
            ],
            bookType: [ 
                {
                    num: 1,
                    name: '玄幻'
                },
                {
                    num: 2,
                    name: '修真'
                },
                {
                    num: 3,
                    name: '都市'
                },
                {
                    num: 4,
                    name: '历史'
                },
                {
                    num: 5,
                    name: '游戏'
                }
            ],
            bookList_slide:[],
            bookList_desc:[],
            loading: false
        }
    },
    mounted() {
        axios(`${this.global.api}/booklist?size=15&type=slide`) .then(res=> {
            this.loading=true;
            this.bookList_slide=res.data.booklist;
        });
        axios(`${this.global.api}/booklist?size=5&type=desc`) .then(res=> {
            this.loading=true;
            this.bookList_desc=res.data.booklist;
        })
    },
    components: {
        recommendList,
        hotList,
    },
    filters: {
        top_5(value) {
            let newArr=[]
            if (value.length) {
                newArr=value.slice(0, 5)
            }
            return newArr
        },
        top_5_10(value) {
            let newArr=[]
            if (value.length) {
                newArr=value.slice(5, 10)
            }
            return newArr
        }
    },
    watch: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.home {
    .nav-title {
        display: flex;
        height: 0.6rem;
        justify-content: space-between;
        align-items: center;
        h2 {
            flex: 1;
            font-size: .25rem;
        }
        .user {
            height: 100%;
            width: .5rem;
            background: url('../assets/image/avatar.png') no-repeat 100% 50%;
            background-size: 66%;
        }
    }
    .search-wrap {
        margin: 0.15rem 0;
        .search {
            border-radius: 5px;
            height: 0.63rem;
            line-height: 0.63rem;
            @include s-c(0.244rem,
            #aaa);
            background-color: #fff;
            text-align: center;
            i {
                color: #aaa;
            }
        }
    }
    .home-nav {
        height: 1.13rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        .book-type-item {
            flex: 1;
            text-align: center;
            font-size: .27rem;
            i {
                display: inline-block;
                width: 26px;
                height: 26px;
                background-image: url(../assets/image/sprite.0.50.png);
            }
            h4 {
                font-weight: bold;
            }
            &:nth-of-type(1) {
                i {
                    background-position: -61px -28px;
                }
            }
            &:nth-of-type(2) {
                i {
                    background-position: 0 0;
                }
            }
            &:nth-of-type(3) {
                i {
                    background-position: 0 -30px;
                }
            }
            &:nth-of-type(4) {
                i {
                    background-position: 0 -60px;
                }
            }
            &:nth-of-type(5) {
                i {
                    background-position: -30px -30px;
                }
            }
        }
    }
}

</style>
