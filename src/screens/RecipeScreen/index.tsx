import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { CarouselItem } from '../../components/CarouselItem';
import { CustomText } from '../../components/CustomText';
import { ModalFilter } from '../../components/ModalFilter';
import {
    Container,
    Content,
    FilterButton,
    FilterIcon,
    ArrowHeader
} from './styles';

export const RecipeScreen: React.FC = () => {
    const { setOptions, goBack } = useNavigation();
    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={goBack}>
                    <ArrowHeader />
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <>
            <Container>
                <Content>
                    <CustomText
                        size={20}
                        margin='0 0 25px 0'>
                        Receitas com a cara do seu carrinho
                    </CustomText>
                    <FilterButton activeOpacity={.8} onPress={onOpen}>
                        <CustomText>
                            Filtros
                        </CustomText>
                        <FilterIcon />
                    </FilterButton>
                    <CustomText
                        color='black'
                        margin='0 0 10px 0'>
                        Faça Hoje Mesmo
                    </CustomText>
                </Content>

                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={[0, 0, 0, 0, 0, 0]}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 18 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <CarouselItem index={index} />}>
                </FlatList>

                <Content>
                    <CustomText
                        color='black'
                        margin='0 0 10px 0'>
                        Falta Pouco
                    </CustomText>
                </Content>

                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={[0, 0, 0, 0, 0, 0]}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 18 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <CarouselItem index={index} disabled />
                    )}>
                </FlatList>
            </Container>
            <ModalFilter modalizeRef={modalizeRef} />
        </>
    );
};