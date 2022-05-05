/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {colors} from './src/constants/theme'; 
import {View, StyleSheet, ScrollView} from 'react-native'; 
import MainHeader from './src/components/MainHeader';
import ScreenHeader from './src/components/ScreenHeader';
import NCarousel from './src/components/NCarousel';
import {NEWS, LATNEWS} from './src/data';
import SectionHeader from './src/components/SectionHeader';
import NList from './src/components/NList';
import { SafeAreaProvider} from 'react-native-safe-area-context';
const HomeScreen = () => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <MainHeader title="News Section" />
      <ScreenHeader mainTitle="Latest" secondTitle="News" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NCarousel list={LATNEWS} />
        <SectionHeader
          title="TECHNOLOGY"
        />
        <NList list={NEWS} />
      </ScrollView>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});
export default  HomeScreen;
