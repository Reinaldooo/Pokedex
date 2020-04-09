import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
//
import ProgressBar from "./ProgressBar";
import { percent, capitalize } from "../utils";
import Loading from "./Loading";

const Container = styled.View`
  width: 90%;
  height: 300px;
  margin-bottom: 15px;
`;

const HeightWeightContainer = styled.View`
  height: 50px;
  width: 80%;
  /* background-color: red; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const HeightWeightLabel = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color};
`;

const Stats = ({ details, color, fetchOk }) => {
  return (
    <Container>
      {fetchOk && details.stats ? (
        <>
          <HeightWeightContainer>
            <HeightWeightLabel color="rgb(72, 72, 74)">
              Height: {details.height / 10} m | Weight: {details.weight / 10} kg
            </HeightWeightLabel>
          </HeightWeightContainer>
          {details.stats.map((item, index) => (
            <View key={index} style={{ paddingVertical: 5 }}>
              <Text style={{ marginBottom: 5, fontSize: 14 }}>
                {capitalize(item.stat.name)}
              </Text>
              <ProgressBar
                width={percent(item.base_stat)}
                color={color === "white" ? "gray" : color}
              />
            </View>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Stats;
