import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

type ContainerProps = {
    isFooter: boolean;
    isOutline: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    height: 56px;
    background: ${({ theme, isOutline }) => isOutline ? theme.colors.white : theme.colors.primary};
    justify-content: center;
    align-items: center;
    ${({ isFooter }) => isFooter && css`
        position: absolute;
        bottom: 0;
        height: ${(Platform.OS === 'ios' ? 45 : 56) + getBottomSpace()}px;
        padding-bottom: ${Platform.OS === 'ios' ? 15 : 0}px;
    `}
`;