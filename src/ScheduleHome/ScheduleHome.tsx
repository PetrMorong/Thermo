import React from 'react';

import * as S from './styles';

type Props = {isHorizonal: boolean};

const temps = [
  {
    colorCode: '#EEC24A',
    name: 'Comfy',
    value: '21°',
  },
  {
    colorCode: '#9CBCD9',
    name: 'Not Home',
    value: '18°',
  },
  {
    colorCode: '#A26999',
    name: 'Slepp',
    value: '16°',
  },
  {
    colorCode: '#E99292',
    name: 'Super Hot',
    value: '25°',
  },
  {
    colorCode: '#406BA3',
    name: 'Cool',
    value: '21°',
  },
];

const ScheduleHome = () => {
  return (
    <S.Container>
      <S.Header />
      <S.Body>
        <S.ColorRow>
          {temps.map((temp) => (
            <S.ColorItem color={temp.colorCode}>
              <S.ColorItemText>{temp.value}</S.ColorItemText>
              <S.ColorItemText>{temp.name}</S.ColorItemText>
            </S.ColorItem>
          ))}
        </S.ColorRow>
      </S.Body>
    </S.Container>
  );
};

export default ScheduleHome;
