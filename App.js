import React ,{useState,useEffect} from 'react'

import {View,Text,StyleSheet,Modal, Button} from 'react-native'
import Constants from 'expo-constants'



function App(){
  const [joke,setJoke] = useState("")
   const getJoke = async ()=>{
     const res = await fetch("http://api.icndb.com/jokes/random?firstName=sarthak&lastName=bajpai")
     const result = await res.json()
     setJoke(result.value.joke)
   }

   useEffect(()=>{
     getJoke()
   },[])
    return (
      <View style={{paddingTop:30}}>
        <Text>Jokes App by sarthak</Text>
        <Button
        title="get joke"
        onPress={()=>getJoke()}
        />
        {joke ? <Text>{joke}</Text>:null}
      </View>
    )
  }

export default App 