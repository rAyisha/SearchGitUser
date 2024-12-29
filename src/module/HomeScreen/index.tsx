
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListScreen from './ListScreen';
import { getHomeMiddleWareData } from './store/homeMiddleWare';
import { AppDispatch, RootState } from '../../redux/store';
import SearchScreen from './searchScreen';

const HomeScreen = () => {
       const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch:AppDispatch = useDispatch();

  const {HomeData} = useSelector(
    ({
      homeMainReducers,
   
    }: RootState) => {
      return {
        HomeData: homeMainReducers?.HomeData?.items,
      
      };
    },
  );

  useEffect(() => {
    if (searchQuery) {
      dispatch(getHomeMiddleWareData({ query: searchQuery, pageNumber: 1 })).then((res)=>{
        console.log(res?.payload?.items,"tes")
      })
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  const handleEndReached = () => {
    if (!loading) {
      const nextPage = Math.ceil(HomeData.length / 10) + 1;
      dispatch(getHomeMiddleWareData({ query: searchQuery, pageNumber: nextPage }));
    }
  };
  

  return (
    <View style={styles.container}>
   
     <View style={{flex:1,backgroundColor:'#fff'}}>
     {loading && <ActivityIndicator size="large" color="#0000ff" />}
     {error ? <Text style={styles.errorText}>{error}</Text>: HomeData?.length > 0 &&  <Text style={styles.ListText}>List</Text>}
    
     {HomeData?.length !== 0 && (
       <ListScreen results={HomeData} onEndReached={handleEndReached} loading={loading} />
     )}
     </View>
     <View style={{flex:0.3}}>
     <SearchScreen onSearch={handleSearch} />
    
     </View>
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  ListText:{
    color: '#000',
    textAlign: 'center',
    // marginTop:40,
    fontWeight:'600'
  }
});
