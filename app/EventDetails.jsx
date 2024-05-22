import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const EventDetails = () => {
  const route = useRoute();
  const { eventId } = route.params;
  const [eventDetails, setEventDetails] = useState([]);
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/wydarzenia/szczegoly/${eventId}`)
      .then(response => {
        setEventDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching event details:', error);
      });

    axios.get(`http://localhost:3000/api/wydarzenia/godziny_otwarcia/${eventId}`)
      .then(response => {
        setOpeningHours(response.data);
      })
      .catch(error => {
        console.error('Error fetching opening hours:', error);
      });
  }, [eventId]);

  if (!eventDetails || !openingHours) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {eventDetails.map((event, index) => (
        <View key={index}>
          <Text style={styles.companyName}>{event.nazwa_firmy.toUpperCase()}</Text>
          <Text style={styles.eventName}>{event.nazwa}</Text>
          <Text style={styles.opis}>{event.opis}</Text>
          <Text style={styles.dateTime}>{event.czas_rozpoczecia} {event.czas_zakonczenia}</Text>
          <Text style={styles.address}>{event.adres}</Text>
          <Text style={styles.email}>{event.email}</Text>
          <Text style={styles.tel}>{event.nr_telefonu}</Text>
        </View>
      ))}

      {openingHours.map((hour, index) => (
        <View key={index}>
          <Text style={styles.dayOfWeek}>{hour.dzien_tygodnia}: {hour.otwarcie} - {hour.zamkniecie}</Text>
          {/* <Text style={styles.openingTime}>{hour.otwarcie}</Text>
          <Text style={styles.closingTime}>{hour.zamkniecie}</Text> */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventName: {
    fontSize: 18,
    marginVertical: 10,
  },
  address: {
    fontSize: 16,
    color: 'gray',
  },
});

export default EventDetails;
