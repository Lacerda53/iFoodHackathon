import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import modalSvg from '../../assets/modal.svg';

export const Container = styled.View`
    position: absolute;
    justify-content: center;
    align-self: center;
    bottom: ${(Platform.OS === 'ios' ? 70 : 56) + getBottomSpace()}px;
    background: ${({ theme }) => theme.colors.white};
    shadow-color: #171717;
    shadow-offset: { width: -2, height: 4 };
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    padding: 13px;
    width: 95%;
    z-index: 5;
`;

export const ButtonCard = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Icon = styled(modalSvg)`
    margin-right: 16px;
    height: 100%;
`;
