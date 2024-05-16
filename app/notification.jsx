import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { Overlay, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.rightContainer}>
        <TouchableWithoutFeedback onPress={toggleOverlay}>
          <Image style={styles.dzwonek} source={require('../assets/Dzwonek.png')} />
        </TouchableWithoutFeedback>
      </View>

      <Overlay
        isVisible={isOverlayVisible}
        onBackdropPress={closeOverlay}
        overlayStyle={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.headerOvelayText}>Powiadomienia</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.line}/>
        </View>

        <View style={styles.notificationBox}>
          <View style={styles.rectangle}>
            <Text style={styles.notificationText}>Nowa Promocja w Barze Indeks</Text>
          </View>  

          <View style={styles.rectangle}>
            <Text style={styles.notificationText}>Żabka: Promocja!</Text>
          </View> 

          <View style={styles.rectangle}>
            <Text style={styles.notificationText}>Krzysztof rozpoczął wydarzenie</Text>
          </View> 

          <View style={styles.rectangle}>
            <Text style={styles.notificationText}>Lidl: Obniżka cen!</Text>
          </View> 
        </View>
      </Overlay>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 33,
    marginRight: 33,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  awatar: {
    width: 37,
    height: 50,
  },
  dzwonek: {
    width: 41,
    height: 48,
  },
  overlay: {
    width: '80%',
    alignItems: 'center',
    height: 415,
    borderRadius:20,
    backgroundColor:'#07BBF3',
  },

  headerOvelayText: {
    fontSize: 26,
    textAlign: 'center',
    color:'white',
  },

  line:{
    height: 2,
    width: 360,
    backgroundColor: 'black',
  
  },

  notificationBox:{
    height:338,
    width:360,
    backgroundColor:'#DCDADA',
    borderRadius:20,
    alignItems: 'center',
    marginTop:-10
  },

  notificationText:{
    fontSize: 20,
    textAlign: 'center',
    color:'black',
  },

  rectangle:{
    backgroundColor:'#FFFEFE',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    height:70,
    width:'90%',
    marginTop:10,
    borderRadius:5,
    elevation:5,
  }

});