// usunięte z projektu
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { Stack } from 'expo-router'
import { useNavigation } from 'expo-router';

const Logowanie = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/login?login=${login}&password=${password}`);
      if (response.data.success) {
        Alert.alert('Sukces', 'Zalogowano pomyślnie!');
        navigation.navigate('main');
      } else {
        Alert.alert('Błąd', 'Nieprawidłowy login lub hasło');
        //navigation.navigate('main');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Błąd', 'Nieprawidłowy login lub hasło');
      } else {
        console.error('Błąd podczas logowania:', error);
        Alert.alert('Błąd', 'Coś poszło nie tak podczas logowania');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logowanie</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Zaloguj" onPress={handleLogin} />
    </View>
  );
};

export default Logowanie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDADA',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#57a5cf',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
