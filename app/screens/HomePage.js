import React from 'react';
import type {Node} from 'react';
import {colors} from '../constants/theme';
import {View, StyleSheet, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import NCarousel from '../components/NCarousel';
import {NEWS, LATNEWS} from '../data';
import SectionHeader from '../components/SectionHeader';
import NList from '../components/NList';
import { SafeAreaProvider} from 'react-native-safe-area-context';
const HomePage = () => {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
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
    marginTop: "5%"
  },
});
export default  HomePage;
