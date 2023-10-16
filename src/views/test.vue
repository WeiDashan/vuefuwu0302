<template>
    <div>
        <el-button @click="getmovielist">按钮</el-button>
        <div class="aaa">

        </div>
        <div class="abc" v-for="(item,i) in moviemessage">
            <div>{{item.movieid}}</div>
        </div>
    </div>

</template>
<style>
    .aaa{
        height: 1000px;
        background-color: pink;
    }
    .abc{
        display: flex;
        float: left;
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
    }
</style>
<script>
    export default {
        name: "test.vue",
        data(){
            return{
                mydata:{
                    movietypeNum: 3,
                    movieyearNum: 3,
                    moviepageNum: -1,
                },
                moviemessage: [
                ],
            }
        },
        methods:{

            getmovielist(){
                this.mydata.moviepageNum++;
                const that = this;
                axios.post("http://localhost:8181/movie/getmovielist/",this.mydata).then(function (response) {
                    let x = that.moviemessage.length;
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
                    console.log(that.moviemessage);

                })
            },
            testmethod(){
                const that = this;
                var clientHeight = document.documentElement.clientHeight;
                var scrollTop = document.documentElement.scrollTop;
                var scrollHeight = document.documentElement.scrollHeight;
                if (parseInt(clientHeight+scrollTop)>parseInt(scrollHeight-2)){
                    console.log(scrollTop)
                }
            }
        },
        mounted() {
            window.addEventListener("scroll",this.testmethod);
        }
    }
</script>

