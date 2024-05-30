import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import { Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as Network from 'expo-network';

const EventDetails = () => {
  const route = useRoute();

  const { eventId } = route.params;
  const [eventDetails, setEventDetails] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [rating, setRating] = useState([]);
  const [opinions, setOpinions] = useState([]);

  const [userOpinion, setUserOpinion] = useState('');
  const [userRating, setUserRating] = useState(null);
  const [ip, setIp] = useState('');
  const [providerId, setProviderId] = useState('');
  const [flag, setFlag] = useState(false);
  
  const [reload, setReload] = useState(false);


  const ratingCompleted = (Rating) => {
    //console.warn("Rating is: " + Rating);
    setUserRating(Rating);
  };

  Network.getIpAddressAsync().then(ip => {
    setIp(ip);
  });

  const submitOpinion = (id_uslugodawcy) => {
    Network.getIpAddressAsync().then(ip => {
      axios.post(`http://192.168.0.162:3000/api/wydarzenia/wysylanie_opinii/${id_uslugodawcy}`, {
        opinion: userOpinion,
        rating: userRating,
        ip: ip
      })
        .then(response => {
          setUserOpinion('');
          setUserRating(null);
          setIp(ip);
          setReload(!reload);
        })
        .catch(error => {
          console.error('Error submitting opinion:', error);
        });
    });
  };

  const deleteOpinion = () => {
    Network.getIpAddressAsync().then(ip => {
      axios.post(`http://192.168.0.162:3000/api/wydarzenia/usuwanie_opinii`, {
        id_uslugodawcy: providerId,
        ip: ip
      })
        .then(response => {
          setReload(!reload);
        })
        .catch(error => {
          console.error('Error submitting opinion:', error);
        });
    });
  };

  function resetUserInput() {
    setReload(!reload);
    setUserOpinion('');
    setUserRating(null);
  }

  useEffect(() => {
    axios.get(`http://192.168.0.162:3000/api/wydarzenia/szczegoly/${eventId}`)
      .then(response => {
        setEventDetails(response.data);
        setProviderId(response.data[0].id_uslugodawcy);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });

    axios.get(`http://192.168.0.162:3000/api/wydarzenia/godziny_otwarcia/${eventId}`)
      .then(response => {
        setOpeningHours(response.data);
      })
      .catch(error => {
        console.error('Error fetching opening hours:', error);
      });

    axios.get(`http://192.168.0.162:3000/api/wydarzenia/ocena/${eventId}`)
      .then(response => {
        setRating(response.data);
      })
      .catch(error => {
        console.error('Error fetching ocena:', error);
      });

    axios.get(`http://192.168.0.162:3000/api/wydarzenia/opinie/${eventId}`)
      .then(response => {
        for (let i = response.data.length - 1; i >= 0; i--) {
          if (response.data[i].opis === null || response.data[i].opis === '' || response.data[i].opis.length === 0) {
            //nie przesyłaj do tablicy
            response.data.splice(i, 1);
          }
        }
        setOpinions(response.data);
      })
      .catch(error => {
        console.error('Error fetching ocena:', error);
      });


    //   async function sendValid() {
    //   console.log('IP:', ip);
    //   console.log('provider id:', providerId);
    //   try {
    //     const response = await axios.get(`http://192.168.0.162:3000/api/wydarzenia/walidacja_wysylanie_opinii?ip=${ip}&provider_id=${providerId}`);
    //     if (response.data.success) {
    //       //Alert.alert('Jest taki wpis');
    //       //flag = true;
    //       setFlag(false);
    //     } else {
    //       //Alert.alert('Nie ma takiego wpisu');
    //       setFlag(true);
    //     }
    //   } catch (error) {
    //     console.error('Error sending valid:', error);
    //     Alert.alert('Błąd', 'Coś poszło nie tak podczas wysyłania');
    //   }
    // };

    // sendValid();
   
      axios.get(`http://192.168.0.162:3000/api/wydarzenia/walidacja_wysylanie_opinii?ip=${ip}&provider_id=${providerId}`)
        .then(response => {
          if (response.data.success) {
            //Alert.alert('Jest taki wpis');
            //flag = true;
            setFlag(false);
          } else {
            //Alert.alert('Nie ma takiego wpisu');
            setFlag(true);
          }
        })
        .catch(error => {
          console.error('Error sending valid:', error);
          Alert.alert('Błąd', 'Coś poszło nie tak podczas wysyłania');
        });

  }, [reload, eventId, ip, providerId]);

  if (!eventDetails || !openingHours || !rating) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {eventDetails.map((event, index) => (
            <View key={index}>
              {/* <Text>{event.id_uslugodawcy}</Text> */}
              <Text style={styles.companyName}>{event.nazwa_firmy.toUpperCase()}</Text>
              <View style={styles.ColorContainer}>
                <Text style={styles.eventName}>{event.nazwa}</Text>
              </View>

              <View style={styles.ColorContainer}>
                <Text style={styles.opis}>{event.opis}</Text>
                <View style={styles.row}>
                  <Text style={styles.addressText}>Oferta ważna od: </Text>
                  <Text style={styles.address}>{event.czas_rozpoczecia}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.addressText}>Oferta ważna do: </Text>
                  <Text style={styles.address}>{event.czas_zakonczenia}</Text>
                </View>

                <View style={styles.space} />
              </View>

              <View style={styles.line} />

              <View style={styles.ColorContainerContact}>
                <View style={styles.row}>
                  <Text style={styles.addressText}>Adres: </Text>
                  <Text style={styles.address}>{event.adres}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.addressText}>Mail:</Text>
                  <Text style={styles.address}>{event.email}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.addressText}>Telefon:</Text>
                  <Text style={styles.address}>{event.nr_telefonu}</Text>
                </View>
              </View>

              <View style={styles.ColorContainer}>
                <View style={styles.space} />

                <Text style={styles.godziny_otwarcia}>Godziny otwarcia:</Text>
                {openingHours.map((hour, index) => (
                  <View key={index} style={styles.row}>
                    <Text style={styles.dzien_tygodnia}>{hour.dzien_tygodnia}:</Text>
                    <Text style={styles.godzina}>{hour.otwarcie} - {hour.zamkniecie}</Text>
                  </View>
                ))}

                <View style={styles.space} />
              </View>

              <View style={styles.line} />
            </View>

          ))}

          <View style={styles.ColorContainer}>
            <Text style={styles.ocenaText}>Ocena:</Text>
            {rating.map((star, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.ocenaText}>{star.avg_ilosc_gwiazdek}</Text>
                <Rating
                  readonly={true}
                  showRating={false}
                  onFinishRating={ratingCompleted}
                  tintColor='#78C6F0'
                  imageSize={30}
                  startingValue={star.avg_ilosc_gwiazdek}
                  style={{ marginHorizontal: 10, marginVertical: 5 }}
                />

                <Text style={styles.ocenaText}>{star.ilosc_opinii} ocen</Text>
              </View>
            ))}
          </View>

          <ScrollView style={styles.ColorContainerOpinia} showsVerticalScrollIndicator={false}>
            <Text style={styles.opiniaText}>Opinie:</Text>


            {opinions.map((opinion, index) => (
              <View key={index} style={styles.opiniaContainer}>
                <View style={styles.rowOpinie}>
                  <View>
                    <Text style={styles.opiniaCzas}>{opinion.czas}:</Text>
                  </View>
                  <Text style={styles.opiniaOpis}>{opinion.opis}</Text>
                </View>
              </View>
            ))}


            <View style={styles.space} />
          </ScrollView>

          {flag === true ? (
            <View style={styles.ColorContainer}>
              <View style={styles.row}>
                <Text style={styles.ocenaText}>Twoja ocena</Text>

                <Rating
                  showRating={false}
                  onFinishRating={ratingCompleted}
                  tintColor='#78C6F0'
                  imageSize={30}
                  startingValue={0 || userRating}
                  style={{ marginHorizontal: 10, marginVertical: 5 }}
                />
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setUserOpinion}
                value={userOpinion}
                multiline={true}
                placeholder="Przekaż nam swoją opinię"
                placeholderTextColor={'grey'}
              />

              <View style={styles.row}>
                <View style={styles.przeslij}>
                  <Button
                    title="Anuluj"
                    color={'red'}
                    style={styles.ButtonStyle}
                    onPress={() => resetUserInput()}
                  />
                </View>

                {eventDetails.map((event, index) => (
                  <View style={styles.przeslij} key={index}>
                    <Button
                      title="Prześlij"
                      onPress={() => submitOpinion(event.id_uslugodawcy)}
                    />
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View style={styles.przekazalesOpinie}>
              <Text style={styles.ocenaText}>Przekazałeś już swoją opinię</Text>
              <View style={styles.przeslijUsuwanie}>
                <Button
                  title="Prześlij opinię jeszcze raz"
                  color={'red'}
                  style={styles.ButtonStyle}
                  onPress={() => deleteOpinion()}
                />
              </View>
            </View>

          )}

        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  space: {
    marginVertical: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowOpinie: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  companyName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
  },
  eventName: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    color: 'white',
    justifyContent: 'center',
  },
  ColorContainer: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
  },
  ColorContainerOpinia: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    height: 300,
  },
  przekazalesOpinie: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    padding: 10,
  },
  ColorContainerContact: {
    backgroundColor: '#78C6F0',
    borderColor: '#07BBF3',
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  address: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
    lineHeight: 22,
  },
  addressText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    lineHeight: 22,
  },
  opis: {
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
  },
  godziny_otwarcia: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  dzien_tygodnia: {
    marginLeft: 10,
    fontSize: 18,
  },
  godzina: {
    marginLeft: 'auto',
    marginRight: 25,
    fontSize: 18
  },
  ocenaText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',

    marginLeft: 10,
    lineHeight: 22,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  przeslij: {
    backgroundColor: '#78C6F0',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  przeslijUsuwanie:{
    backgroundColor: '#78C6F0',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center'
  },
  ocenaText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    lineHeight: 22,
  },
  input: {
    height: 70,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  przeslij: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    width: '45%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  opiniaContainer: {
    width: '95%',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    padding: 5,
  },
  opiniaText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 10,
    color: 'white'
  },
  opiniaCzas: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  opiniaOpis: {
    fontSize: 16,
    marginLeft: 10,
  }



});

export default EventDetails;
