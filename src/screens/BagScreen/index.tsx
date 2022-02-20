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

const data = [
    {
        "name": "`Filé de peito de frango",
        "amount": "1kg",
        "image": "https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=0154A000024CgjIQAS&oid=00D410000012TJaEAM",
        "price": "R$ 25,26"
    },
    {
        "name": "Alho",
        "amount": "100g",
        "image": "https://www.sadia.com.br/assets/images/_/products/11e16fb2792eb88187c4866fcc336bd5edf2d691.png",
        "price": "R$ 25,26"
    },
    {
        "name": "Sal Refinado Cisne Tradicional 1kg",
        "amount": "100 gramas",
        "image": "https://superprix.vteximg.com.br/arquivos/ids/174164-600-600/Sal-Refinado-Cisne-Tradicional-1kg.png?v=636185196802030000",
        "price": "R$ 25,26"
    },
    {
        "name": "Pimenta do Reino Preta em Pó KITANO Pacote 50g",
        "amount": "50 gramas",
        "image": "https://static.clubeextra.com.br/img/uploads/1/150/592150.png",
        "price": "R$ 25,26"
    },
    {
        "name": "Maionese Quero Pote 495g",
        "amount": "100 gramas",
        "image": "https://static.clubeextra.com.br/img/uploads/1/222/3391222.png",
        "price": "R$ 25,26"
    },
    {
        "name": "Farinha de Rosca YOKI Pacote 500g",
        "amount": "200 gramas",
        "image": "https://www.paodeacucar.com/img/uploads/1/144/581144.png",
        "price": "R$ 25,26"
    },
    {
        "name": "Molho de Tomate Tradicional Heinz Sachê 340g",
        "amount": "100 gramas",
        "image": "https://static.paodeacucar.com/img/uploads/1/723/13127723.png",
        "price": "R$ 25,26"
    },
    {
        "name": "QUEIJO MUSSARELA FATIADO 150G",
        "amount": "100 gramas",
        "image": "https://www.italac.com.br/wp-content/uploads/2018/04/AF-3D-ITALAC-FATIADOS-MUSSARELA-150g-AJ1-SIMPL.png",
        "price": "R$ 25,26"
    }
]

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
                        data={data}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 230 }}
                        ListFooterComponent={<MainButton isOutline>Adicionar mais itens</MainButton>}
                        renderItem={({ item }) => (
                            <ItemCart
                                name={item.name}
                                values={item.price}
                                colorValues='green'
                                image={item.image}
                            />
                        )}
                    />
                    <Divider />
                </Content>
                <ToastBottom />
                <MainButton isFooter>
                    Continuar
                </MainButton>
            </Container>
        </>
    );
};