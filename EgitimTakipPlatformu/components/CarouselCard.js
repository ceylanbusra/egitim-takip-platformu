import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Dimensions, Image,Text,View } from "react-native"

// imports a package that will be used to create the carousel component.
import Carousel, { Pagination } from 'react-native-snap-carousel'



// To make doctor tab responsive, gets window info.
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)



const CarouselCards = () => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const [dataa, setDataa] = useState([]);
  const [id,setId]=useState(null);
  const data=[
    {
      id:"1",
        first_name:"Büşra",
        last_name: "Ceylan",
        role: "Danışman",
        profile_photo: require("../assets/girlProfile.png")
      },
      {
        id:"2",
        first_name:"Döndü",
        last_name: "Ceylan",
        role: "Danışman",
       profile_photo: require("../assets/profile.jpg")
      },
      {
        id:"3",
        first_name:"Fatma",
        last_name: "Ceylan",
        role: "Danışman",
      profile_photo: require("../assets/profil.jpg")
      },
      {
        id:"4",
        first_name:"Ayşe",
        last_name: "Ceylan",
        role: "Danışman",
      profile_photo: require("../assets/profil.jpg")
      },

  ]

  

  return (
    <View>
      <Carousel
        layout = "default"
        
        ref = { isCarousel }
        data = { data }
        
        
        renderItem = {({item}) => (
          

          <View style={styles.mainContainer}>
            <View style = { styles.container } >
            <Image
                source = {item.profile_photo }
                style={styles.image}
            />
            <Text style = { styles.name }>{ item.first_name }{' '}{ item.last_name }</Text>
            <Text style = { styles.profession }>{ item.role }</Text>
            <Text style = { styles.profession }>{ item.id }</Text>
            </View>
          </View>
         
        )}
        sliderWidth = { SLIDER_WIDTH  }
        itemWidth = { ITEM_WIDTH  }
        inactiveSlideShift = { 0 }
        useScrollView = { true }
        onSnapToItem = {(index) => setIndex(index)}
        
        loop = { true }
        firstItem = { 1 }
       inactiveSlideScale = { 0.9 }
        inactiveSlideOpacity = { 0.9 }
      
        initialNumToRender = { data.length }
        loopClonesPerSide = { data.length }
      />
      <Pagination
        dotsLength = { data.length }
        activeDotIndex = { index }
        carouselRef = { isCarousel }
        dotStyle = {{
          width : 8,
          height : 8,
          borderRadius : 4,
          marginHorizontal : -4,
          backgroundColor : 'rgba(0, 0, 0, 0.6)'
        }}
        inactiveDotOpacity = { 0.33 }
        inactiveDotScale = { 1 }
        tappableDots = { true }
      />
    </View>

  )
}

// Styles of the carousel view components : photo as image, name and profession as text.
const styles = StyleSheet.create({
  mainContainer:{
    
  },
  container: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor :'blue',
    borderRadius : 12,
    paddingBottom : 7,
    width : ITEM_WIDTH,
    height:ITEM_WIDTH*1.3,
    
  },
  image: {
    width : ITEM_WIDTH*0.7,
    height:ITEM_WIDTH*0.7,
    resizeMode:'stretch',
    

    borderTopLeftRadius : 12,
    borderTopRightRadius : 12,
  },
  name: {
    color : 'black',
    fontSize : 20,
    paddingLeft : 12,
    paddingTop : 12,
    
  
    
  },
  profession: {
    color : '#f0f0f0',
    fontSize : 20,
    paddingLeft : 12,
  }
})

export default CarouselCards;