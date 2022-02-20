import React from 'react';
import { CustomText } from '../CustomText';
import { Container, HeroContainer, HeroImage } from './styles';

type Props = {
    userName: string;
    image: string;
};

export const CardHero: React.FC<Props> = ({ userName, image }) => {
    return (
        <Container>
            <HeroImage source={{ uri: image }} />
            <HeroContainer>
                <CustomText
                    color='black'
                >
                    Receita por
                    <CustomText color='primary'> {userName}</CustomText>
                </CustomText>
                <CustomText
                    color='grayLight'
                >
                    Essa receita faz parte de nossa comunidade. Aproveite!
                </CustomText>
            </HeroContainer>
        </Container>
    );
};