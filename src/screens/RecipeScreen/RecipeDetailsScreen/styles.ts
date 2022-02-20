import styled from 'styled-components/native';
import ArrowSvg from '../../../assets/arrowWhite.svg';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { VirtualScrollView } from '../../../components/VirtualScrollView';

const { width, height } = Dimensions.get('window');

export const Container = styled(VirtualScrollView)`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    padding: 18px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.whiteSecondary};
    height: ${height / 2.5}px;
`;

export const HeaderButton = styled.TouchableOpacity`
    margin-left: 18px;
    background: ${({ theme }) => theme.colors.grayLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${getStatusBarHeight() + 20}px;
    width: ${RFPercentage(6)}px;
    height: ${RFPercentage(6)}px;
    border-radius: 50px;
    z-index: 2;
`;

export const ArrowHeader = styled(ArrowSvg)`
`;

export const ImageRecipe = styled.Image`
    width: ${width / 1.5}px;
    height: ${width / 1.8}px;
`;