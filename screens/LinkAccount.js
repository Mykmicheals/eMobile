import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Picker } from '@react-native-picker/picker';
import { MonoProvider, useMonoConnect } from '@mono.co/connect-react-native';


const LinkAccount = () => {


  const { init } = useMonoConnect()

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [sendValue, setSendValue] = useState('');

  const currencyOptions = [{ label: "🇳🇬    Nigerian NGN", value: 'NGN' }, { label: "🇺🇸    Dollar USD", value: "USD" }]

  const onCountryChange = (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2,
          flag: `https://restcountries.com/data/${country.cca2.toLowerCase()}.svg`
        }));
        setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    if (selectedCountry === '' || sendValue === '') {
      alert('Pls selcect all fields')
    } else {
      init()
    }
  }

  return (



    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor:'#fff'
    }}>

      <Text>Link Funds</Text>

      <View style={styles.container}>
        <Picker
          style={styles.select}
          selectedValue={selectedCountry}
          onValueChange={onCountryChange}>
          <Picker.Item label="Select Country" value="" />
          {countries.map(country => (

            <Picker.Item
              key={country.code}
              label={country.name}

              value={country.code}
              icon={() => (
                <Image
                  source={{ uri: country.flag }}
                  style={{ width: 30, height: 20 }}
                />
              )}

            />

          ))}

        </Picker>

        <Picker
          selectedValue={sendValue}
          style={styles.select}
          onValueChange={(itemValue) => setSendValue(itemValue)}
        >
          <Picker.Item label='select account type' value='' />

          {currencyOptions.map((item, i) => {
            return (
              <Picker.Item key={i} label={item.label} value={item.value} />
            )
          })}

        </Picker>

        <TouchableOpacity
          style={{ backgroundColor: 'blue', marginHorizontal: '30%', marginTop: '10%', paddingVertical: '2%' }}
          //onPress={() => init()}
          onPress={handleSubmit}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
        </TouchableOpacity>

      </View>



    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    width: '100%',

  },
  select: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    marginHorizontal: 50
  },
});




export default LinkAccount

