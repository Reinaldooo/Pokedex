import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HeartButton = ({ owned, setOwned, id }) => {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(owned)
  }, [owned])

  function handlePressIn() {
    Animated.spring(scaleAnim, {
      toValue: 0.5,
    }).start();
    setOwned(!liked, id)
    setLiked((old) => !old);
  }
  function handlePressOut() {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };
  
  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[{ position: "absolute", right: 20, top: 20 }, animatedStyle]}
      >
        <FontAwesome
          name={liked ? "heart" : "heart-o"}
          size={40}
          color={liked ? "rgb(255, 69, 58)" : "lightgray"}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default HeartButton;