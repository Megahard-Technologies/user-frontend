import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView style={styles.backgound}>
      <View>
        <Text style={styles.textNagl}>Zadania</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squere} />
        <Text style={styles.text}>Kolokwium z AM2</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squere} />
        <Text style={styles.text}>W piątek nie ma wykładu</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squere} />
        <Text style={styles.text}>Praca domowa SO1</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squere} />
        <Text style={styles.text}>Zrobić Bufor Cykliczny</Text>
      </View>

      <View style={styles.break} />

      <View style={styles.row}>
        <Image style={styles.arrow} source={require('../assets/Arrow.png')} />
        <Text style={{ fontSize: 26 }}> Zrobione</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squereDone}>
          <Image style={styles.okIcon} source={require('../assets/Vector.png')} />
        </View>
        <Text style={styles.textDone}>Zrobić Bufor Cykliczny</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squereDone}>
          <Image style={styles.okIcon} source={require('../assets/Vector.png')} />
        </View>
        <Text style={styles.textDone}>Odmrozić kurczaka</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squereDone}>
          <Image style={styles.okIcon} source={require('../assets/Vector.png')} />
        </View>
        <Text style={styles.textDone}>Praca Domowa PP2</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squereDone}>
          <Image style={styles.okIcon} source={require('../assets/Vector.png')} />
        </View>
        <Text style={styles.textDone}>Kolokwium AiSD</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.squereDone}>
          <Image style={styles.okIcon} source={require('../assets/Vector.png')} />
        </View>
        <Text style={styles.textDone}>Sprawozdanie PEiE</Text>
      </View>

      <View style={styles.addButtonField}>

        <View style={styles.addButton}>
          <View style={styles.row}>
            <Image source={require('../assets/Plus.png')} />
            <Text style={styles.textButton}>Dodaj Zadanie</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default index

const styles = StyleSheet.create({
  backgound: {
    backgroundColor: '#DCDADA',
  },
  break: {
    height: 50,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textNagl: {
    fontSize: 26,
    marginLeft: 25,
    marginBottom: 10
  },
  text: {
    fontSize: 26,
    marginLeft: 10,
    marginTop: 4,
  },
  textDone: {
    fontSize: 26,
    marginLeft: 10,
    marginTop: 4,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  textButton:{
    fontSize: 26,
    marginLeft: 10,
  },
  box: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  squere: {
    justifyContent: 'center',
    height: 33,
    width: 33,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 6,
    marginLeft: 10
  },
  squereDone: {
    justifyContent: 'center',
    height: 33,
    width: 33,
    borderRadius: 5,
    backgroundColor: '#29E252',
    marginTop: 6,
    marginLeft: 10,
  },
  arrow: {
    marginLeft: 25,
    marginRight: 10,
  },
  okIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addButtonField: {
    backgroundColor: '#DCDADA',
    width: '100%',
    height: 115,
    marginTop: 10,
  },
  addButton: {
    width: 250,
    height: 60,
    backgroundColor: '#EDECEC',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
  }
})