import React from 'react';
import { CustomText } from '../CustomText';
import { Divider } from '../Divider';
import { Container, Content, ItemImage } from './styles';

type Props = {
    name: string;
    image: string;
    colorValues: string;
    values: string;
};

export const ItemCart: React.FC<Props> = ({
    name,
    image,
    colorValues,
    values
}) => {
    return (
        <>
            <Container>
                <Content>
                    <CustomText
                    >
                        {name}
                    </CustomText>
                    <CustomText
                        weight='light'
                        color={colorValues}
                        margin='20px 0 0 0 '
                    >
                        {values}
                    </CustomText>
                </Content>
                <ItemImage
                    source={{ uri: image }}
                    resizeMode='contain'
                />
            </Container>
            <Divider />
        </>
    );
};