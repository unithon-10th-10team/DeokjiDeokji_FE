import React from 'react';
import styled, { css } from 'styled-components';
import { Body1_1, Body2_3 } from 'styles/font';
import { IPlace } from 'utils/interface';

interface IPositions {
  position: string;
}

export const LocationInfo = ({
  focused,
  position,
}: {
  focused: IPlace | null;
  position: string;
}) => {
  return (
    <LocationInfoContainer position={position}>
      <div style={{ position: 'absolute', left: 20, top: 15 }}>
        <img
          src={focused?.img}
          style={{ width: '60px', height: '60px', borderRadius: '10px' }}
        />
      </div>
      <div>
        <LocationInfoTop>
          <Body1_1>{focused?.name}</Body1_1>
          <Body2_3>{focused?.address}</Body2_3>
        </LocationInfoTop>
      </div>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.div<IPositions>`
  width: 90%;
  height: 120px;

  border-radius: 12px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.position === 'relative'
      ? css`
          position: relative;
          /* z-index: 2; */
        `
      : css`
          position: absolute;
          bottom: 120px;
          z-index: 4;
          margin: 0 40px 0 20px;
        `}
  box-shadow: 3px 3px 3px 3px ${({ theme }) => theme.colors.gray02};
`;

const LocationInfoTop = styled.div`
  width: 70%;
  height: 50px;

  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
`;
