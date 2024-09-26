<script>
import AppMainBottomBlogCard from './AppMainBottomBlogCard.vue';
export default {
  data() {
    return {
      infoCardsBlog:[
        {
            imgPath:'../assets/img/hip_hop_wired_to_dance_make.jpg',
            titlePost:'HIP HOP WIRED TO DANCE',
            linkPost:'#',
            imgName:'hip_hop_wired_to_dance_make',
            datePost:'06 November 2021',
            overview:'Driving short distances music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former',
        },
        {
            imgPath:'../assets/img/music_business-worldwide.jpg',
            titlePost:'Music Business Worldwide',
            linkPost:'#',
            imgName:'music_business-worldwide',
            datePost:'27 May  2022',
            overview:'Accelerate work and drive productivity The Beatles experimentation and creative freedom led other bands to experiment in various ways as well.',
        },
        {
            imgPath:'../assets/img/giveaways_rock.jpg',
            titlePost:'Giveaways Rock to All',
            linkPost:'#',
            imgName:'giveaways_rock',
            datePost:'07 May  2022',
            overview:'Signs Your Car Battery Has To Be Replaced When the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and',
        },   
        
        
        {
            imgPath:'../assets/img/drowned_in_sound_feel_joy.jpg',
            titlePost:'Drowned In Sound Feel Joy',
            linkPost:'#',
            imgName:'drowned_in_sound_feel_joy',
            datePost:'10 April  2022',
            overview:'Different Types of Music Content For most music creators, they take their work very seriously because of the emotional attachment they may harbor',
        },      
        {
            imgPath:'../assets/img/dancing_astronaut_bounce_ipsum.jpg',
            titlePost:'Dancing Astronaut Bounce Ipsum',
            linkPost:'#',
            imgName:'dancing_astronaut_bounce_ipsum',
            datePost:'01 March  2022',
            overview:'Music Promotion Channels There are really a lot of music promotion channels out there. Being a music promotion channel involves a lot of work and',
        },      
        {
            imgPath:'../assets/img/consequence_of_sound_make_us.jpg',
            titlePost:'Consequence of Sound Make us',
            linkPost:'#',
            imgName:'consequence_of_sound_make_us',
            datePost:'14 February  2022',
            overview:"Electronic Dance Music Rhythm and Blues Before this, R & B was known as 'race music,' a term that originated in the African American",
        },      
        {
            imgPath:'../assets/img/artist_development_and_production.jpg',
            titlePost:'Artist Development and Production',
            linkPost:'#',
            imgName:'artist_development_and_production',
            datePost:'07 December  2021',
            overview:"Characterised by its own beat patterns, the lyrics feature what is often extreme violence snd talk of criminal acts. As a result, there's been",
        },      
      ],
            
    }
  },
  components:{
    AppMainBottomBlogCard
  },
 

}
</script>

<template>
  <div class="row-blog">
    <AppMainBottomBlogCard 
    v-for="(cardItem,index) in infoCardsBlog" :key="index"
    :cardInfo = "cardItem"/>
  </div>
</template>

<style lang="scss" scoped>
.row-blog{
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
</style>