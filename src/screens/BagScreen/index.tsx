import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomText } from '../../components/CustomText';
import { Divider } from '../../components/Divider';
import { ItemCart } from '../../components/ItemCart';
import { MainButton } from '../../components/MainButton';
import { ToastBottom } from '../../components/ToastBottom';
import {
    ArrowHeader,
    Container,
    Content,
    MarketPlaceContainer,
    MarketPlaceImage
} from './styles';

export const BagScreen: React.FC = () => {
    const { setOptions } = useNavigation();

    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity>
                    <ArrowHeader />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <CustomText
                        color='primary'
                        margin='0 18px'
                    >
                        Limpar
                    </CustomText>
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <Container>
            <Content>
                <MarketPlaceContainer>
                    <MarketPlaceImage
                        source={require('../../assets/marketplace.png')}
                        resizeMode='cover'
                    />
                    <CustomText
                        size={18}
                        color='black'
                    >
                        Mercado Parceiro
                    </CustomText>
                </MarketPlaceContainer>
                <CustomText
                    color='black'
                >
                    Alimentos Básicos
                </CustomText>
                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={[0, 0, 0, 0, 0, 0]}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    renderItem={({ item }) => <ItemCart />}
                    ListFooterComponent={<MainButton isOutline>Adicionar mais itens</MainButton>}
                />
                <Divider />
            </Content>
            <ToastBottom />
            <MainButton isFooter>
                Continuar
            </MainButton>
        </Container>
    );
};