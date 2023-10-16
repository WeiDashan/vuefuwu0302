<template>
    <div class="totalBody">
        <div class="mytitle">
            <div class="mytitle_logo">
                <div>
                    <img :src="image.logoimg">
                </div>
            </div>
            <div class="mytitle_cato">
                <div>电视剧</div>
                <div>电影</div>
                <div>综艺</div>
                <div>全部</div>
            </div>
            <div class="mytitle_search">
                <div class="mytitle_search_frak">
                    <div class="mytitle_search_frak_left">
                        <div>爱情公寓</div>
                        <div>热搜榜</div>
                    </div>
                    <div class="mytitle_search_frak_right">搜全网</div>
                </div>
            </div>
            <div class="mytitle_info">
                <div>VIP</div>
                <div>游戏</div>
                <div>上传</div>
                <div>客户端</div>
                <div>消息</div>
                <div>看过</div>
            </div>
            <div class="mytitle_photo" v-show="user.userid==0">
                <div class="mytitle_photo_img" @click="mylogin">
                    <img :src="image.login">
                    <div></div>
                </div>
<!--                登录-->
                <div class="mytitle_photo_word">登录</div>
            </div>
            <div class="mytitle_photo2" v-show="user.userid!=0">
                <img :src="image.login2">
            </div>
        </div>
        <!--      轮播图      -->
        <div class="mycarousel" @mouseover="deleplay" @mouseleave="autoplay">
            <div class="mycarousel_title">
                <div>电影首页</div>
                <div>网络电影</div>
                <div>预告片</div>
                <div>电影节目</div>
                <div>系列电影</div>
                <div>VIP精选</div>
            </div>
            <div class="myCarouselShadow"></div>
            <div class="mycarousel_body">
                <img :src="carousel_img.c1" :hidden="currentCarouselIndex!=1">
                <img :src="carousel_img.c2" :hidden="currentCarouselIndex!=2">
                <img :src="carousel_img.c3" :hidden="currentCarouselIndex!=3">
                <img :src="carousel_img.c4" :hidden="currentCarouselIndex!=4">
                <img :src="carousel_img.c5" :hidden="currentCarouselIndex!=5">
                <img :src="carousel_img.c6" :hidden="currentCarouselIndex!=6">
                <img :src="carousel_img.c7" :hidden="currentCarouselIndex!=7">
                <img :src="carousel_img.c8" :hidden="currentCarouselIndex!=8">
            </div>
            <div class="mycarousel_point">
                <div class="point active" @mouseover="changeCarousel(1)"></div>
                <div class="point" @mouseover="changeCarousel(2)"></div>
                <div class="point" @mouseover="changeCarousel(3)"></div>
                <div class="point" @mouseover="changeCarousel(4)"></div>
                <div class="point" @mouseover="changeCarousel(5)"></div>
                <div class="point" @mouseover="changeCarousel(6)"></div>
                <div class="point" @mouseover="changeCarousel(7)"></div>
                <div class="point" @mouseover="changeCarousel(8)"></div>
            </div>
            <div class="mycarousel_left">
                <img :src="image.leftWhite" :hidden="currentleft==1" @mouseover="currentleft=1" @mouseleave="currentleft=0">
                <img :src="image.leftGreen" :hidden="currentleft==0" @click="cutCurrentCarouselIndex">
            </div>
            <div class="mycarousel_right">
                <img :src="image.rightWhite" :hidden="currentright==1" @mouseover="currentright=1" @mouseleave="currentright=0">
                <img :src="image.rightGreen" :hidden="currentright==0" @click="addCurrentCarouselIndex">
            </div>
        </div>
        <!--    电影详细分类    -->
        <div class="mydetail">
            <div class="mydetail_oneCol">
                <div class="mydetail_oneCol_title">
                    <div>片库</div>
                    <div>全部></div>
                </div>
                <div class="mydetail_oneCol_body">
                    <div>近期热门</div>
                    <div>免费电影</div>
                    <div>会员专享</div>
                </div>
                <div class="mydetail_oneCol_body">
                    <div>最新上线</div>
                    <div>院线大片</div>
                    <div>评分最高</div>
                </div>
            </div>
            <div class="mydetail_oneCol">
                <div class="mydetail_oneCol_title">
                    <div>地区</div>
                    <div>全部></div>
                </div>
                <div class="mydetail_oneCol_body">
                    <div>华语</div>
                    <div>美国</div>
                    <div>欧洲</div>
                </div>
                <div class="mydetail_oneCol_body">
                    <div>日本</div>
                    <div>韩国</div>
                    <div>泰国</div>
                </div>
            </div>
            <div class="mydetail_oneCol">
                <div class="mydetail_oneCol_title">
                    <div>分类</div>
                    <div @click="gotoclassify(0)">全部></div>
                </div>
                <div class="mydetail_oneCol_body">
                    <div @click="gotoclassify(1)">动作</div>
                    <div @click="gotoclassify(2)">冒险</div>
                    <div @click="gotoclassify(3)">动画</div>
                    <div @click="gotoclassify(4)">幼儿</div>
                    <div @click="gotoclassify(5)">喜剧</div>
                    <div @click="gotoclassify(6)">犯罪</div>
                    <div @click="gotoclassify(7)">记录</div>
<!--                    <div @click="gotoclassify(8)">戏剧</div>-->
<!--                    <div @click="gotoclassify(9)">幻想</div>-->
                </div>
                <div class="mydetail_oneCol_body">
                    <div @click="gotoclassify(10)">暗黑</div>
                    <div @click="gotoclassify(11)">恐怖</div>
                    <div @click="gotoclassify(12)">音乐</div>
                    <div @click="gotoclassify(13)">神秘</div>
                    <div @click="gotoclassify(14)">浪漫</div>
                    <div @click="gotoclassify(15)">科幻</div>
                    <div @click="gotoclassify(16)">惊悚</div>
<!--                    <div @click="gotoclassify(17)">战争</div>-->
<!--                    <div @click="gotoclassify(18)">西方</div>-->
                </div>
            </div>
        </div>
<!--   专属影院     -->
        <div class="mycinema" :style="note[currentCinemaShadowIndex]">
            <div class="mycinema_shadow2"></div>
            <div class="mycinema_shadow"></div>
            <div class="mycinema_body">
                <div class="mycinema_body_title">你的专属影院</div>
                <div class="mycinema_body_totle">
                    <div class="mycinema_body_left" @mouseover="currentCinemaLeft=1"
                         @mouseleave="currentCinemaLeft=0"
                         @click="mycinemaleft">
                        <img :src="image.CinemaleftWhite" :hidden="currentCinemaLeft==1">
                        <img :src="image.CinemaleftGreen" :hidden="currentCinemaLeft==0">
                    </div>
                    <div class="mycinema_body_right" @mouseover="currentCinemaRight=1"
                         @mouseleave="currentCinemaRight=0"
                         @click="mycinemaright">
                        <img :src="image.CinemarightWhite" :hidden="currentCinemaRight==1">
                        <img :src="image.CinemarightGreen" :hidden="currentCinemaRight==0">
                    </div>
                    <div class="mycinema_body_totle_imglist">

                        <div class="mycinema_body_totle_imglist_left3_0">
                            <div>
                                <img :src="cinema_img.c4">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==0"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie4[0].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie4[0].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_left2_0">
                            <div>
                                <img :src="cinema_img.c3">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==1"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie1[1].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie1[1].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_left1_0">
                            <div>
                                <img :src="cinema_img.c2">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==2"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie1[2].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie1[2].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_mid_0">
                            <div>
                                <img :src="cinema_img.c1">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==3"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie1[3].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie1[3].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_right1_0">
                            <div>
                                <img :src="cinema_img.c5">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==4"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie1[4].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie1[4].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_right2_0">
                            <div>
                                <img :src="cinema_img.c6">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==5"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">{{movie1[5].moviedetail.moviename}}</div>-->
<!--                            <div class="mycinema_img_ratings">{{movie1[5].moviedetail.published_year}}</div>-->
                        </div>
                        <div class="mycinema_body_totle_imglist_right3_0">
                            <div>
                                <img :src="cinema_img.c7">
                                <div class="mycinema_img_shadow" :hidden="currentCinemaShadowIndex==6"></div>
                            </div>
                          <div class="mycinema_img_name"></div>
                          <div class="mycinema_img_ratings"></div>
<!--                            <div class="mycinema_img_name">Toy Story</div>-->
<!--                            <div class="mycinema_img_ratings">1995</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mybody">
<!--     推荐栏       -->
            <div class="oneRow" :hidden="user.userid==0">
                <div class="oneRow_title">
<!--                    基于用户相似度的协同过滤推荐算法-->
                  个性化推荐结果1
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie4">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneRow" :hidden="user.userid==0">
                <div class="oneRow_title">
<!--                    基于内容相似度的协同过滤推荐算法-->
                  个性化推荐结果2
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie5">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneRow" :hidden="user.userid==0">
                <div class="oneRow_title">
<!--                    基于SlopeOne的的协同过滤推荐算法-->
                  个性化推荐结果3
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie6">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneRow">
                <div class="oneRow_title">
                    北美电影票房巨鳄
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie1">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneRow">
                <div class="oneRow_title">
                    戛纳电影节历届佳片回顾
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie2">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="oneRow">
                <div class="oneRow_title">
                    史诗级战争大片赏
                </div>
                <div class="oneRow_body">
                    <div class="oneRow_body_one" v-for="(item,i) in movie3">
                        <div class="oneRow_body_img" @click="goto(item)">
                            <img :src="item.movieimg">
                            <div class="myshadow"></div>
                        </div>
                        <div class="oneRow_body_detail">
                            <div class="oneRow_body_detail_name">{{item.moviedetail.moviename}}</div>
                            <div class="oneRow_body_detail_ratings">{{item.moviedetail.published_year}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mybottom">
            <div class="mybottom_body">
                <div class="mybottom_body_first">
                    <div>公司介绍</div>
                    <div>新闻动态</div>
                    <div>联系方式</div>
                    <div>公司招聘</div>
<!--                    <div>Investor Relations</div>-->
<!--                    <div>Media Center</div>-->
                    <div>内容合作</div>
                    <div>广告合作</div>
                    <div>会员合作</div>
                    <div>技术合作</div>
                    <div>公众号</div>
                    <div>互动视频标准</div>
                    <div>用户协议</div>
                </div>
                <div class="mybottom_body_second">
                    <div>隐私政策</div>
                    <div>帮助反馈</div>
                    <div>侵权举报与投诉</div>
                </div>
            </div>
            <div class="mybottom_bottom">
                <div>反盗版和反盗链权利声明</div>
                <div>Copyright 2021</div>
                <div>爱崎艺</div>
                <div>All Rights Reserved</div>
            </div>
        </div>
    </div>
</template>
<style>
/*<!--    标题栏   -->*/
.totalBody{
  width: 1519px;
}
.mytitle{
  background-color: #232325;
  color: #c4c4c4;
  padding:0 60px;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 999;

}
/*logo*/
.mytitle_logo{
  width: 190px;
  margin-right: 20px;
  text-align: center;
}
.mytitle_logo img{
  display: block;
  padding: 12px 0;
  max-height: 36px;
  width: auto;
}
/*分类*/
.mytitle_cato{
  display: flex;
  flex-direction: row ;
}
.mytitle_cato div:hover {
  color:#00be06;
}
.mytitle_cato div:nth-child(1){
  /*display: inline-block;*/
  padding: 0 10px;
  width: 80px;
  min-width: 70px;
}
.mytitle_cato div:nth-child(n+1){
  /*display: inline-block;*/
  padding: 0 10px;
  width: 60px;
  min-width: 50px;
}
/*搜索框*/
.mytitle_search{
  /*background-color: pink;*/
  width: 400px;
  margin-left: 20px;
  margin-right: 20px;

}
.mytitle_search_frak{
  /*background: white;*/
  margin-top: 10px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background-color: #232325;
}
.mytitle_search_frak div{
  height: 40px;
  line-height: 40px;
}
.mytitle_search_frak_left{
  background-color: #333333;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  height: 40px;
  flex-direction: row;
  width: 300px;
  padding: 0 20px;
  justify-content:space-between;
  color: #999999;
}
.mytitle_search_frak_right{
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #00be06;
  width: 100px;
  text-align: center;
  color: #ffffff;
}
.mytitle_search_frak_left:hover{
  background-color: #424242;
  color: #d6d6d6;
}
/*其他*/
.mytitle_info{
  display: flex;
  flex-direction: row ;

}
.mytitle_info div{
  padding: 0 10px;
}
.mytitle_info div:hover {
  color:#00be06;
}
/*<!--  22222  -->*/
.mycinema_body_totle_imglist{

}
.mycinema_img_name{
  position: absolute;
  left: 24px;
  bottom: 10px;
  height: 40px;
  line-height: 40px;
  width: 200px;
  color: white;
  font-size: 20px;
  overflow: hidden;
}
.mycinema_img_ratings{
  position: absolute;
  right: 24px;
  bottom: 10px;
  height: 40px;
  line-height: 40px;
  width: 60px;
  color: #ed702e;
  font-size: 24px;
}
.mycinema_img_name:hover{
  color: #00be06;
}

.mycinema_img_shadow{
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 1s;
}
.mycinema_body_totle_imglist>div>div{
    position: relative;
}
.mycinema_body_totle_imglist div:hover img{
    transform: scale(1.05,1.05);
}
.mycinema_body_totle_imglist div div{
    overflow: hidden;
    height: 100%;
    width: 100%;
}
.mycinema_body_totle_imglist img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.4s;
}
.mycinema_body_totle_imglist_right3_1,
.mycinema_body_totle_imglist_left3_1{
    z-index: 1;
    position: absolute;
    height: 150px;
    width: 285px;
    top: 55px;
    transform:translate(-50%,0);
    /*background-color: blue;*/
    transition: all 1s;
}
.mycinema_body_totle_imglist_left3_1{
    left: -13%;
}
.mycinema_body_totle_imglist_right3_1{
    left: 113%;
}
.mycinema_body_totle_imglist_right2_1,
.mycinema_body_totle_imglist_left2_1{
    z-index: 2;
    position: absolute;
    height: 150px;
    width: 285px;
    top: 55px;
    transform:translate(-50%,0);
    /*background-color: yellowgreen;*/
    transition: all 1s;
}
.mycinema_body_totle_imglist_right2_1{
    left: 88%;
}
.mycinema_body_totle_imglist_left2_1{
    left: 12%;
}
.mycinema_body_totle_imglist_right1_1,
.mycinema_body_totle_imglist_left1_1{
    z-index: 3;
    position: absolute;
    height: 200px;
    width: 370px;
    top: 30px;
    transform:translate(-50%,0);
    /*background-color: royalblue;*/
    transition: all 1s;
}
.mycinema_body_totle_imglist_right1_1{
    left: 75%;
}
.mycinema_body_totle_imglist_left1_1{
    left: 27%;
}
.mycinema_body_totle_imglist_mid_1{
    position: absolute;
    /*background-color: pink;*/
    height: 260px;
    width: 480px;
    top: 0;
    left: 50%;
    transform:translate(-50%,0);
    z-index: 4;
    transition: all 1s;
}
    /*<!--  专属影院  -->*/
    .mycinema_body_totle_imglist_right3_0,
    .mycinema_body_totle_imglist_left3_0{
        z-index: 1;
        position: absolute;
        height: 150px;
        width: 285px;
        top: 55px;
        transform:translate(-50%,0);
        /*background-color: blue;*/
        transition: all 1s;
    }
    .mycinema_body_totle_imglist_left3_0{
        left: -13%;
    }
    .mycinema_body_totle_imglist_right3_0{
        left: 113%;
    }
    .mycinema_body_totle_imglist_right2_0,
    .mycinema_body_totle_imglist_left2_0{
        z-index: 2;
        position: absolute;
        height: 150px;
        width: 285px;
        top: 55px;
        transform:translate(-50%,0);
        /*background-color: yellowgreen;*/
        transition: all 1s;
    }
    .mycinema_body_totle_imglist_right2_0{
        left: 88%;
    }
    .mycinema_body_totle_imglist_left2_0{
        left: 12%;
    }
    .mycinema_body_totle_imglist_right1_0,
    .mycinema_body_totle_imglist_left1_0{
        z-index: 3;
        position: absolute;
        height: 200px;
        width: 370px;
        top: 30px;
        transform:translate(-50%,0);
        /*background-color: royalblue;*/
        transition: all 1s;
    }
    .mycinema_body_totle_imglist_right1_0{
        left: 75%;
    }
    .mycinema_body_totle_imglist_left1_0{
        left: 27%;
    }
    .mycinema_body_totle_imglist_mid_0{
        position: absolute;
        /*background-color: pink;*/
        height: 260px;
        width: 480px;
        top: 0;
        left: 50%;
        transform:translate(-50%,0);
        z-index: 4;
        transition: all 1s;
    }


    .mycinema_body_totle_imglist{
        position: relative;
        /*background-color: red;*/
        height: 300px;
        width: 1150px;
        margin: 0 auto;
        overflow: hidden;
    }
    .mycinema{
        position: relative;
        padding: 0 140px;
        transition: all 0.5s;
    }
    .mycinema_shadow2{
        background-color: rgba(40,40,40,0.9);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .mycinema_shadow{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*background-color: white;*/
        box-shadow: inset -80px 60px  80px -50px #fff,
                    inset 80px -60px  80px -50px #fff;
    }
    .mycinema_body{
        margin: 40px 0;
        position: relative;
    }
    .mycinema_body_title{
        height:86px;
        font-size: 30px;
        color: white;
        text-align: center;
        padding-top: 10px;
        line-height: 86px;
    }
    .mycinema_body_right,
    .mycinema_body_left{
        position: absolute;
        transform: translate(0,-80%);
        top: 50%;
        height: 60px;
        width: 40px;
        background-color: rgba(0,0,0,0.1);
        border-radius: 6px;
    }
    .mycinema_body_left{
        left: 0;
    }
    .mycinema_body_right{
        right: 0;
    }
    .mycinema_body_left:hover{
        background-color: rgba(0,0,0,0.3);
    }
    .mycinema_body_right:hover{
        background-color: rgba(0,0,0,0.3);
    }
    .mycinema_body_left img{
        width: 100%;
        height: 100%;
    }
    .mycinema_body_right img{
        width: 100%;
        height: 100%;
    }
    .mycinema_body_totle{
        height: 100%;
        width: 100%;
        height: 300px;
        position: relative;
        /*background-color: rgba(0,255,0,0.3);*/
    }
/*<!--  电影详细分类  -->*/
    .mydetail{
        display: flex;
        flex-direction: row;
        padding: 0 140px;
        /*background-color: pink;*/
        justify-content: space-around;
        font-size: 14px;
        background-color: #f9f9f9;
    }
    .mydetail_oneCol{
        padding: 14px 40px;
    }
    .mydetail_oneCol_body,
    .mydetail_oneCol_title{
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
    }
    .mydetail_oneCol_title div:nth-child(2){
        cursor: pointer;
    }
    .mydetail_oneCol_title{
        padding: 0 18px;
    }
    .mydetail_oneCol_title div:nth-child(2){
        padding: 0 18px;
    }
    .mydetail_oneCol_title div:nth-child(1){
        color: #999999;
    }
    .mydetail_oneCol_body div{
      width: 80px;
      box-sizing: border-box;
      text-align: center;
      padding: 0 10px;
    }
    .mydetail_oneCol_title div:nth-child(2):hover{
        color: #00be06;
    }
    .mydetail_oneCol_body div:hover{
        color: #00be06;
        cursor: pointer;
    }
    /*<!--  轮播图  -->*/
    .mycarousel{
        width: 100%;
        height: 520px;
        /*margin-top: 60px;*/
        position: relative;
        background-color: #004006;
    }
    .mycarousel_title{
        display: flex;
        flex-direction: row;
        height: 30px;
        line-height: 30px;
        position: absolute;
        top: 20px;
        left: 140px;
        background-color: rgba(0,0,0,0.5);
        color: white;
        border-radius: 15px;
        padding: 0 10px;
        font-size: 14px;
    }
    .mycarousel_title div{
        padding: 0 10px;
        box-sizing: border-box;
        min-width: 90px;
        z-index: 2;
    }
    .mycarousel_title div:first-child{
        color: #00be06;
    }
    .mycarousel_title div:hover{
        color: #00be06;
    }
    .myCarouselShadow{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*background-color: white;*/
        box-shadow: inset -200px 0px  200px -100px #000,
                    inset 200px 0px  200px -100px #000;
    }
    .mycarousel_body{
        width: 100%;
        height: 100%;
    }
    .mycarousel_body img{
        width: 100%;
        height: 100%;
        /*box-shadow: 0px 115px 115px -15px #fff,*/
    }
    .mycarousel_point{
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -100px;
        margin-bottom: 20px;
        /*background-color: pink;*/
        width: 200px;
        height: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .point{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #d5d5d5;
    }
    .point:hover{
        background-color: #00be06;
    }
    .point.active{
        background-color: #00be06;
    }
    .mycarousel_left,
    .mycarousel_right{
        position: absolute;
        margin-top: -40px;
        top: 50%;
        height: 80px;
        width: 60px;
        background-color: rgba(0,0,0,0.1);
        border-radius: 6px;
    }
    .mycarousel_left{
        left: 0;
        margin-left: 100px;
    }
    .mycarousel_right{
        right: 0;
        margin-right: 100px;
    }
    .mycarousel_left:hover{
        background-color: rgba(0,0,0,0.3);
    }
    .mycarousel_right:hover{
        background-color: rgba(0,0,0,0.3);
    }
    .mycarousel_left img{
        width: 100%;
        height: 100%;
    }
    .mycarousel_right img{
        width: 100%;
        height: 100%;
    }
/*<!--  底层  -->*/
    .mybottom{
        padding: 0 140px;
        margin-top: 50px;
        background-color: #f8f8f8;
        font-size: 14px;
    }
    .mybottom_body{
        padding: 20px 0px;
        border-bottom: #e7e7e7 solid 1px;
    }
    .mybottom_body_first{
        display: flex;
        height: 40px;
        line-height: 40px;
        flex-direction: row;
        justify-content: center;
    }
    .mybottom_body_first div{
        width: 90px;
        min-width: 90px;
        text-align: center;
        box-sizing: border-box;
        /*padding: 0 15px;*/
    }
    .mybottom_body_first div:hover{
        color: #00be06;
    }
    .mybottom_body_second{
        height: 40px;
        line-height: 40px;
        display: flex;
        min-width: 90px;
        flex-direction: row;
        justify-content: center;
    }
    .mybottom_body_second div{
        padding: 0 15px;
      min-width: 100px;
    }
    .mybottom_body_second div:hover{
        color: #00be06;
    }
    .mybottom_bottom{
        display: flex;
        height: 80px;
        line-height: 70px;
        padding-bottom: 10px;
        flex-direction: row;
        justify-content: center;
        color: #989898;
    }
    .mybottom_bottom div{
        min-width: 90px;
        padding: 0 5px;
    }
    .mybottom_bottom div:nth-of-type(odd):hover{
        color: #00be06;
    }
    .mybottom_bottom div:nth-of-type(even){
        font-size: 12px;
    }
/*<!--  一栏  -->*/
    .mybody{
        /*margin-top: 60px;*/
        /*padding: 0 140px;*/
        /*background-color: pink;*/
    }
    .oneRow{
        margin-top: 30px;
        margin-left: 120px;
    }
    .oneRow_title{
        font-size: 26px;
        font-weight: 400;
        height: 60px;
        line-height: 60px;
        /*background-color: green;*/
    }
    .oneRow_body{
        display: flex;
        flex-direction: row;
        /*background-color: chocolate;*/
    }
    .oneRow_body_one{
        background-color: #f2f2f2;
        width: 205px;
        margin-left: 3px;
        margin-right: 3px;
        height: 320px;
    }
    .oneRow_body_detail{
        /*background-color: darkblue;*/
        height: 35px;
        display: flex;
        flex-direction: row;
        padding: 0 10px;
        line-height: 35px;
        justify-content: space-between;
    }
    .oneRow_body_detail_name{
        font-size: 14px;
        width: 140px;
        overflow: hidden;
        /*background-color: pink;*/
    }
    .oneRow_body_detail_ratings{
        color: #fc4355;
    }
    .oneRow_body_img{
        /*background-color: red;*/
        display: block;
        height: 285px;
        width: 205px;
        position: relative;
        overflow: hidden;
    }
    .myshadow{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);
    }
    .myshadow:hover{
        background-color: rgba(255,255,255,0);
    }
    .oneRow_body_img:hover{
        box-shadow: -1px 1px 4px #004006;
        cursor: pointer;
    }
    .oneRow_body_detail_name:hover{
        color: #00be06;
    }
    .oneRow_body_img img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: .2s all linear;
    }
    .oneRow_body_img:hover img{
        transform: scale3d(1.05,1.05,1.05);
    }
    html,body{
        margin:0;
        padding:0;
    }






/*头像*/
.mytitle_photo_img{
  width: 20px ;
  height: 20px;
  background-color: #00be06;
  position: relative;
  border-radius: 50%;
  margin-bottom: 1px;

}
.mytitle_photo_img img{
  display: block;
  max-height: 20px;
  width: auto;
}
.mytitle_photo_img div{
  position: absolute;
  top: -1px;
  right: -5px;
  background-color: red;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
    .mytitle_photo{
        margin-left: 15px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 40px;
        padding-top: 6px;
    }

    .mytitle .mytitle_photo2{
        margin-left: 15px;
        width: 40px;
        padding-top: 8px;

    }
.mytitle_photo2 img{
  display: block;
  max-height: 40px;
  width: auto;
  border-radius: 50%;
  border: #d6d357 solid 2px;
}


    .mytitle_photo_word{
        padding: 0;
        line-height: 20px;
        height: 20px;
        font-size: 10px;
        width: 30px;
        text-align: center;

    }
</style>

<script>
import backEndOptions from "@/assets/website";
export default {
    data() {
        return{
            // currentMoviePage:1,
            // userid:1,
            currentCarouselIndex:1,
            currentleft:0,
            currentright:0,
            currentCinemaLeft:0,
            currentCinemaRight:0,
            currentCinemaCount:0,
            currentCinemaShadowIndex:3,
            user:{
              userid:0,
            },
            note:[
                {
                    backgroundImage: "url(" + require("../../image/cinema/4.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/3.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/2.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/1.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/5.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/6.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
                {
                    backgroundImage: "url(" + require("../../image/cinema/7.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "100% 100%",
                },
            ],
            movie1:[
                {
                    moviedetail:{
                        movieid:1,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/1.jpg"),
                },
                {
                    moviedetail:{
                        movieid:2,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/2.jpg"),
                },
                {
                    moviedetail:{
                        movieid:3,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/3.jpg"),
                },
                {
                    moviedetail:{
                        movieid:4,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/30.jpg"),
                },
                {
                    moviedetail:{
                        movieid:5,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/5.jpg"),
                },
                {
                    moviedetail:{
                        movieid:6,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/6.jpg"),
                },
            ],
            movie2:[
                {
                    moviedetail:{
                        movieid:7,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/7.jpg"),
                },
                {
                    moviedetail:{
                        movieid:8,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/8.jpg"),
                },
                {
                    moviedetail:{
                        movieid:9,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/9.jpg"),
                },
                {
                    moviedetail:{
                        movieid:10,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/10.jpg"),
                },
                {
                    moviedetail:{
                        movieid:11,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/11.jpg"),
                },
                {
                    moviedetail:{
                        movieid:12,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/12.jpg"),
                },
            ],
            movie3:[
                {
                    moviedetail:{
                        movieid:13,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/13.jpg"),
                },
                {
                    moviedetail:{
                        movieid:14,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/14.jpg"),
                },
                {
                    moviedetail:{
                        movieid:15,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/15.jpg"),
                },
                {
                    moviedetail:{
                        movieid:16,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/16.jpg"),
                },
                {
                    moviedetail:{
                        movieid:17,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/17.jpg"),
                },
                {
                    moviedetail:{
                        movieid:18,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/18.jpg"),
                },
            ],
            movie4:[
                {
                    moviedetail:{
                        movieid:19,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/19.jpg"),
                },
                {
                    moviedetail:{
                        movieid:20,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/20.jpg"),
                },
                {
                    moviedetail:{
                        movieid:21,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/21.jpg"),
                },
                {
                    moviedetail:{
                        movieid:22,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/22.jpg"),
                },
                {
                    moviedetail:{
                        movieid:23,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/23.jpg"),
                },
                {
                    moviedetail:{
                        movieid:24,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/24.jpg"),
                },
            ],
            movie5:[
                {
                    moviedetail:{
                        movieid:25,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/25.jpg"),
                },
                {
                    moviedetail:{
                        movieid:26,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/26.jpg"),
                },
                {
                    moviedetail:{
                        movieid:27,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/27.jpg"),
                },
                {
                    moviedetail:{
                        movieid:28,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/28.jpg"),
                },
                {
                    moviedetail:{
                        movieid:29,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/29.jpg"),
                },
                {
                    moviedetail:{
                        movieid:31,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/31.jpg"),
                },
            ],
            movie6:[
                {
                    moviedetail:{
                        movieid:32,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/32.jpg"),
                },
                {
                    moviedetail:{
                        movieid:33,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/33.jpg"),
                },
                {
                    moviedetail:{
                        movieid:34,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/34.jpg"),
                },
                {
                    moviedetail:{
                        movieid:35,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/35.jpg"),
                },
                {
                    moviedetail:{
                        movieid:36,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/36.jpg"),
                },
                {
                    moviedetail:{
                        movieid:37,
                        moviename:"片名",
                        published_year:"年份",
                        movietype:"类型",
                    },
                    movieimg: require("../../image/movies/37.jpg"),
                },

            ],
            image:{
                logoimg:require("../../image/title/logo.png"),
                login:require("../../image/title/login.png"),
                login2:require("../../image/title/login2.jpg"),
                leftGreen:require("../../image/arrow/leftGreen.png"),
                leftWhite:require("../../image/arrow/leftWhite.png"),
                rightGreen:require("../../image/arrow/rightGreen.png"),
                rightWhite:require("../../image/arrow/rightWhite.png"),
                CinemaleftGreen:require("../../image/arrow/leftGreen.png"),
                CinemaleftWhite:require("../../image/arrow/leftWhite.png"),
                CinemarightGreen:require("../../image/arrow/rightGreen.png"),
                CinemarightWhite:require("../../image/arrow/rightWhite.png"),
            },
            cinema_img:{
                c1:require("../../image/cinema/1.jpg"),
                c2:require("../../image/cinema/2.jpg"),
                c3:require("../../image/cinema/3.jpg"),
                c4:require("../../image/cinema/4.jpg"),
                c5:require("../../image/cinema/5.jpg"),
                c6:require("../../image/cinema/6.jpg"),
                c7:require("../../image/cinema/7.jpg"),
            },
            carousel_img:{
                c1:require("../../image/carousel/1.jpg"),
                c2:require("../../image/carousel/2.jpg"),
                c3:require("../../image/carousel/3.jpg"),
                c4:require("../../image/carousel/4.jpg"),
                c5:require("../../image/carousel/5.jpg"),
                c6:require("../../image/carousel/6.jpg"),
                c7:require("../../image/carousel/7.jpg"),
                c8:require("../../image/carousel/8.jpg"),
            },
            points:document.getElementsByClassName("point"),
            Polling:null,
        };

    },
    methods: {
        gotoclassify(e){
            // clearInterval(this.Polling);
            // console.log(e);
            this.$router.push({path:'/classify',query:{movietypeid:e}});

        },
        goto(e){
            // clearInterval(this.Polling);
            this.$router.push({path:'/about',query:{movie:e.moviedetail}});
        },
        mycinemaright(){
            if (this.currentCinemaCount==0){
                let mid = document.getElementsByClassName("mycinema_body_totle_imglist_mid_0");
                let left2 = document.getElementsByClassName("mycinema_body_totle_imglist_left2_0");
                let left3 = document.getElementsByClassName("mycinema_body_totle_imglist_left3_0");
                let right1 = document.getElementsByClassName("mycinema_body_totle_imglist_right1_0");
                let right2 = document.getElementsByClassName("mycinema_body_totle_imglist_right2_0");
                let right3 = document.getElementsByClassName("mycinema_body_totle_imglist_right3_0");
                let left1 = document.getElementsByClassName("mycinema_body_totle_imglist_left1_0");
                for(let i=0;i<mid.length;i++){

                }
                mid[0].className="mycinema_body_totle_imglist_left1_1";
                left1[0].className="mycinema_body_totle_imglist_left2_1";
                left2[0].className="mycinema_body_totle_imglist_left3_1";
                left3[0].className="mycinema_body_totle_imglist_right3_1";
                right1[0].className="mycinema_body_totle_imglist_mid_1";
                right2[0].className="mycinema_body_totle_imglist_right1_1";
                right3[0].className="mycinema_body_totle_imglist_right2_1";
            }else{
                let mid = document.getElementsByClassName("mycinema_body_totle_imglist_mid_1");
                let left2 = document.getElementsByClassName("mycinema_body_totle_imglist_left2_1");
                let left3 = document.getElementsByClassName("mycinema_body_totle_imglist_left3_1");
                let right1 = document.getElementsByClassName("mycinema_body_totle_imglist_right1_1");
                let right2 = document.getElementsByClassName("mycinema_body_totle_imglist_right2_1");
                let right3 = document.getElementsByClassName("mycinema_body_totle_imglist_right3_1");
                let left1 = document.getElementsByClassName("mycinema_body_totle_imglist_left1_1");
                mid[0].className="mycinema_body_totle_imglist_left1_0";
                left1[0].className="mycinema_body_totle_imglist_left2_0";
                left2[0].className="mycinema_body_totle_imglist_left3_0";
                left3[0].className="mycinema_body_totle_imglist_right3_0";
                right1[0].className="mycinema_body_totle_imglist_mid_0";
                right2[0].className="mycinema_body_totle_imglist_right1_0";
                right3[0].className="mycinema_body_totle_imglist_right2_0";
            }
            this.currentCinemaShadowIndex=(this.currentCinemaShadowIndex+1)%7;
            this.currentCinemaCount=(this.currentCinemaCount+1)%2;
        },
        mycinemaleft(){
            if (this.currentCinemaCount==0){
                let mid = document.getElementsByClassName("mycinema_body_totle_imglist_mid_0");
                let left1 = document.getElementsByClassName("mycinema_body_totle_imglist_left1_0");
                let left2 = document.getElementsByClassName("mycinema_body_totle_imglist_left2_0");
                let left3 = document.getElementsByClassName("mycinema_body_totle_imglist_left3_0");
                let right1 = document.getElementsByClassName("mycinema_body_totle_imglist_right1_0");
                let right2 = document.getElementsByClassName("mycinema_body_totle_imglist_right2_0");
                let right3 = document.getElementsByClassName("mycinema_body_totle_imglist_right3_0");
                mid[0].className="mycinema_body_totle_imglist_right1_1";
                left1[0].className="mycinema_body_totle_imglist_mid_1";
                left2[0].className="mycinema_body_totle_imglist_left1_1";
                left3[0].className="mycinema_body_totle_imglist_left2_1";
                right1[0].className="mycinema_body_totle_imglist_right2_1";
                right2[0].className="mycinema_body_totle_imglist_right3_1";
                right3[0].className="mycinema_body_totle_imglist_left3_1";
            }
            else{
                let mid = document.getElementsByClassName("mycinema_body_totle_imglist_mid_1");
                let left1 = document.getElementsByClassName("mycinema_body_totle_imglist_left1_1");
                let left2 = document.getElementsByClassName("mycinema_body_totle_imglist_left2_1");
                let left3 = document.getElementsByClassName("mycinema_body_totle_imglist_left3_1");
                let right1 = document.getElementsByClassName("mycinema_body_totle_imglist_right1_1");
                let right2 = document.getElementsByClassName("mycinema_body_totle_imglist_right2_1");
                let right3 = document.getElementsByClassName("mycinema_body_totle_imglist_right3_1");
                mid[0].className="mycinema_body_totle_imglist_right1_0";
                left1[0].className="mycinema_body_totle_imglist_mid_0";
                left2[0].className="mycinema_body_totle_imglist_left1_0";
                left3[0].className="mycinema_body_totle_imglist_left2_0";
                right1[0].className="mycinema_body_totle_imglist_right2_0";
                right2[0].className="mycinema_body_totle_imglist_right3_0";
                right3[0].className="mycinema_body_totle_imglist_left3_0";
            }
            this.currentCinemaShadowIndex=(this.currentCinemaShadowIndex+7-1)%7;
            this.currentCinemaCount=(this.currentCinemaCount+1)%2;
        },
        autoplay() {
            clearInterval(this.Polling)
            this.Polling = setInterval(()=>{
                this.addCurrentCarouselIndex();
            },4000)
        },
        deleplay(){
          clearInterval(this.Polling)
        },
        cutCurrentCarouselIndex(){
            if (this.currentCarouselIndex==1){
                this.currentCarouselIndex=8;
            }else{
                this.currentCarouselIndex--;
            }
            const activepoint = document.getElementsByClassName("point active");
            for(let i=0;i<activepoint.length;i++){
                activepoint[i].className="point";
            }
            this.points[this.currentCarouselIndex-1].className = "point active";
        },
        addCurrentCarouselIndex(){
            if (this.currentCarouselIndex==8){
                this.currentCarouselIndex=1;
            }else{
                this.currentCarouselIndex++;
            }
            const activepoint = document.getElementsByClassName("point active");
            for(let i=0;i<activepoint.length;i++){
                activepoint[i].className="point";
            }
            this.points[this.currentCarouselIndex-1].className = "point active";
        },
        changeCarousel(eindex){
            const that = this;
            this.currentCarouselIndex=eindex;
            const activepoint = document.getElementsByClassName("point active");
            for(let i=0;i<activepoint.length;i++){
                activepoint[i].className="point";
            }
            this.points[eindex-1].className = "point active";
        },
        mylogin(){
            const that = this;
            this.$confirm('您是否要登录?', '提示', {
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                type: 'info'
            }).then(() => {
                //登录成功的函数
                that.user.userid = 1;
                this.$message({
                    type: 'success',
                    message: '用户id为'+that.user.userid+'的用户登录成功!'
                });
                that.getUserRecommend();
                that.getItemRecommend();
                that.getSlopeOneRecommend();
            }).catch(() => {
                // 取消登录的函数
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });
            });
        },
        back() {
            this.$router.push({path:'/',query:{}});
        },
        getSlopeOneRecommend(){
            const that = this;
            // axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/recommender/slopeone/"+this.user.userid).then(function (response6) {
            //     const list6 = response6.data;
            //     for(let i=0;i<6;i++){
            //         that.movie6[i].moviedetail = list6[i];
            //     }
            // })
          axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+26).then(function (response) {
            const list = response.data;
            for(let i=0;i<6;i++){
              that.movie4[i].moviedetail = list[i];
            }
          });
        },
        getUserRecommend(){
            const that = this;
            // axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/recommender/user/"+this.user.userid).then(function (response4) {
            //     const list4 = response4.data;
            //     for(let i=0;i<6;i++){
            //         that.movie4[i].moviedetail = list4[i];
            //     }
            // })
          axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+52).then(function (response) {
            const list = response.data;
            for(let i=0;i<6;i++){
              that.movie5[i].moviedetail = list[i];
            }
          });
        },
        getItemRecommend(){
            const that = this;
            // axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/recommender/item/"+this.user.userid).then(function (response5) {
            //     const list5 = response5.data;
            //     for(let i=0;i<6;i++){
            //         that.movie5[i].moviedetail = list5[i];
            //     }
            // })
          axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+74).then(function (response) {
            const list = response.data;
            for(let i=0;i<6;i++){
              that.movie6[i].moviedetail = list[i];
            }
          });
        },
    },
    created() {
        const that = this;
        axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+108).then(function (response) {
            const list = response.data;
            for(let i=0;i<6;i++){
                that.movie1[i].moviedetail = list[i];
            }
        });
        axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+117).then(function (response2) {
            // console.log(response2);
            // console.log(response2.data);
            const list2 = response2.data;
            for(let i=0;i<6;i++){
                that.movie2[i].moviedetail = list2[i];
            }
        });
        axios.get("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/"+300).then(function (response3) {
            // console.log(response3);
            // console.log(response3.data);
            const list3 = response3.data;
            for(let i=0;i<6;i++){
                that.movie3[i].moviedetail = list3[i];
            }
        })
    },
    mounted() {

        clearInterval(this.Polling);
        this.autoplay();
    },
    // beforeDestroy() {
    //     clearInterval(this.Polling);
    //     this.Polling = null;
    // },
    beforeRouteLeave(to, from, next){
        next();
        if (this.Polling) {
            clearInterval(this.Polling);
            this.Polling = null;
        }
    },
}
</script>
