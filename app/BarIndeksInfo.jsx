import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { AirbnbRating, Rating } from 'react-native-ratings';

const index = () => {
  const ratingCompleted = (Rating) => {
    console.warn("Rating is: " + Rating)
  };

  return (
    <ScrollView>
    <SafeAreaView >
      
        <Text style={styles.textNagl}>BAR INDEKS</Text>

        <View style={styles.rectangle1}>
          <Text style={styles.textRectglWhite}>BILARD 1 GODZINA 20ZŁ</Text>
        </View>

        <View style={styles.rectangle2}>
          <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Godzina bilarda w cenie 20 zł
          </Text>

          <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Cena regularna 30 zł.</Text>
          <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Promocja dostępna w godzinach
            14-23 za okazaniem legitymacji
            stydenckiej
          </Text>
        </View>

        <View style={styles.lineGray} />

        <View style={styles.rectangle3}>
          <Text style={styles.textRectglBlack}>Bar INDEKS</Text>
          <Text style={styles.textRectglBlack}>Aleja Politechniki 17</Text>
          <Text style={styles.textRectglBlack}>90-537 Łódź</Text>
        </View>

        <View style={styles.rectangle4}>
          <Text style={styles.textRectglBlack}>Godziny otwarcia</Text>

          <View style={styles.row}>
            <Text style={styles.textRectglBlack}>Poniedziałek</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 10:00-00:00</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Wtorek</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 10:00-00:00</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Środa</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 10:00-00:00</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Czwartek</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 10:00-01:30</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Piątek</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 10:00-02:00</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglBlack, { marginLeft: 10 }]}>Sobota</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 12:00-02:00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textRectglBlack}>Niedziela</Text>
            <Text style={[styles.textRectglBlack, { marginLeft: 'auto' }, { marginRight: 15 }]}> 12:00-00:00</Text>
          </View>
        </View>

        <View style={styles.rectangle5}>
          <Text style={styles.textRectglBlack}>MENU:</Text>
          <Text style={styles.textRectglBlack}>Piwo 333ml - 8zł:</Text>
          <Text style={styles.textRectglBlack}>Shot 50ml - 5zł:</Text>
          <Text style={styles.textRectglBlack}>Pizza 40cm - 40zł:</Text>
          <Text style={styles.textRectglBlack}>Frytki 200gr - 25zł:</Text>
        </View>

        <View style={styles.lineGray} />

        <View style={styles.rectangle6}>
          <View style={styles.row}>
            <Text style={styles.textRectglWhite}>Ocena:</Text>
            <Rating
              readonly={true}
              showRating={false}
              onFinishRating={ratingCompleted}
              style={{ marginLeft: 10 ,backgroundColor: '#0DA5D5' }}
              tintColor='#0DA5D5'
              imageSize={35}
              startingValue={4}
            />
          </View>

          <View style={styles.row}>
            <Text style={[styles.textRectglWhite, { marginBottom: 10 }]}>Twoja ocena:</Text>
            <Rating
              showRating={false}
              onFinishRating={ratingCompleted}
              style={{ marginLeft: 10}}
              tintColor='#0DA5D5'
              imageSize={35}
              startingValue={0}
            />


          </View>

          <View style={styles.lineBlack} />

          <View style={styles.rectangle6Middle}>
            <View style={styles.rectangle6WriteCom}>
              <TextInput style={styles.rectangle6TextInput} placeholder='Napisz komentarz' />
            </View>


            <View style={styles.row}>
              <View style={styles.anulujZapiszBox}>
                <Text style={styles.anulujZapiszText}> Anuluj</Text>
              </View>

              <View style={styles.anulujZapiszBox}>
                <Text style={styles.anulujZapiszText}> Zapisz</Text>
              </View>
            </View>
          </View>

          <View style={styles.lineBlack} />

          <View style={styles.rectangle6Last}>
            <View style={styles.rectangle6Com}>
              <Text style={[{ fontSize: 20 }, { fontWeight: 'bold' }, { marginLeft: 10 }]}>Jan Kowalski</Text>
              <Text style={[{ fontSize: 20 }, { marginLeft: 10 }]}>Bardzo fajne miejsce. Polecam serdecznie.</Text>
            </View>
          </View>
        </View>

        <View style={styles.rectangleWarnign}>
          <Text style={styles.rectangleWarnignText}>Zgłoś</Text>
        </View>


      
    </SafeAreaView>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#DCDADA',
  },

  lineGray: {
    borderWidth: 1,
    borderColor: '#626262',
    elevation: 5,
    marginBottom: 10,
  },

  lineBlack: {
    borderWidth: 1,
    borderColor: 'black',
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },

  textNagl: {
    fontSize: 26,
    marginLeft: 25,
    marginBottom: 10,
  },

  textRectglWhite: {
    fontSize: 26,
    color: 'white',
    marginLeft: 10,
  },

  textRectglBlack: {
    fontSize: 26,
    color: 'black',
    marginLeft: 10,
  },

  rectangle1: {
    width: '70%',
    height: 50,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  rectangle2: {
    width: '90%',
    height: 210,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  rectangle3: {
    width: '90%',
    height: 130,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  rectangle4: {
    width: '90%',
    height: 300,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    elevation: 5,
    marginBottom: 15,
  },

  rectangle5: {
    width: '90%',
    height: 190,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    elevation: 5,
    marginBottom: 15,
  },

  rectangle6: {
    width: '90%',
    height: 330,
    backgroundColor: '#0DA5D5',
    borderRadius: 10,
    marginLeft: 25,
    elevation: 5,
    marginBottom: 300,
  },

  rectangle6Middle: {
    width: 404,
    height: 170,
    backgroundColor: '#CAC7C7',
  },

  rectangle6WriteCom: {
    width: '95%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 10,
  },

  rectangle6TextInput: {
    height: 40,
    width: '100%',
    fontSize: 26,
  },

  anulujZapiszBox: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 20,
    width: 150,
    height: 35,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },

  anulujZapiszText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  rectangle6Last: {
    width: 404,
    height: 120,
    backgroundColor: '#ADA7A7',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  rectangle6Com: {
    width: '95%',
    height: 80,
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  rectangleWarnign: {
    width: '50%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#78C6F0',
    alignSelf: 'center',
    marginBottom: 10,
  },

  rectangleWarnignText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },

})