import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const EventDetails = () => {
  const router = useRouter();
  const { event } = router.query;
  const eventData = JSON.parse(event);

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>{eventData.nazwa_firmy}</Text>
      <Text style={styles.eventName}>{eventData.nazwa}</Text>
      <Text style={styles.address}>{eventData.adres}</Text>
      {eventData.image_base64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${eventData.image_base64}` }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
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
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default EventDetails;
