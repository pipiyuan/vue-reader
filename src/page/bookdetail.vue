<template>
    <div class="bookdetail">
        <div class="nav-title container-padding">
            <div class="goback">
                <span>{{bookData.bookName}}</span></div>
            <div class="home">
                <span></span>
            </div>
        </div>
        <div class="book-info container-padding">
            <div class="detail">
                <img :src="bookData.imageUrl" alt="">
                <div class="info">
                    <h2>{{bookData.bookName}}</h2>
                    <div class="meta author">{{bookData.author}}</div>
                    <div class="meta rate">
                        <el-rate v-model="bookData.score" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
                    </div>
                    <div class="meta type">{{bookData.labels?bookData.labels[0].tag:''}}</div>
                    <div class="meta num">{{bookData.labels?bookData.labels[bookData.labels.length-1].tag:''}}</div></div>
            </div>
            <div class="btn">
                <router-link class="active" :to="{path:'/reader/'+ bookData.id}">开始阅读</router-link>
                <router-link :to="{path:'/reader/'+ bookData.id}">加入书架</router-link></div>
            <div class="dec">{{bookData.intro}}</div></div>
        <div class="likes container-padding">
            <div class="title">书友还看过</div>
            <!-- <div class="list-item">
            <like-book class="item" :like="value" v-for="(value,index) in bookData.recommendBook" key="index"></like-book></div> -->
            <el-row :gutter="15" class="list-item">
                <el-col :span="6" v-for="(value,index) in bookData.recommendBook" key="index">
                    <like-book :like="value"></like-book>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import likeBook from '../components/common/likeBook.vue'
import hotList from '../components/common/hotList.vue'

export default {
    name: 'hello',
    data () {
        return {
            bookData: {},
            bookList:[],
            loading: false
        }
    },
    mounted(){
        axios(`${this.global.api}/book/${this.$route.params.id}`)
        .then(res => {
            this.loading = true;
            this.bookData = res.data
        })
    },
    components:{
        likeBook,
    },
    filters:{
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.bookdetail {
    background-color: #fff;
    .nav-title {
        display: flex;
        height: 0.5rem;
        justify-bookData: space-between;
        align-items: center;
        background-color: #eee;
        .goback {
            flex: 1;
            font-size: .15rem;
            span {
                display: inline-block;
                color: #ed424b;
                background: url('../assets/image/back.png') no-repeat -5% 45%;
                padding-left: .15rem;
                background-size: .25rem;
            }
        }
        .home {
            flex: 1; // height: 100%;
            span {
                // background:url('../assets/image/avatar.png') no-repeat 100% 50%;
                // background-size: 66%;
            }
        }
    }
    .book-info {
        margin: .2rem 0;
        .detail {
            display: flex;
            img {
                height: 1.8rem;
                margin-right: .2rem;
            }
            .info {
                flex: 1;
                font-size: .2rem;
                display: flex;
                height: 1.8rem;
                flex-direction: column;
                h2 {
                    flex: 1;
                    font-size: 0.3rem;
                    font-weight: bold;
                }
                .meta {
                    flex: 1; // padding: .1rem 0;
                }
            }
        }
        .btn {
            margin-top: .3rem;
            margin-bottom: .3rem;
            display: flex;
            a {
                display: inline-block;
                flex: 1;
                font-size: .2rem;
                text-align: center;
                border: 1px solid #eee;
                border-radius: 6px;
                padding: .05rem 0;
                &:nth-child(2n-1) {
                    margin-right: .2rem;
                }
            }
            a.active {
                background-color: #ed424b;
                color: #fff;
            }
        }
        .dec {
            font-size: .2rem;
            color: #666;
            padding: .2rem 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
    }
    .likes {
        .title {
            font-size: .22rem;
        }
        .list-item {
            padding: .2rem 0;
            .item {
                display: inline-block;
                margin-right: .2rem;
            }
        }
    }
    .home-nav {
        height: 1.13rem;
        display: flex;
        justify-bookData: center;
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
