import React from 'react';
import styled from 'styled-components/native'

const Description = styled.Text`
  font-size: 14px;
  align-self: center;
  line-height: 22px;
  margin: 10px 20px;
  color: rgb(72, 72, 74);
`;

const NoItemsOnList = () => {
  return ( 
    <Description>
      Sorry, no Pokémon found!
    </Description>
   );
}
 
export default NoItemsOnList;