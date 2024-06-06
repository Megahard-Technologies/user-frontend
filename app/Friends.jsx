import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
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

      <View style={styles.fill} />
      <Overlay
        isVisible={isOverlayVisible}
        onBackdropPress={closeOverlay}
        overlayStyle={styles.overlayStyle}
      >

        <Text style={styles.headerOvelayTextAction}>Znajomy</Text>
        <View style={styles.notificationBox}>
            <View style={styles.rectangleOverlay}>
              <Text style={styles.notificationText}>Usuń z grona znajomych</Text>
            </View>
            <View style={styles.rectangleOverlay}>
              <Text style={styles.notificationTextZglos}>Zgłoś</Text>
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
  headerOvelayTextAction: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },
  fill: {
    backgroundColor: '#DCDADA',
    height: 450,
  },
  overlayStyle: {
    width: '75%',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#07BBF3',
  },
  notificationBox: {
    borderTopWidth: 2,
    borderTopColor: 'black',
    paddingBottom: 10,
    marginBottom: -10,
    width: '106%',
    backgroundColor: '#DCDADA',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  headerOvelayText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 10,
  },
  notificationText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
  notificationTextZglos: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
  rectangleOverlay: {
    backgroundColor: '#FFFEFE',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    marginTop: 10,
    borderRadius: 5,
    elevation: 5,
  }
})