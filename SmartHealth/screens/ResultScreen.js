import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ResultScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require('../surveyImage.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultScreen;
