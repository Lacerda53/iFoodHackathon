import styled from 'styled-components/native';

export type CarouselItemProps = {
   index?: number;
   path?: string;
}

export const Container = styled.View`
    width: 90px;
    height: 135px;
    marginRight: 16px;
`;

export const MainContent = styled.View<CarouselItemProps>`
   height:90px;
   width: 90px;
   borderRadius: 45px;
   background: ${({ theme }) => theme.colors.yellow};
`