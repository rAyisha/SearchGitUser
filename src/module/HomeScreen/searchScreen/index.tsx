import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../../common/TextInput';


type SearchProps = {
  onSearch: (query: string) => void;
};

const SearchScreen: React.FC<SearchProps> = ({ onSearch }) => {
  const [login, setLogin] = useState('');

  const handleSearch = () => {
    if (login.trim()) {
      onSearch(login.trim());
    }
  };

  return (
    <View style={styles.searchContainer}>
      <InputText
        placeholder="Enter GitHub username"
        value={login}
        onChangeText={setLogin}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flex:1,
    padding: 20,
  },
  searchButton: {
    padding: 15,
    backgroundColor: '#000',
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
