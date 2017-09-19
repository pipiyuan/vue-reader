<template>
    <div class="reader" :style="{backgroundColor:(articleInfo.isDaytime?'#1a1a1a':articleInfo.bgColor)}">
        <div class="top-nav" v-show="showBar">
            <a href="" title="">返回书架</a></div>
        <div class="container container-padding" :style="{fontSize: articleInfo.fontSize}">
            <h2 :style="{backgroundColor:(articleInfo.isDaytime?'#1a1a1a':articleInfo.bgColor)}">{{articleTitle}}</h2>
            <section :class="['read-section', {'is-daytime': articleInfo.isDaytime}]" v-for="(item,index) in articleData" key="index">
                <div class="article-content" v-html="item.content"></div>    
            </section>
            <div class="click-arear" @click="showBar_fn"></div>
        </div>
        <div class="bottom-nav" v-show="showBar">
            <div class="font-content" v-show="show_font_bg">
                <div class="select-item select-font-size">
                    <div class="name">字号</div>
                    <div class="option">
                        <button class="big" @click="switchFontSize('big')">大</button>
                        <button class="small" @click="switchFontSize('small')">小</button></div>
                </div>
                <div class="select-item select-bg-color">
                    <div class="name">背景</div>
                    <div class="option">
                        <button v-for="(item, index) in bgColorArr" key="index" :style="{backgroundColor:item}" @click="switchColor(item)"></button>
                    </div>
                </div>
            </div>
            <div class="item-nav-container">
                <div class="item-nav">
                    <div class="nav" @click="showChapter_fn()">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#reader-menue"></use>
                        </svg>
                        <p>目录</p>
                    </div>
                </div>
                <div class="item-nav">
                    <div class="nav" @click="show_font_bg=!show_font_bg">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="show_font_bg?'#reader-font-active':'#reader-font'"></use>
                        </svg>
                        <p>字体</p>
                    </div>
                </div>
                <div class="item-nav">
                    <div class="nav" @click="daytime_fn">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="articleInfo.isDaytime?'#reader-daytime-active':'#reader-daytime'"></use>
                        </svg>
                        <p>夜间</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="catalog-wrap" v-show="showCatalog">
            <catalog :bookId="$route.params.id" :curChapterId="curChapterId"></catalog>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState  } from 'vuex'
import recommendList from '../components/common/recommendList.vue'
import hotList from '../components/common/hotList.vue'
import catalog from '../components/common/catalog.vue'

export default {
    name: 'hello',
    data () {
        return {
            articleTitle: '',
            show_font_bg: false,
            fontSize: {small: '16px', big: '18px'},
            bgColorArr: ['#e9dfc7','#e7eee5','#a4a4a4','#cdefcd','#283548','#0f1410'],
            showBar: false,
            articleData: [],
            loading: false
        }
    },
    computed: {
        // ...mapState(['article']),
        bookId(){
            return this.$route.params.id*1
        },
        articleInfo(){
            return this.$store.state.article
        },
        curChapterId(){
            return this.$store.state.article.chapterId
        },
        showCatalog(){
            return this.$store.state.article.chapterListState
        },

    },
    mounted(){
        // 设置 文章数据
        let storageData = this.global.getLocalStorage('qidian_reader');
        if (storageData && this.bookId == storageData.bookId) {
            this.$store.dispatch('setReaderInfoAll', storageData);
        }else{
            this.$store.dispatch('setReaderInfoOne', {key: 'bookId', val: this.bookId}); //改变 bookId watch 里请求数据
        }
        if (this.curChapterId == 1) {
            this.getChapterContent(this.curChapterId)
        }

        let this_ = this
        document.onscroll = function(){
            let body_h = document.body.clientHeight
            let screen_h = window.screen.height
            let scroll_top = document.body.scrollTop
            let distance_bottom = body_h-scroll_top-screen_h+60
            if (distance_bottom < 300 && !this_.loading) {
                //改变 bookId watch 里请求数据
                this_.$store.dispatch('setReaderInfoOne', {key: 'chapterId', val: this_.curChapterId+1});
                this_.$store.dispatch('setReaderInfoOne', {key: 'getChapterType', val: true});
            }
        }
        
    },
    methods: {
        getChapterContent(val, type){ // true为push，false为替换
            this.loading = true;
            axios(`${this.global.api}/book/${this.bookId}/${val}`)
            .then(res => {
                this.loading = false;
                if (type) {
                    this.articleData.push(res.data)
                }else{
                    this.articleData = [res.data]
                }
                this.articleTitle = res.data.title
            })
        },
        showBar_fn(){
            this.showBar = !this.showBar;
        },
        switchColor(val){
            this.$store.dispatch('setReaderInfoOne', {key: 'bgColor', val: val});
        },
        switchFontSize(val){
            this.$store.dispatch('setReaderInfoOne', {key: 'fontSize', val: val});
        },
        showChapter_fn(){
            // console.log(this.showCatalog)
            this.$store.dispatch('setReaderInfoOne', {key: 'chapterListState', val: !this.showCatalog});
        },
        daytime_fn(){
            // console.log(this.article)
            this.$store.dispatch('setReaderInfoOne', {key: 'isDaytime', val: !this.articleInfo.isDaytime});
        }
    },
    components:{
        catalog
    },
    filters:{

    },
    watch: {
        articleInfo: { // computed 里的article
            handler(val, oldVal){
                let saveData ={
                    bookId: val.bookId,
                    chapterId: val.chapterId,
                    fontSize: val.fontSize,
                    bgColor: val.bgColor,
                    isDaytime: val.isDaytime,
                };

                this.$store.dispatch('setReaderInfoAll', val);
                this.global.setLocalStorage('qidian_reader' ,saveData);
                // console.log(this.$store.state.article)
                // 选择 章节后 隐藏 选项栏
                if (!val.chapterListState&&this.showBar) {
                    this.showBar = !this.showBar;
                }
            },
            deep: true //深度监听
        },
        curChapterId(val, oldVal){ //章节改变 获取数据
            // console.log(val)
            this.getChapterContent(val, this.$store.state.article.getChapterType)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.reader {
    // background-color: #e9dfc7;
    width: 100%;
    overflow: hidden;
    .top-nav {
        background-color: #000;
        width: 100%;
        line-height: 50px;
        padding: 0 .23rem;
        font-size: 14px;
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        a {
            display: inline-block;
            background: url('../assets/image/back-white.png') no-repeat 0 50%;
            background-size: 18px;
            padding-left: 25px;
            color: #fff;
        }
    }
    .container {
        h2 {
            padding: 0 .23rem 0;
            font-size: 20px;
            // font-weight: bold;
            height: .63rem;
            line-height: .63rem;
            width: 100%;
            color: rgba(0,0,0,.4);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .click-arear{
            height: 30%; 
            width: 100%;
            position: fixed;
            top: 35%;
            left: 0;
        }
        .read-section{
            color: rgba(0,0,0,.85);
            .article-content {
                padding-top: .63rem;
                line-height: 31px;
            }
        }
        .read-section.is-daytime{
            color: rgba(255,255,255,.5);
        }
    }
    .bottom-nav {
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        .font-content {
            background-color: rgba(0, 0, 0, 0.88);
            height: 135px;
            color: #fff;
            .select-item {
                height: 50%;
                display: flex; // flex-direction: column;
                // justify-content:center;
                align-items: center;
                font-size: 16px;
                .name {
                    flex: 1;
                    text-align: center;
                }
                .option {
                    flex: 3;
                }
            }
            .select-font-size {
                button {
                    font-size: 18px;
                    width: 80px;
                    background-color: #000;
                    color: #fff;
                    border: 1px solid #fff;
                    border-radius: 14px;
                    vertical-align: middle;
                    margin-right: 20px;
                }
            }
            .select-bg-color {
                button {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin-right: 6px;
                }
            }
        }
        .item-nav-container {
            background-color: #000;
            display: flex;
            justify-content: space-aroud;
            align-items: center;
            height: 60px;
            .item-nav {
                text-align: center;
                flex: 1;
                color: #fff;
                font-size: 12px;
                .nav{
                    display: inline-block;
                    padding: 5px;
                    svg{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }
    .catalog-wrap{
        position: fixed;
        top: 0; 
        left: 0;
        width: 6.5rem;
        z-index: 2;
        height: 100%;
        overflow: scroll;
     }
}
</style>
