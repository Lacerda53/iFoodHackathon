import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomText } from '../CustomText';
import {
    ButtonCard,
    Container,
    Content,
    Icon
} from './styles';

export const ToastBottom: React.FC = () => {
    const { navigate } = useNavigation();

    function navigateToRecipeScreen(){

        navigate('RecipeScreen');
    }

    return (
        <Container>
            <ButtonCard activeOpacity={.8} onPress={navigateToRecipeScreen}>
                <Icon />
                <Content>
                    <CustomText>
                        Receitas com a cara do seu carrinho
                    </CustomText>
                    <CustomText
                        weight='light'
                        margin='5px 0 0 0 '
                        color='grayLight'
                    >
                        Descubra os pratos que você consegue fazer com esses itens!
                    </CustomText>
                </Content>
            </ButtonCard>
        </Container>
    );
};