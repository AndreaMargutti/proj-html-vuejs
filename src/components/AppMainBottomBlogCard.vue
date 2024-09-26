<script>
export default {
  data() {
    return {
    }
  },
  props:{
    cardInfo:{
        type: Object,
        required:true
    }
  },
  methods:{
        getImgBlogPath(simplePath){
        const blogPath = new URL( simplePath, import.meta.url).href;
        return blogPath;
        }
    }
}
</script>

<template>
    <div class="col-blog">
        <div class="card">
            <div class="box-img-blog">
                <img :src="getImgBlogPath(cardInfo.imgPath)" :alt="cardInfo.imgName">
            </div>
            <h3>
                <a :href="cardInfo.linkPost"> {{ cardInfo.titlePost }}</a>
            </h3>
            <div class="date-blog">
                <i class="fa-regular fa-calendar-days"></i>
                <span>{{ cardInfo.datePost }}</span>
            </div>
            <div class="article-blog">
                <p> {{ cardInfo.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:#f2870c;
$secondarycolor:white;
.col-blog{
    width: calc(100% / 3);

    .card{
        height: 500px;
        background-color: black;
        color: $secondarycolor;
        padding: 10px 15px;

        .box-img-blog{
            height: 300px;
            overflow: hidden;

            img{
                width: 100%;
                height: auto;
                transition: transform 0.4s;
            }
            img:hover{
                transform: scale(1.05);
            }
           
        }
        a{
            text-decoration: none;
            color: $secondarycolor;
        }
        a:hover{
            color:$maincolor;
        }
        .date-blog{
            color: $maincolor;
            padding: 10px 0;

            .fa-calendar-days{
                padding-right: 10px;
            }

        }
    }

}
</style>