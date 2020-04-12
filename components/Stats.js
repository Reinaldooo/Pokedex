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
  opacity: ${props => props.fullOpacity ? 1 : .1};
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

const Stats = ({ apiDetails, color, fetchOk }) => {
  return (
    <>
      {apiDetails.stats ? (
        <Container fullOpacity={fetchOk}>
          <HeightWeightContainer>
            <HeightWeightLabel color="rgb(72, 72, 74)">
              Height: {apiDetails.height / 10} m | Weight: {apiDetails.weight / 10} kg
            </HeightWeightLabel>
          </HeightWeightContainer>
          {apiDetails.stats.map((item, index) => (
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
        </Container>
      ) : (
        <Container fullOpacity>
          <Loading />
        </Container>
      )}
    </>
  );
};

export default Stats;
