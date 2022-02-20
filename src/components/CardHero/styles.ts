import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    margin-top: -60px;
    background: ${({ theme }) => theme.colors.white};
    shadow-color: #171717;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    border-radius: 5px;
`;

export const HeroContainer = styled.View`
    margin-left: 20px;
`;

export const HeroImage = styled.Image`
    width: ${width / 6.5}px;
    height: ${width / 6.5}px;
    border-radius: ${width / 6.5}px;
`;
