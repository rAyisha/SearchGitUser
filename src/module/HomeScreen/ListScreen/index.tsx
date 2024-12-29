import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

interface ListScreenProps {
  results: Array<{
    avatar_url: string;
    login: string;
    type: string;
    html_url: string;
  }>;
  onEndReached: () => void;
  loading: boolean;
}

const ListScreen: React.FC<ListScreenProps> = ({ results, onEndReached, loading }) => {
  return (
    <FlatList
      data={results}
      keyExtractor={(item) => item.login} 
      renderItem={({ item }) => (
        <View style={styles.resultItem}>
          <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
          <View style={styles.resultText}>
            <Text style={styles.username}>{item.login}</Text>
            <Text>Type: {item.type}</Text>
            <Text>{item.html_url}</Text>
          </View>
        </View>
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1} 
      ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: 'row',
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  resultText: {
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
  },
});
