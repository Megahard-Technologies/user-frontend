import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Wydarzenia = () => {
    const navigation = useNavigation();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.0.110:3000/api/wydarzenia`)
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    const handleEventPress = (eventId) => {
        navigation.navigate('EventDetails', { eventId });
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.eventsContainer}>
                {events.map((event, index) => (
                    <TouchableOpacity key={index} style={styles.row} onPress={() => handleEventPress(event.id_wydarzenia)}>
                        {event.image_base64 && (
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${event.image_base64}` }}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        )}
                        <View style={styles.tekst}>
                            <Text style={styles.companyName}>{event.nazwa_firmy}</Text>
                            <Text style={styles.eventName}>{event.nazwa}</Text>
                            <View style={styles.addressContainer}>
                                <Text style={styles.address}>{event.adres}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    eventsContainer: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',

    },
    row: {
        borderWidth: 2,
        borderRadius: 20,
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#78C6F0',
        borderColor: '#07BBF3',
        elevation: 10
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F0EAEA'
    },
    eventName: {
        fontSize: 16,
        marginVertical: 5,
        flexShrink: 1,
        flexWrap: 'wrap',
    },
    address: {
        fontSize: 14,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: 15
    },
    tekst: {
        flex: 1,
    },
    addressContainer: {

        backgroundColor: '#F0EAEA',
        alignSelf: 'flex-end',
        borderRadius: 10,
    }
});

export default Wydarzenia;
