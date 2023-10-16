<template>
    <div id="dissection">
        <div class="mytitle2">
            <div class="mytitle_logo" @click="gotohead">
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
            <div class="mytitle_photo2">
                <img :src="image.login2">
            </div>
        </div>
        <div class="myclassify">
            <div class="myclassify_type1">
                <div>电视剧</div>
                <div>电影</div>
                <div>综艺</div>
                <div>动漫</div>
                <div>纪录片</div>
                <div>游戏</div>
                <div>资讯</div>
                <div>娱乐</div>
                <div>财经</div>
                <div>网络电影</div>
                <div>片花</div>
                <div>音乐</div>
                <div>军事</div>
                <div>知识</div>
                <div>教育</div>
                <div>体育</div>
                <div>儿童</div>
            </div>
            <div class="myclassify_type2">
                <div>综合排序</div>
                <div class="chooseactive">热播榜</div>
                <div>好评榜</div>
                <div>新上线</div>
            </div>
            <div class="myclassify_type2">
                <div class="chooseactive">全部地区</div>
                <div>华语</div>
                <div>香港地区</div>
                <div>美国</div>
                <div>欧洲</div>
                <div>韩国</div>
                <div>日本</div>
                <div>泰国</div>
                <div>印度</div>
                <div>其他</div>
            </div>
            <div class="myclassify_type2 classifytypelist">
                <div class="chooseactive" @click="changetype(0)">全部类型</div>
                <div @click="changetype(1)">动作</div>
                <div @click="changetype(2)">冒险</div>
                <div @click="changetype(3)">动画</div>
                <div @click="changetype(4)">幼儿</div>
                <div @click="changetype(5)">喜剧</div>
                <div @click="changetype(6)">犯罪</div>
                <div @click="changetype(7)">记录</div>
                <div @click="changetype(8)">戏剧</div>
                <div @click="changetype(9)">幻想</div>
                <div @click="changetype(10)">暗黑</div>
                <div @click="changetype(11)">恐怖</div>
                <div @click="changetype(12)">音乐</div>
                <div @click="changetype(13)">神秘</div>
                <div @click="changetype(14)">浪漫</div>
                <div @click="changetype(15)">科幻</div>
                <div @click="changetype(16)">惊悚</div>
                <div @click="changetype(17)">战争</div>
                <div @click="changetype(18)">西方</div>
            </div>
            <div class="myclassify_type2">
                <div class="chooseactive">全部规格</div>
                <div>巨制</div>
                <div>院线</div>
                <div>独播</div>
                <div>网络电影</div>
            </div>
            <div class="myclassify_type2 classifyyearlist">
                <div class="chooseactive" @click="changeyear(0)">全部年份</div>
                <div @click="changeyear(1)">2000</div>
                <div @click="changeyear(2)">1999</div>
                <div @click="changeyear(3)">1998</div>
                <div @click="changeyear(4)">1997</div>
                <div @click="changeyear(5)">1996</div>
                <div @click="changeyear(6)">1995-1990</div>
                <div @click="changeyear(7)">80年代</div>
                <div @click="changeyear(8)">70年代</div>
                <div @click="changeyear(9)">更早</div>
            </div>
            <div class="myclassify_type2">
                <div class="chooseactive">全部资费</div>
                <div>免费</div>
                <div>付费</div>
            </div>
        </div>
        <div class="myclassifydetail">
            <div class="mymovie" v-for="(item,i) in moviemessage">
                <div class="mymovie_img" @click="gotoabout(item)">
                    <img :src="movieimg[Math.floor(Math.random()*38)]">
                </div>
                <div class="mymovie_detail">
                    <div class="mymovie_detail_moviename">{{item.moviename}}</div>
                    <div class="mymovie_detail_year">{{item.published_year}}</div>
                </div>
                <div class="mymovie_detail">
                    <div class="mymovie_detail_typetitle">类型:</div>
                    <div class="mymovie_detail_type">{{item.movietype}}</div>
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
#dissection{
  width: 1519px;
}
    .mymovie_detail_type:hover{
        color: #00be06;
    }
    .mymovie_detail_type{
        width: 80%;
        /*background-color: blue;*/
        overflow: hidden;
        font-size: 12px;
        margin-right: 10px;
    }
    .mymovie_detail_typetitle{
        font-size: 12px;
        /*background-color: pink;*/
        width: 20%;
        padding-left: 5px;
    }
    .mymovie_img img{
        height: 100%;
        width: 100%;
        transition: all 0.5s;
        cursor: pointer;
    }
    .mymovie_detail_year{
        padding-right: 6px;
        font-size: 16px;
        color: #ff6200;
    }
    .mymovie_detail_moviename{
        padding-left: 10px;
        width: 130px;
        /*background-color: pink;*/
        overflow: hidden;
        font-size: 14px;
    }
    .mymovie_detail_moviename:hover{
        color: #00be06;
    }
    .mymovie_detail{
        height: 30px;
        width: 100%;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .mymovie_img:hover img{
        transform: scale(1.05,1.05);
    }
    .mymovie_img:hover{
        box-shadow: -1px 1px 4px #004006;
    }
    .mymovie_img{
        width: 100%;
        height: 260px;
        /*background-color: yellowgreen;*/
        overflow: hidden;
        transition: all 0.5s;
    }
    .myclassifydetail{
        padding: 0 120px;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /*height: 300px;*/
    }
    .mymovie {
        margin: 10px;
        display: block;
        background-color: #f8f8f8;
        width: 190px;
        height:320px;
        /*float: left;*/
        text-align: center;
    }

    .myclassify_type1 div:nth-child(2)::after{
        content: "";
        position: absolute;
        border-radius: 1px;
        width: 12px;
        height: 3px;
        background-color: #00be06;
        left: 50%;
        transform: translateX(-50%);
        bottom: 6px;
        z-index: 2;
    }
    .myclassify_type1 div:nth-child(2){
        font-size: 20px;
        color: #00be06;
    }
    .chooseactive{
        background-color: #efefef;
        color: #00be06;
        border-radius: 20px;
    }
    .myclassify_type2 div:hover{
        color: #00be06;
    }
    .myclassify_type2 div{
        padding: 0 10px;
        margin: 5px 8px;
        text-align: center;
        /*background-color: red;*/
        line-height: 26px;
        height: 26px;
        cursor: pointer;
        transition: all 0.2s;
    }
    .myclassify_type2{
        display: flex;
        flex-direction: row;
        /*line-height:36px;*/
        /*height: 36px;*/
        font-size: 14px;
        text-align: center;
        /*background-color: pink;*/
    }
    .myclassify_type1{
        display: flex;
        flex-direction: row;
        line-height: 50px;
        height: 50px;
        text-align: center;
    }
    .myclassify_type1 div{
        padding: 0 18px;
        position: relative;
    }
    .myclassify_type1 div:hover{
        color: #00be06;
        cursor: pointer;
    }
    .myclassify{
        padding: 10px 120px;
        background-color: #f8f8f8;
    }
    .mytitle2{
        background-color: #232325;
        color: #c4c4c4;
        height: 60px;
        line-height: 60px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .mytitle2 .mytitle_logo{
        width: 190px;
        margin-right: 50px;
        text-align: center;
        margin-left: 120px;
    }
    .mytitle2 .mytitle_logo img{
        display: block;
        padding: 12px 0px;
        max-height: 36px;
        width: auto;
    }
    .mytitle2 .mytitle_photo2{
        margin-left: 15px;
        width: 40px;
        padding-top: 8px;
    }
</style>
<script>
import backEndOptions from "@/assets/website";
    export default {
        data(){
            return{
                scroll: true,
                image:{
                    logoimg:require("../../image/title/logo.png"),
                    login2:require("../../image/title/login2.jpg"),
                },
                movieimg:[
                    require("../../image/movies/1.jpg"),
                    require("../../image/movies/2.jpg"),
                    require("../../image/movies/3.jpg"),
                    require("../../image/movies/4.jpg"),
                    require("../../image/movies/5.jpg"),
                    require("../../image/movies/6.jpg"),
                    require("../../image/movies/7.jpg"),
                    require("../../image/movies/8.jpg"),
                    require("../../image/movies/9.jpg"),
                    require("../../image/movies/10.jpg"),
                    require("../../image/movies/11.jpg"),
                    require("../../image/movies/12.jpg"),
                    require("../../image/movies/1.jpg"),
                    require("../../image/movies/2.jpg"),
                    require("../../image/movies/3.jpg"),
                    require("../../image/movies/4.jpg"),
                    require("../../image/movies/5.jpg"),
                    require("../../image/movies/6.jpg"),
                    require("../../image/movies/7.jpg"),
                    require("../../image/movies/8.jpg"),
                    require("../../image/movies/9.jpg"),
                    require("../../image/movies/10.jpg"),
                    require("../../image/movies/11.jpg"),
                    require("../../image/movies/12.jpg"),
                    require("../../image/movies/13.jpg"),
                    require("../../image/movies/14.jpg"),
                    require("../../image/movies/15.jpg"),
                    require("../../image/movies/16.jpg"),
                    require("../../image/movies/17.jpg"),
                    require("../../image/movies/18.jpg"),
                    require("../../image/movies/19.jpg"),
                    require("../../image/movies/20.jpg"),
                    require("../../image/movies/21.jpg"),
                    require("../../image/movies/22.jpg"),
                    require("../../image/movies/23.jpg"),
                    require("../../image/movies/24.jpg"),
                    require("../../image/movies/25.jpg"),
                    require("../../image/movies/26.jpg"),
                    require("../../image/movies/27.jpg"),
                    require("../../image/movies/28.jpg"),
                    require("../../image/movies/29.jpg"),
                    require("../../image/movies/30.jpg"),
                    require("../../image/movies/31.jpg"),
                    require("../../image/movies/32.jpg"),
                    require("../../image/movies/33.jpg"),
                    require("../../image/movies/34.jpg"),
                    require("../../image/movies/35.jpg"),
                    require("../../image/movies/36.jpg"),
                    require("../../image/movies/37.jpg"),
                    require("../../image/movies/38.jpg"),
                ],
                moviemessage:[
                ],
                mydata:{
                    movietypeNum: 0,
                    movieyearNum: 0,
                    moviepageNum: 0,
                },
                isfull: false,
                isonload: true,
            }
        },
        methods:{
            gotoabout(e){
                this.$router.push({path:'/about',query:{movie:e}});
            },
            gotohead(){
                this.$router.push({path:'/',query:{}});
            },
            changeyear(e){
                var that = this;
                if (e===this.mydata.movieyearNum){
                }else{
                  if (that.isonload===true){

                  }else {
                    that.isonload=true
                    var list = document.getElementsByClassName("classifyyearlist");
                    var mylist = list[0].children;
                    for (let i=0;i<mylist.length;i++){
                      mylist[i].className = "";
                    }
                    mylist[e].className = "chooseactive";
                    that.mydata.movieyearNum=e;
                    // console.log(this.mydata.movietypeNum+"------"+this.mydata.movieyearNum);

                    that.mydata.moviepageNum=0;

                    that.moviemessage=[];

                    axios.post("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/getmovielist/",that.mydata)
                        .then(function (response) {
                      let x = that.moviemessage.length;
                      if (response.data==null){
                        that.isfull=true;
                      }
                      else {
                        for (let i=0;i<response.data.length;i++){
                          that.moviemessage.push({
                            movieid: 0,
                            moviename: "",
                            published_year: 2021,
                            movietype: ""
                          });
                          that.moviemessage[x+i].movieid = response.data[i].movieid;
                          that.moviemessage[x+i].moviename = response.data[i].moviename;
                          that.moviemessage[x+i].published_year = response.data[i].published_year;
                          that.moviemessage[x+i].movietype = response.data[i].movietype;
                        }
                        that.mydata.moviepageNum++;
                      }
                      // console.log(that.moviemessage);
                    })
                        .finally(()=>{
                          this.isonload=false
                        })

                  }
                }
            },
            changetype(e){
                const that = this;
                if (e===this.mydata.movietypeNum){

                }
                else{
                  if (that.isonload===true){

                  }else {
                    that.isonload = true
                    const list = document.getElementsByClassName("classifytypelist");
                    var mylist = list[0].children;
                    for (let i=0;i<mylist.length;i++){
                      mylist[i].className = "";
                    }
                    mylist[e].className = "chooseactive";
                    that.mydata.movietypeNum=e;
                    that.mydata.moviepageNum=0;
                    that.moviemessage=[];
                    // console.log(this.mydata.movietypeNum+"------"+this.mydata.movieyearNum);
                    axios.post("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/getmovielist/",that.mydata)
                        .then(function (response) {
                      let x = that.moviemessage.length;
                      if (response.data == null) {
                        that.isfull = true;
                      } else {
                        for (let i = 0; i < response.data.length; i++) {
                          that.moviemessage.push({
                            movieid: 0,
                            moviename: "",
                            published_year: 2021,
                            movietype: ""
                          });
                          that.moviemessage[x + i].movieid = response.data[i].movieid;
                          that.moviemessage[x + i].moviename = response.data[i].moviename;
                          that.moviemessage[x + i].published_year = response.data[i].published_year;
                          that.moviemessage[x + i].movietype = response.data[i].movietype;
                        }
                        that.mydata.moviepageNum++;
                      }
                    })
                        .finally(()=>{
                          that.isonload = false
                        })
                  }

                }
            },
            handleSroll(){
                const that = this;
                var clientHeight = document.documentElement.clientHeight;
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                if (((clientHeight+scrollTop)>(scrollHeight-2))&&scrollTop>200){
                    if (!that.isfull){
                        if (!that.onload){
                          that.onload = true
                          axios.post("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/getmovielist/",this.mydata).then(function (response) {
                            let x = that.moviemessage.length;
                            if (response.data == null) {
                              that.isfull = true;
                            } else {
                              for (let i = 0; i < response.data.length; i++) {
                                that.moviemessage.push({
                                  movieid: 0,
                                  moviename: "",
                                  published_year: 2021,
                                  movietype: ""
                                });
                                that.moviemessage[x + i].movieid = response.data[i].movieid;
                                that.moviemessage[x + i].moviename = response.data[i].moviename;
                                that.moviemessage[x + i].published_year = response.data[i].published_year;
                                that.moviemessage[x + i].movietype = response.data[i].movietype;
                              }
                              that.mydata.moviepageNum++;
                            }
                          }).finally(()=>{
                            that.onload = false
                          })
                        }
                    }
                    // console.log(that.mydata);
                    // console.log(that.isonload);
                    // console.log(that.isfull);
                // window.onscroll = function () {
                //
                //     }
                // }
            }
        },
        },
        created() {
            // clearInterval(this.Polling);
            var movietypeid = this.$route.query.movietypeid;
            // console.log("movietypeid"+movietypeid);

            var that = this;
            setTimeout(function () {
                const list = document.getElementsByClassName("classifytypelist");
                var mylist = list[0].children;
                for (let i=0;i<mylist.length;i++){
                    mylist[i].className = "";
                }
                mylist[movietypeid].className = "chooseactive";
                that.mydata.movietypeNum=movietypeid;
                that.mydata.moviepageNum=0;


                // console.log(that.moviemessage)

                that.isonload = false;
                if (that.isfull===false){
                    // console.log(1)
                    that.isonload = true;
                    axios.post("http://"+backEndOptions.website+":"+backEndOptions.port+"/movie/getmovielist/",that.mydata)
                        .then(function (response) {
                        let x = that.moviemessage.length;
                        // console.log(x)
                        // console.log(response.data)
                        if (response.data == null) {
                            that.isfull = true;
                        } else {
                            for (let i = 0; i < response.data.length; i++) {
                                that.moviemessage.push({
                                    movieid: 0,
                                    moviename: "",
                                    published_year: 2021,
                                    movietype: ""
                                });
                                that.moviemessage[x + i].movieid = response.data[i].movieid;
                                that.moviemessage[x + i].moviename = response.data[i].moviename;
                                that.moviemessage[x + i].published_year = response.data[i].published_year;
                                that.moviemessage[x + i].movietype = response.data[i].movietype;
                            }
                            // console.log(that.moviemessage);
                            that.mydata.moviepageNum++;
                        }
                    })
                        .finally(()=>{
                          that.isonload = false;
                        })
                }

            },1000)


            // var that = this;

        },
        mounted () {
            // setInterval(,1000)
            window.addEventListener("scroll",this.handleSroll);
            // this.handleSroll()
            //  window.addEventListener("scroll",this.handleScroll)
        },


    }
</script>