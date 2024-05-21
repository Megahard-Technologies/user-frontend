import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const Wydarzenia = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/wydarzenia`) // jeżeli chcemy sprawdzić to w expo go to trzba zamiast localhost napisać adres ip komputera
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <ScrollView>
            <View style={styles.eventsContainer}>
                {events.map((event, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={styles.companyName}>{event.id_wydarzenia}</Text>
                        <Text style={styles.companyName}>{event.nazwa_firmy}</Text>
                        <Text style={styles.eventName}>{event.nazwa}</Text>
                        <Text style={styles.address}>{event.adres}</Text>
                        {event.image_base64 && (
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${event.image_base64}` }}
                                style={styles.image}
                                resizeMode="contain"
                                // contain: Skalowanie obrazu, aby zmieścił się w wymiarach, bez przycinania.
                                // stretch: Skalowanie obrazu, aby dokładnie wypełnić wymiary, może zmienić proporcje.
                                // center: Umieszczenie obrazu na środku bez skalowania.
                            />
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    eventsContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    row: {
        borderWidth: 2,
        borderRadius: 20,
        width: '90%',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    companyName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    eventName: {
        fontSize: 14,
        marginVertical: 5,
    },
    address: {
        fontSize: 12,
        color: 'gray',
    },
    image: {
        width: 75,
        height: 75,
        marginTop: 10,
        borderRadius: 10,
    },
});

export default Wydarzenia;