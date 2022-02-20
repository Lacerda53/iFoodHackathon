import styled from 'styled-components/native';
import FilterSVG from '../../assets/filter.svg'


export const Container = styled.View`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
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
`

export const FilterIcon = styled(FilterSVG)`
   margin-left: 5px;   
`
