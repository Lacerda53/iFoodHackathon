import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { CustomText } from '../../components/CustomText';
import { Divider } from '../../components/Divider';
import { ItemCart } from '../../components/ItemCart';
import { MainButton } from '../../components/MainButton';
import { ModalFilter } from '../../components/ModalFilter';
import { ToastBottom } from '../../components/ToastBottom';
import {
    ArrowHeader,
    Container,
    Content,
    MarketPlaceContainer,
    MarketPlaceImage
} from './styles';

export const BagScreen: React.FC = () => {
    const modalizeRef = useRef<Modalize>(null);
    const { setOptions } = useNavigation();

    const onOpen = () => {
        modalizeRef.current?.open();
    };

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
        <>
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
                        contentContainerStyle={{ paddingBottom: 230 }}
                        ListFooterComponent={<MainButton isOutline>Adicionar mais itens</MainButton>}
                        renderItem={({ item }) => (
                            <ItemCart
                                name='Azeite de Oliva Extra Virgem Gallo Vidro 500ml'
                                values='R$ 25,00'
                                colorValues='green'
                                image='https://m.media-amazon.com/images/I/51Qx+FviOxL._AC_SX679_.jpg'
                            />
                        )}
                    />
                    <Divider />
                </Content>
                <ToastBottom />
                <MainButton isFooter onPress={onOpen}>
                    Continuar
                </MainButton>
            </Container>
            <ModalFilter modalizeRef={modalizeRef} />
        </>
    );
};