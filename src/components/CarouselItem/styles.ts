import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

type CarouselItemProps = {
   index: number;
}

export const Container = styled.TouchableOpacity`
   width: 90px;
   margin-right: 16px;
   opacity: ${({ disabled }) => disabled ? .5 : 1};
`;

export const MainContent = styled.View<CarouselItemProps>`
   height: ${width / 4.5}px;
   width: ${width / 4.5}px;
   border-radius: 45px;
   justify-content: center;
   align-items: center;
   background: ${({ theme, index }) => index % 2 ? theme.colors.pink : theme.colors.yellow};
`;

export const ImageItem = styled.Image`
   height: ${width / 5}px;
   width: ${width / 5}px;
`;