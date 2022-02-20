import styled from 'styled-components/native';
import FilterSVG from '../../assets/filter.svg'
import ArrowSvg from '../../assets/arrow.svg';
import { VirtualScrollView } from '../../components/VirtualScrollView';


export const Container = styled(VirtualScrollView)`
    flex: 1;
`;

export const Content = styled.View`
    padding: 18px;
`;

export const FilterButton = styled.TouchableOpacity`
   border: 1px solid;
   border-color: ${({ theme }) => theme.colors.whiteSecondary};
   padding: 5px 5px 5px 15px;
   margin-bottom: 20px;
   border-radius: 25px;
   flex-direction: row;
   align-items: center;
   width: 100px;
`;

export const FilterIcon = styled(FilterSVG)`
   margin-left: 5px;   
`;

export const ArrowHeader = styled(ArrowSvg)`
    margin-left: 18px;
`;
