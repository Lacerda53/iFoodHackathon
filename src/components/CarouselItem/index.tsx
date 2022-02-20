import { useLinkProps, useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../CustomText';
import {
   Container,
   ImageItem,
   MainContent
} from './styles';

type Props = {
   index: number;
   disabled?: boolean;
}

export const CarouselItem: React.FC<Props> = ({ index, disabled }) => {
   const { navigate } = useNavigation();

   return (
      <Container disabled={disabled} activeOpacity={.8} onPress={()=> navigate('RecipeDetailsScreen')}>
         <MainContent index={index}>
            <ImageItem
               source={{ uri: 'https://vapza.vteximg.com.br/arquivos/ids/155604/bowl-feijoada.png' }}
               resizeMode='contain'
            />
         </MainContent>
         <CustomText
            align='center'
            color='gray'
         >
            Frango à parmegiana
         </CustomText>

      </Container>
   );
};