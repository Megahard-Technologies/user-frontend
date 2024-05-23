import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { AirbnbRating, Rating } from 'react-native-ratings';

const EventDetails = () => {
  const route = useRoute();
  const { eventId } = route.params;
  const [eventDetails, setEventDetails] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);
  const [rating, setRating] = useState([]);
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.0.110:3000/api/wydarzenia/szczegoly/${eventId}`)
      .then(response => {
        setEventDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });

    axios.get(`http://192.168.0.110:3000/api/wydarzenia/godziny_otwarcia/${eventId}`)
      .then(response => {
        setOpeningHours(response.data);
      })
      .catch(error => {
        console.error('Error fetching opening hours:', error);
      });

    axios.get(`http://192.168.0.110:3000/api/wydarzenia/ocena/${eventId}`)
      .then(response => {
        setRating(response.data);
      })
      .catch(error => {
        console.error('Error fetching ocena:', error);
      });

    axios.get(`http://192.168.0.110:3000/api/wydarzenia/opinie/${eventId}`)
      .then(response => {
        setOpinions(response.data);
      })
      .catch(error => {
        console.error('Error fetching ocena:', error);
      });
  }, [eventId]);

  if (!eventDetails || !openingHours || !rating) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const ratingCompleted = (Rating) => {
    console.warn("Rating is: " + Rating)
  };

  return (
    <ScrollView>
      {eventDetails.map((event, index) => (
        <View key={index}>
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

            <Text style={styles.ocenaText}>200 opinii</Text>
          </View>
        ))}
        <View style={styles.row}>
          <Text style={styles.address}>Twoja ocena</Text>

          <Rating
            showRating={false}
            onFinishRating={ratingCompleted}
            tintColor='#78C6F0'
            imageSize={30}
            startingValue={0}
            style={{ marginHorizontal: 10, marginVertical: 5 }}
          />
        </View>

      </View>
      <View style={styles.ColorContainer}>
        <Text style={[{ fontSize: 18 }, { fontWeight: 'bold' }, { marginLeft: 10 }, { paddingTop: 10 }, { color: 'white' }]}>Opinie:</Text>
        {opinions.map((opinion, index) => (
          <View key={index} style={styles.row}>
            <Text style={[{ fontSize: 16 }, { fontWeight: 'bold' }, { marginLeft: 10 }, { paddingTop: 10 }]}>{opinion.czas}:</Text>
            <Text style={[{ fontSize: 16 }, { marginLeft: 10 }, { paddingTop: 10 }]}>{opinion.opis}</Text>
          </View>
        ))}
        <View style={styles.space} />
      </View>
    </ScrollView>
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
});

export default EventDetails;
