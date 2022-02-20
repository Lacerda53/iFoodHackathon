import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ArrowSvg from '../../assets/arrow.svg';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    padding: 18px;
`;

export const MarketPlaceContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 45px;
`;

export const MarketPlaceImage = styled.Image`
    width: ${width / 7}px;
    height: ${width / 7}px;
    margin-right: 10px;
`;

export const ArrowHeader = styled(ArrowSvg)`
    margin-left: 18px;
    transform:  rotate(-90deg);
`;
