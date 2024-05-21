import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';

const CalendarTest = () => {
    const [selected, setSelected] = useState('');
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (selected !== '') {
            axios.get(`http://localhost:3000/api/plan/${selected}`)
                .then(response => {
                    setEvents(response.data);
                })
                .catch(error => {
                    console.error('Error fetching events:', error);
                });
        }
    }, [selected]);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                        
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />
            </View>

            <View style={styles.eventsContainer}>
                {events.map(event => (
                    <Text key={event.id} style={styles.row}>{event.tekst}</Text>
                ))}
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    eventsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    row: {
        borderWidth: 2,
        borderRadius: 20,
        width: '80%',  
        marginTop: 10,
        padding: 10,
        alignContent: 'center'
    }
});

export default CalendarTest;
