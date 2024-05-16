import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { Overlay, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


const index = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.tekstNagl}>Znajomi</Text>

      <TouchableWithoutFeedback onPress={toggleOverlay}>
        <View style={styles.rectangle}>
          <View style={styles.row}>

            <Image style={styles.photo} source={require('../assets/JanKowalski.png')} />
            <Text style={styles.tekstImie}>Jan Kowalski</Text>

          </View>
        </View>
      </TouchableWithoutFeedback>


      <TouchableWithoutFeedback onPress={toggleOverlay}>
        <View style={styles.rectangle}>
          <View style={styles.row}>
            <Image style={styles.photo} source={require('../assets/HannaHanke.png')} />
            <Text style={styles.tekstImie}>Hanna Hanke</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleOverlay}>
        <View style={styles.rectangle}>
          <View style={styles.row}>
            <Image style={styles.photo} source={require('../assets/WeronikaSkora.png')} />
            <Text style={styles.tekstImie}>Weronika Skóra</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleOverlay}>
        <View style={styles.rectangle}>
          <View style={styles.row}>
            <Image style={styles.photo} source={require('../assets/SylwesterSuski.png')} />
            <Text style={styles.tekstImie}>Sylwester Suski</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={toggleOverlay}>
        <View style={styles.rectangle}>
          <View style={styles.row}>
            <Image style={styles.photo} source={require('../assets/MiroslawFuga.png')} />
            <Text style={styles.tekstImie}>Mirosław Fuga</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.fill}/>
      <Overlay
        isVisible={isOverlayVisible}
        onBackdropPress={closeOverlay}
        overlayStyle={styles.overlayAction}
      >
        <View style={styles.containerAction}>
          <Text style={styles.headerOvelayTextAction}>Znajomy</Text>
        </View>

        <View style={styles.containerAction}>
          <View style={styles.lineAction} />
        </View>

        <View style={styles.notificationBoxAction}>
          <View style={styles.rectangleAction}>
            <Text style={styles.notificationTextAction}>Usuń z grona znajomych</Text>
          </View>

          <View style={styles.rectangleAction}>
            <Text style={styles.notificationTextAction}>Obserwuj</Text>
          </View>

          <View style={styles.rectangleAction}>
            <Text style={styles.notificationTextRedAction}>Zgłoś</Text>
          </View>
        </View>
      </Overlay>

    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#DCDADA',
  },

  tekstNagl: {
    marginLeft: 25,
    marginBottom: 15,
    fontSize: 26,
  },

  tekstImie: {
    fontSize: 26,
  },

  rectangle: {
    width: '90%',
    height: 70,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  photo: {
    marginLeft: 10,
    marginRight: 10,
  },

  containerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 33,
    marginRight: 33,
  },

  overlayAction: {
    width: '80%',
    alignItems: 'center',
    height: 325,
    borderRadius: 20,
    backgroundColor: '#07BBF3',
  },

  headerOvelayTextAction: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },

  lineAction: {
    height: 2,
    width: 360,
    backgroundColor: 'black',
  },

  notificationBoxAction: {
    height: 250,
    width: 360,
    backgroundColor: '#DCDADA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginTop: -10
  },

  notificationTextAction: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },

  notificationTextRedAction: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },

  rectangleAction: {
    backgroundColor: '#FFFEFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: '90%',
    marginTop: 10,
    borderRadius: 5,
    elevation: 5,
  },

  fill:{
    backgroundColor: '#DCDADA',
    height:450,
  }

})