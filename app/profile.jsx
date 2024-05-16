import { StyleSheet, Image, Text, View, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';

const Index = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const wybor = [
    'Publiczne',
    'Prywatne',
    'Tylko znajomi',
  ];

  return (
    <ScrollView style={styles.scroll}>
    <SafeAreaView style={styles.backgound}>
     
        <View style={styles.rowe}>
          <Image style={styles.photo} source={require('../assets/profile_photo.png')} />
        </View>

        <View style={styles.lineGray} />

        <View style={styles.row}>
          <View style={styles.rectangle}>
            <Text style={styles.text}> Prywatność konta</Text>
            <SelectDropdown
              data={wybor}
              onSelect={(selectedItem, index) => {
                setSelectedItemIndex(index);
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpen) => {
                return (
                  <View style={[styles.dropdownButtonStyle, isOpen && { backgroundColor: '#78C6F0' }]}>
                    <Text style={styles.dropdownButtonTxtStyle}>{selectedItem || wybor[selectedItemIndex]}</Text>
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View style={[styles.dropdownItemStyle, isSelected && { backgroundColor: '#B4B4B4' }]}>
                    <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                  </View>
                );
              }}
              style={styles.dropdownMenuStyle}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rectangle}>
            <Text style={styles.text}> Wyłącz powiadomienia</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rectangle}>
            <Text style={styles.text}> Dane osobowe</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rectangle}>
            <Text style={styles.text}> Wersja aplikacji          2.146</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rectangle}>
            <Text style={styles.text}> Aktualizacja</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.logout}>Wyloguj się </Text>
        </View>

        <View style={styles.row}></View>
        
    </SafeAreaView>
    </ScrollView>
  )
}

export default Index;

const styles = StyleSheet.create({
  scroll: {
    //marginTop: -30
  },
  backgound: {
    flexDirection: 'column',
    backgroundColor: '#DCDADA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  photo: {
    width: 256,
    height: 256,
    resizeMode: 'cover',
    borderRadius: 128,
    marginBottom: 20,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 363,
    height: 90,
    backgroundColor: '#78C6F0',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#07BBF3',
    elevation: 5
  },

  lineGray: {
    borderWidth: 1,
    borderColor: '#626262',
    elevation: 5,
    marginBottom: 20,
    width: '100%',
  },

  text: {
    flex: 1,
    textAlign: 'left',
    fontSize: 25
  },

  logout: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'red',
    marginTop: 29,
  },

  dropdownButtonStyle: {
    width: 150,
    height: 50,
    backgroundColor: '#78C6F0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#626262',
    borderWidth: 1,
    elevation: 5,
  },

  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#2B2B2B',
    textAlign: 'center',
  },

  dropdownItemStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#78C6F0',
  },

  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#2B2B2B',
    textAlign: 'center',
  },

  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    height: 150,
    position: 'absolute',

  },
});
