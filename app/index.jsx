//npx expo start -c
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Button, Overlay, Text } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import { LocaleConfig } from 'react-native-calendars';
import { Slot, Stack } from 'expo-router'
import Profile from './profile';
//import { SafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
const Main = () =>  {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const [selected, setSelected,] = useState('');

  LocaleConfig.locales['pl'] = {
    monthNames: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień'
    ],
    monthNamesShort: ['Stycz', 'Lut', 'Marz', 'Kwie', 'Ma', 'Czerw', 'Lip', 'Sierp', 'Wrzes', 'Paź', 'List', 'Grudz'],
    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    dayNamesShort: ['NDZ', 'PN', 'WT', 'ŚR', 'CZW', 'PT', 'SOB']
  };
  LocaleConfig.defaultLocale = 'pl';



  return (
    <SafeAreaView style={styles.allpage}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Link href="/profile">
            <View >
              <Image source={require('../assets/Awatar.png')} resizeMode="contain" />
            </View>
          </Link>

          <View style={styles.dzwonekContainer}>
            <TouchableWithoutFeedback onPress={toggleOverlay}>
              <Image source={require('../assets/Dzwonek.png')} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.calendar}>
          <LinearGradient // Dodanie LinearGradient jako tło
            colors={['#5AC8EB', '#0B8CB5']} // Kolory gradientu
            style={styles.linearGradient} // Styl gradientu

          >
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
                console.log(day.dateString);
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}

              style={{
                height: 365,
                width: '100%',
                borderRadius: 20,
                alignSelf: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 5,
              }}

              theme={{
                calendarBackground: 'transparent', // Ustawienie tła kalendarza na transparentne albo (rgba(0, 0, 0, 0))
                textDayFontWeight: 'normal',
                dayTextColor: 'black',

                textDayHeaderFontWeight: 'bold',
                textSectionTitleColor: 'black',

                arrowColor: 'black',

                todayTextColor: 'white',

                textMonthFontWeight: 'bold',

                textDisabledColor: '#40403f', //dni spoza danego miesiąca
              }}

            />
          </LinearGradient>
        </View>

        <View style={styles.carousel}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.carouselItem}>
              <Link href="/todo">
                <Image source={require('../assets/To-Do.png')} resizeMode="contain" />
              </Link>
            </View>

            <View style={styles.carouselItem}>
              <Link href="/friends'Friends">
                <Image source={require('../assets/Znajomi.png')} resizeMode="contain" />
              </Link>
            </View>

            <View style={styles.carouselItem}>
              <Link href="/wydarzenia">
                <Image source={require('../assets/Wydarzenia.png')} resizeMode="contain" />
              </Link>
            </View>

          </ScrollView>
        </View>

        <View style={styles.bio}>
          <Image style={styles.bioimg} source={require('../assets/bioImg.png')} resizeMode="contain" />
          <View style={{ flex: 1 }}>
            <Text style={styles.bioname} numberOfLines={2}>Zbigniew Precelek</Text>

            <TextInput
              style={styles.bioinput}
              //onChangeText={onChangeNumber}
              //value={number}
              placeholder="O czym teraz myślisz?"
              multiline
            //keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.poligonContainer}>
          <Link href="/wydarzenia">
            <Text>poligon</Text>
          </Link>
        </View>

        <Overlay
          isVisible={isOverlayVisible}
          onBackdropPress={closeOverlay}
          overlayStyle={styles.overlayStyle}
        >

          <Text style={styles.headerOvelayText}>Powiadomienia</Text>

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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allpage: {
    backgroundColor: '#DCDADA',
    height: '100%',
    //paddingTop: 10,
  },
  /////////////////////////////
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    //paddingBottom: 10,
    marginLeft: 33,
    marginRight: 33,
  },
  dzwonekContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  /////////////////////////////
  calendar: {
    height: 365,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  /////////////////////////////
  carousel: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#57a5cf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 20,
    height: 210,
    marginRight: 20,
    elevation: 5,
  },
  carouselItem: {
    paddingHorizontal: 45,
    paddingVertical: 40,
  },
  /////////////////////////////
  bio: {
    flexDirection: 'row',
    //height: 120,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
  },
  bioimg: {
    paddingVertical: 60,
    marginLeft: 20,
    width: 90
  },
  bioname: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 15,
  },
  bioinput: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 17,
    //width: 230,
    //height: 50
  },
  /////////////////////////////
  poligonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /////////////////////////////
  overlayStyle: {
    width: '75%',
    alignItems: 'center',
    //height: 'auto',
    borderRadius: 20,
    backgroundColor: '#07BBF3',
  },
  notificationBox: { //szary
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
  rectangle: {
    backgroundColor: '#FFFEFE',
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    marginTop: 10,
    borderRadius: 5,
    elevation: 5,
  }
});

export default Main;