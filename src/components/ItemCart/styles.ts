import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex-direction: row;
    margin: 20px 0;
`;

export const Content = styled.View`
    width: 80%;
`;

export const ItemImage = styled.Image`
    width: ${width / 5}px;
    height: 100%;
`;