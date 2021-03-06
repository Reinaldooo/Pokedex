import React from 'react';
import styled from 'styled-components/native';

const Outer = styled.View`
height: 10px;
width: 100%;
border-radius: 4px;
background-color: rgb(229, 229, 224);
position: relative;
overflow: hidden;
`;

const Inner = styled.View`
  height: 100%;
  background-color: ${props => props.color};
  width: ${props => props.width};
`;

const ProgressBar = ({ width, color }) => {
    if (width > 200) {
        width = 200
    }

    return (
        <Outer>
            <Inner width={`${width}%`} color={color}/>
        </Outer>
    );
}

export default ProgressBar;