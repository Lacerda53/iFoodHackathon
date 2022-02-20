import React from 'react';
import { CustomText } from '../CustomText';
import { Divider } from '../Divider';
import { Container, Content, ItemImage } from './styles';

export const ItemCart: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <CustomText
                        size={16}
                    >
                        Azeite de Oliva Extra Virgem Gallo Vidro 500ml
                    </CustomText>
                    <CustomText
                        size={16}
                        weight='light'
                        color='green'
                        margin='20px 0 0 0 '
                    >
                        R$ 25,26
                    </CustomText>
                </Content>
                <ItemImage
                    source={{ uri: 'https://a-static.mlcdn.com.br/1500x1500/azeite-de-oliva-gallo-classico-extravirgem-500ml/magazineluiza/225388400/fd43d8b63bd9bab3a7274ec84fc5afa0.jpg' }}
                    resizeMode='cover'
                />
            </Container>
            <Divider />
        </>
    );
};