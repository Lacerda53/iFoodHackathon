import styled from 'styled-components/native';
import ArrowSvg from '../../assets/arrow.svg';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const ArrowHeader = styled(ArrowSvg)`
    transform:  rotate(-90deg);
`;
