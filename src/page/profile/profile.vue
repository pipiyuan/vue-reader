<template>
    <div class="profile">
        <header-top signin-up="profile"><span slot="top-title" class="top-title">我的</span></header-top>
        <section>
            <section class="profile-number">
                <router-link :to="userInfo&&userInfo.user_id? '/profile/info' : '/login'" class="profile-link">
                    <img :src="imgBaseUrl + userInfo.avatar" class="privateImage" v-if="userInfo&&userInfo.user_id">
                    <span class="privateImage" v-else>
                        <svg class="privateImage-svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="user-info">
                        <p>{{username}}</p>
                        <p>
                            <span class="user-icon">
                                <svg class="icon-mobile" fill="#fff">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                                </svg>
                            </span>
                            <span class="icon-mobile-number">{{mobile}}</span>
                        </p>
                    </div>
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </router-link>
            </section>
            <section class="info-data">
                <ul class="clear">
                    <router-link to="/balance" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{parseInt(balance).toFixed(2)}}</b>元</span>
                        <span class="info-data-bottom">我的余额</span>
                    </router-link>
                    <router-link to="/benefit" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{count}}</b>个</span>
                        <span class="info-data-bottom">我的优惠</span>
                    </router-link>
                    <router-link to="/points" tag="li" class="info-data-link">
                        <span class="info-data-top"><b>{{pointNumber}}</b>分</span>
                        <span class="info-data-bottom">我的积分</span>
                    </router-link>
                </ul>
            </section>
            <section class="profile-1reTe">
                <!-- 我的订单 -->
                <router-link to='/order' class="myorder">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div">
                        <span>我的订单</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
                <!-- 积分商城 -->
                <a href='https://home.m.duiba.com.cn/#/chome/index' class="myorder">
                    <aside>
                        <svg fill="#fc7b53">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div">
                        <span>积分商城</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
                <!-- 饿了么会员卡 -->
                <router-link to='/vipcard' class="myorder">
                    <aside>
                        <svg fill="#ffc636">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div">
                        <span>饿了么会员卡</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
            </section>
            <section class="profile-1reTe">
                <!-- 服务中心 -->
                <router-link to='/service' class="myorder">
                    <aside>
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div">
                        <span>服务中心</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
                <!-- 下载饿了么APP -->
                <router-link to='/download' class="myorder">
                    <aside>
                        <svg fill="#3cabff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
                        </svg>
                    </aside>
                    <div class="myorder-div" style="border-bottom:0;">
                        <span>下载饿了么APP</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
            </section>
        </section>
    </div>     
</template>

<script>
import headerTop from '../../components/header'
export default {
    // name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        headerTop,
    },
    mounted(){

        console.log(document.getElementById('qazqwe'))
    }
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
    @import '../../style/mixin.scss';
    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:#3190e8;
            padding: .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include w-h(2.5rem,2.5rem);
                border-radius:50%;
                vertical-align:middle;
                .privateImage-svg{
                    background:#fff;
                    border-radius:50%;
                    @include w-h(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include size-color(.8rem,#fff);
                    .user-icon{
                        @include w-h(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include w-h(100%,100%);
                        }
                    }
                    .icon-mobile-number{
                        display:inline-block;
                        @include size-color(.57333rem,#fff);

                    }
                }

            }
            .arrow{
                @include w-h(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include w-h(100%,100%);
                }
            }
        }
   }
   .info-data{
        width:100%;
        background:#fff;
        box-sizing: border-box;
        ul{
            display: flex;
            .info-data-link{
                flex: 1;
                width:33.33%;
                border-right:1px solid #f1f1f1;
                span{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                .info-data-top{
                    @include size-color(.55rem,#333);
                    padding: .853333rem 0 .453333rem;
                    b{
                        display:inline-block;
                        @include size-color(1.2rem,#f90);
                        font-weight:700;
                        line-height:1rem;
                        font-family: Helvetica Neue,Tahoma;
                    }
                }
                .info-data-bottom{
                    @include size-color(.57333rem,#666);
                    font-weight:400;
                    padding-bottom:.453333rem;

                }
            }
            .info-data-link:nth-of-type(2){
                .info-data-top{
                    b{
                        color:#ff5f3e;
                    }
                }

            }
            .info-data-link:nth-of-type(3){
                border:0;
                .info-data-top{
                    b{
                        color:#6ac20b;
                    }
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:#fff;
        .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include w-h(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include w-h(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include size-color(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include w-h(.46667rem,.466667rem);
                    svg{
                        @include w-h(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>



