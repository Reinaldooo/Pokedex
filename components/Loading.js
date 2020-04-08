import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View style={{ marginVertical: 50 }}>
      {/* <Text style ={{ color: "rgb(72, 72, 74)", marginBottom: 20 }}>
        Loading details...
      </Text> */}
      <ActivityIndicator size="large" />
    </View>
  );
}
 
export default Loading;