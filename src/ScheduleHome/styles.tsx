import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  background: #000638;
  width: ${width};
  height: ${height};
  flex-direction: column;
`;

export const Header = styled.View`
  background: #162151;
  width: ${width};
  height: 60px;
`;

export const ColorRow = styled.View`
  flex-direction: row;
`;

export const ColorItem = styled.View<{color: string}>`
  width: 85px;
  height: 55px;
  background: ${({color}) => color};
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;

export const ColorItemText = styled.Text`
  color: white;
`;

export const Body = styled.View`
  padding: 20px;
`;
