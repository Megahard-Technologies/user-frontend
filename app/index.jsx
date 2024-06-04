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

const Main = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [imageToDo, setImageToDo] = useState(require('../assets/To-Do.png'));
  const [imageZnajomi, setImageZnajomi] = useState(require('../assets/Znajomi.png'));
  const [imageWydarzenia, setImageWydarzenia] = useState(require('../assets/Wydarzenia.png'));
  const [imageDzwonek, setImageDzwonek] = useState(require('../assets/Dzwonek.png'));
  const [imageAwatar, setImageAwatar] = useState(require('../assets/Awatar.png'));



  const handleClickInToDo = () => {
    setImageToDo(require('../assets/To-Do-biale.png'));
  };
  const handleClickOutToDo = () => {
    setImageToDo(require('../assets/To-Do.png'));
  };

  const handleClickInZnajomi = () => {
    setImageZnajomi(require('../assets/Znajomi-biale.png'));
  };
  const handleClickOutZnajomi = () => {
    setImageZnajomi(require('../assets/Znajomi.png'));
  };

  const handleClickInWydarzenia = () => {
    setImageWydarzenia(require('../assets/Wydarzenia-biale.png'));
  };
  const handleClickOutWydarzenia = () => {
    setImageWydarzenia(require('../assets/Wydarzenia.png'));
  };

  const handleClickInAwatar = () => {
    setImageAwatar(require('../assets/Awatar-niebieski.png'));
  };
  const handleClickOutAwatar = () => {
    setImageAwatar(require('../assets/Awatar.png'));
  };

  const handleClickInDzwonek = () => {
    setImageDzwonek(require('../assets/Dzwonek-niebieski.png'));
  };
  const handleClickOutDzwonek = () => {
    setImageDzwonek(require('../assets/Dzwonek.png'));
  };

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Link href="/profile"
            onPressIn={handleClickInAwatar}
            onPressOut={handleClickOutAwatar}
          >
            <View >
              <Image source={imageAwatar} resizeMode="contain" />
            </View>
          </Link>

          <View style={styles.dzwonekContainer}>
            <TouchableWithoutFeedback
              onPress={toggleOverlay}
              onPressIn={handleClickInDzwonek}
              onPressOut={handleClickOutDzwonek}
            >
              <Image source={imageDzwonek} />
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


        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.carousel}>

            <View style={styles.carouselItem}>
              <Link href="/todo"
                onPressIn={handleClickInToDo}
                onPressOut={handleClickOutToDo}>
                <View>
                  <Image source={imageToDo} />
                </View>
              </Link>
            </View>

            <View style={styles.carouselItem}>
              <Link href="/friends'Friends"
                onPressIn={handleClickInZnajomi}
                onPressOut={handleClickOutZnajomi}>
                <View>
                  <Image source={imageZnajomi} />
                </View>
              </Link>
            </View>

            <View style={styles.carouselItem}>
              <Link href="/wydarzenia"
                onPressIn={handleClickInWydarzenia}
                onPressOut={handleClickOutWydarzenia}>
                <View>
                  <Image source={imageWydarzenia} />
                </View>
              </Link>
            </View>

          </View>
        </ScrollView>


        <View style={styles.bio}>
          <Image style={styles.bioimg} source={require('../assets/bioImg.png')} resizeMode="contain" />
          <View style={{ flex: 1 }}>
            <Text style={styles.bioname} numberOfLines={2}>Zbigniew Precelek</Text>

            <TextInput
              style={styles.bioinput}
              placeholder="O czym teraz myślisz?"
              multiline
            />
          </View>
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
  },
  /////////////////////////////
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
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
    alignItems: 'center',
  },
  carouselItem: {
    paddingHorizontal: 45,
    paddingVertical: 45,
  },
  /////////////////////////////
  bio: {
    flexDirection: 'row',
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
  rectangle: {
    backgroundColor: '#FFFEFE',
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