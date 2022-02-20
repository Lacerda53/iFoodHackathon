import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../CustomText';
import {
   Container,
   MainContent
} from './styles';

export type Props = {
   index?: number;
   imgPath?: string;
   cardTxt?: string;

}

export const CarouselItem: React.FC<Props> = ({ children, ...rest}) => {
   return (
      <Container >
         <MainContent {...rest}/>
         <CustomText
            align='center'
            color='gray'
         >
            {children}
         </CustomText>

      </Container>
   );
};