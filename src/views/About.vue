<template>
    <div class="totalBody">
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
        <div class="myvideo">
            <div class="myvideo_myscreen">
                <div class="myvideo_myscreen_video">
                    <div class="myvideo_myscreen_video_div">
                        <video width="100%" height="100%" id="videoplayer">
                            <source src="../../video/videoDemo.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="myvideo_myscreen_video_operation">
                    <div class="myprogressBar">
                        <div class="myprogressBar_out">
                            <div class="myprogressBar_bar"></div>
                        </div>
                    </div>
                    <div class="myvideo_myscreen_video_operationleft">
                        <div class="playDiv mouseover" @click="playbutton"
                             @mouseover="playmouseover" @mouseleave="playmouseleave">
                            <div :hidden="play.isPlay==1">
                                <img :src="image.play0" :hidden="play.isMove==1">
                                <img :src="image.play1" :hidden="play.isMove==0">
                            </div>
                            <div :hidden="play.isPlay==0">
                                <img :src="image.playing0" :hidden="play.isMove==1">
                                <img :src="image.playing1" :hidden="play.isMove==0">
                            </div>
                        </div>
                        <div class="timeDiv">
                            <div>{{videotime.videocurrenttime}}</div>
                            <div>/</div>
                            <div>{{videotime.videototaltime}}</div>
                        </div>
                    </div>
                    <div class="myvideo_myscreen_video_operationright">
                        <div class="allscreenDiv mouseover" @click="allscreenbutton"
                             @mouseover="screenfullover" @mouseleave="screenfullleave">
                            <img :src="image.allscreen0" :hidden="screenFull.isMove==1">
                            <img :src="image.allscreen1" :hidden="screenFull.isMove==0">
                        </div>
                        <div class="speedDiv mouseover">
                            <div>{{playspeed}}</div>
                            <div class="chooseSpeed">
                                <div class="SpeedItem" @click="changespeed(0.75)">0.75X</div>
                                <div class="SpeedItem speedactive" @click="changespeed(1.0)">1.0X</div>
                                <div class="SpeedItem" @click="changespeed(1.25)">1.25X</div>
                                <div class="SpeedItem" @click="changespeed(1.5)">1.5X</div>
                                <div class="SpeedItem" @click="changespeed(2.0)">2.0X</div>
                            </div>
                        </div>
<!--                        <div class="mouseover"></div>-->
                    </div>
                </div>
            </div>
            <div class="myvideo_detail">
                <div class="myvideo_detail_titledetail">
                    <div>{{aboutmovie.moviename}}</div>
                    <div>{{aboutmovie.published_year}}</div>
                </div>
                <div class="myvideo_detail_otherdetail">
                    <div>简介</div>
                    <div>热度</div>
                    <div>{{aboutmovie.movietype}}</div>
                </div>
            </div>
        </div>
        <div class="">
            <div></div>
            <div></div>
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
.totalBody{
  width: 1519px;
}
    .myvideo_detail_otherdetail>div:nth-child(1){
        margin-right: 60px;
        /*background-color: yellowgreen;*/
    }
    .myvideo_detail_otherdetail>div:nth-child(2){
        margin-right: 60px;
        /*background-color: hotpink;*/
    }
    .myvideo_detail_otherdetail>div:nth-child(3){
        /*width: 200px;*/
        overflow: hidden;
        /*background-color: deepskyblue;*/
    }
    .myvideo_detail_otherdetail div{
        color: #989898;
        font-size: 14px;
    }
    .myvideo_detail_otherdetail>div:hover{
        cursor: pointer;
        color: #00be06;
    }
    .myvideo_detail_titledetail>div:nth-child(2){
        color: #ed702e;
        font-size: 16px;
        width: 60px;
        /*background-color: pink;*/
    }
    .myvideo_detail_titledetail>div:nth-child(1){
        font-size: 24px;
        font-family: songti;
        max-width: 300px;
        margin-right: 40px;
        overflow: hidden;
        color: #babbbd;
        /*background-color: darkblue;*/
    }
    .myvideo_detail_titledetail{
        height: 50px;
        line-height: 50px;
    }
    .myvideo_detail_otherdetail{
        height: 36px;
        /*line-height: 50px;*/
    }
    .myvideo_detail_otherdetail,
    .myvideo_detail_titledetail{
        display: flex;
        flex-direction: row;
    }
    .myvideo_detail{
        padding: 0 200px;
    }
    .myvideo{
        background-color: #232325;
        padding-top : 20px;
        padding-bottom : 20px;
        width: 100%;
        height: 706px;
    }
    .myprogressBar{
        position: absolute;
        left: 0;
        top: 10px;
        /*background-color: yellowgreen;*/
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: column-reverse;
    }
    .myprogressBar:hover .myprogressBar_out{
        height: 14px;
        cursor: pointer;
    }
    .myprogressBar_out{
        background-color: #404040;
        width: 100%;
        height: 2px;
        margin-bottom: 10px;
        transition: all 0.5s;
    }
    .myprogressBar_bar{
        background-color: #ffcc89;
        height: 100%;
        width: 0%;
        transition: all 0.5s;
    }
/*<!--  播放速度  -->*/
    .chooseSpeed .speedactive:hover{
        color: #00be06;
    }
    .chooseSpeed .speedactive{
        color: #00be06;
    }
    .chooseSpeed{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -240px;
        padding: 10px 0px;
        background-color: rgba(37,37,37,0.8);
        width: 120px;
        border-radius: 10px;
        opacity: 0;
    }
    .SpeedItem{
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #dddddd;
        font-size: 14px;
        transition: font-size 0.5s,
                 color 0.5s;
    }
    .SpeedItem:hover{
        font-size: 16px;
        color: white;
    }
    .speedDiv:hover div{
        opacity: 1;
    }
    .speedDiv{
        /*background-color: green;*/
        line-height: 30px;
        padding: 0 20px;
        color: #dddddd;
        position: relative;
    }
    .allscreenDiv img{
        width: 60%;
        height: 60%;
        margin: auto 0;
    }
    .allscreenDiv{
        margin: 0px 10px;
        width: 30px;
        height: 30px;
        /*background-color: yellowgreen;*/
        display: flex;
        justify-content: center;
    }
    .myvideo_myscreen_video_operationright{
        display: flex;
        flex-direction: row-reverse;
        position: absolute;
        right: 10px;
        bottom: 10px;
        height: 30px;
        /*background-color: red;*/
    }
    /*---时间----*/
    .timeDiv div:nth-child(1){
        color: white;
    }
    .timeDiv div{
        color: #dddddd;
    }
    .timeDiv div:nth-child(1){
        color: white;
    }
    .timeDiv{
        display: flex;
        flex-direction: row;
        /*background-color: green;*/
        line-height: 30px;
        padding: 0 20px;
    }
    .mouseover:hover{
        cursor: pointer;
    }
    .myvideo_myscreen_video_operationleft{
        position: absolute;
        left: 10px;
        bottom: 10px;
        height: 30px;
        /*background-color: red;*/
        display: flex;
        flex-direction: row;
    }
    /*-----播放------*/
    .playDiv div{
        height: 100%;
        width: 100%;
    }
    .playDiv div img{
        height: 100%;
        /*width: 100%;*/
    }
    .playDiv{
        margin: 0px 10px;
        width: 30px;
        height: 30px;
        /*background-color: yellowgreen;*/
        z-index: 2;
    }
    .myvideo_myscreen_video_operation{
        position: absolute;
        height: 80px;
        /*background-color: pink;*/
        left: 0;
        bottom: -80px;
        width:100%;
        transition: all 0.2s;
        justify-content: space-around;
    }
    .myvideo_myscreen_video_div{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .myvideo_myscreen_video video{
        object-fit: fill;
    }
    .myvideo_myscreen_video{
        /*background-color: orange;*/
        height: 100%;
        /*position: relative;*/
    }
    .myvideo_myscreen:hover .myvideo_myscreen_video_operation{
        transform: translateY(-100%);
    }
    .myvideo_myscreen{
        background-color: black;
        margin: 0px 200px;
        height: 480px;
        padding-top: 80px;
        padding-bottom: 80px;
        position: relative;
        overflow: hidden;
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
    /*头像*/
    .mytitle2 .mytitle_photo2{
        margin-left: 15px;
        width: 40px;
        padding-top: 8px;
    }
</style>
<script>
    export default {
        data(){
            return{
                image:{
                    logoimg:require("../../image/title/logo.png"),
                    login2:require("../../image/title/login2.jpg"),
                    allscreen0:require("../../image/video/allscreen0.png"),
                    allscreen1:require("../../image/video/allscreen1.png"),
                    play0:require("../../image/video/play0.png"),
                    play1:require("../../image/video/play1.png"),
                    playing0:require("../../image/video/playing0.png"),
                    playing1:require("../../image/video/playing1.png"),
                },
                play:{
                  isPlay:0,
                  isMove:0,
                },
                screenFull:{
                    isMove:0,
                },
                playspeed : "倍速",
                videotime:{
                    videototaltime:"XX:XX:XX",
                    videocurrenttime:"XX:XX",
                },
                aboutmovie:{
                    moiveid: 1,
                    moviename: "片名",
                    published_year: 2021,
                    movietype:  "类型"
                }
            }
        },

        created() {
            const movie = this.$route.query.movie;
            // console.log(movie);
            this.aboutmovie = movie;
            setTimeout(function () {
                // console.log("scrollTop:"+document.documentElement.scrollTop)
                // console.log("clientHeight:"+document.documentElement.clientHeight)
                // console.log("scrollHeight:"+document.documentElement.scrollHeight)
                document.documentElement.scrollTop=0;
            })

        },
        methods:{
            gotohead(){
                this.$router.push({path:'/',query:{}});
            },
            totaltime(){
                const that = this;
                var thevideo = document.getElementById("videoplayer");
                setTimeout(function () {
                    let time = parseInt(thevideo.duration);
                    let hour = parseInt(time/3600);
                    let minute = parseInt(time/60)-hour*60;
                    let second = time%60;
                    if (hour<10){
                        hour="0"+hour;
                    }
                    if (minute<10){
                        minute="0"+minute;
                    }
                    if (second<10){
                        second="0"+second;
                    }
                    that.videotime.videototaltime=hour+":"+minute+":"+second;
                },1000)
            },
            changespeed(e){
                const list = document.getElementsByClassName("SpeedItem");
                var thevideo = document.getElementsByTagName('video')[0];
                switch (e) {
                    case 0.75:
                        if (!(this.playspeed=="0.75X")){
                            const pastactive = document.getElementsByClassName("SpeedItem speedactive")[0];
                            pastactive.className="SpeedItem";
                            list[0].className= "SpeedItem speedactive";
                            thevideo.playbackRate = 0.75;
                            this.playspeed = "0.75X";
                        }
                        break;
                    case 1.0:
                        if (!(this.playspeed=="倍速")){
                            const pastactive = document.getElementsByClassName("SpeedItem speedactive")[0];
                            pastactive.className="SpeedItem";
                            list[1].className= "SpeedItem speedactive";
                            thevideo.playbackRate = 1.0;
                            this.playspeed = "倍速";
                        }
                        break;
                    case 1.25:
                        if (!(this.playspeed=="1.25X")){
                            const pastactive = document.getElementsByClassName("SpeedItem speedactive")[0];
                            pastactive.className="SpeedItem";
                            list[2].className= "SpeedItem speedactive";
                            thevideo.playbackRate = 1.25;
                            this.playspeed = "1.25X";
                        }
                        break;
                    case 1.5:
                        if (!(this.playspeed=="1.5X")){
                            const pastactive = document.getElementsByClassName("SpeedItem speedactive")[0];
                            pastactive.className="SpeedItem";
                            list[3].className= "SpeedItem speedactive";
                            thevideo.playbackRate = 1.5;
                            this.playspeed = "1.5X";
                        }
                        break;
                    default:
                        if (!(this.playspeed=="2X")){
                            const pastactive = document.getElementsByClassName("SpeedItem speedactive")[0];
                            pastactive.className="SpeedItem";
                            list[4].className= "SpeedItem speedactive";
                            thevideo.playbackRate = 2.0;
                            this.playspeed = "2X";
                        }
                        break;
                }
            },
            allscreenbutton(){

            },
            playmouseover(){
              this.play.isMove=1
            },
            playmouseleave(){
                this.play.isMove=0
            },
            screenfullover(){
                this.screenFull.isMove=1
            },
            screenfullleave(){
                this.screenFull.isMove=0
            },
            playbutton(){
                var thevideo = document.getElementsByTagName('video')[0];
                if (thevideo.paused){
                    thevideo.play();
                    this.play.isPlay=1;
                }else{
                    thevideo.pause();
                    this.play.isPlay=0;
                }
            }
        },
        mounted() {
            this.totaltime();
            const that = this;
            var thevideo = document.getElementById("videoplayer");
            var thebar = document.getElementsByClassName("myprogressBar_bar")[0];
            setInterval(function () {
                const currentTime = parseInt(thevideo.currentTime);
                const thebarwidth = parseInt(((thevideo.currentTime)/(thevideo.duration))*100)+"%";
                thebar.style.width = thebarwidth;
                if (thebarwidth=="100%"){
                    that.play.isPlay = 0;
                }
                var hour = parseInt(currentTime/3600);
                var minute = parseInt(currentTime/60)-hour*60;
                var second = currentTime%60;
                if (hour==0){
                    if (minute<10){
                        if (second<10){
                            that.videotime.videocurrenttime = "0"+minute+":"+"0"+second;
                        }else{
                            that.videotime.videocurrenttime = "0"+minute+":"+second;
                        }
                    }else{
                        if (second<10){
                            that.videotime.videocurrenttime = minute+":"+"0"+second;
                        }else{
                            that.videotime.videocurrenttime = minute+":"+second;
                        }
                    }
                }else{
                }
                if (thebar.style.width=="100%"){
                    thebar.style.width="0%"
                }
            },100);
        }
    }
</script>