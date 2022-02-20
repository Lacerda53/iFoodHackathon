import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CarouselItem } from '../../components/CarouselItem';
import { CustomText } from '../../components/CustomText';
import {
    Container,
    Content,
    FilterButton,
    FilterIcon
} from './styles';

export const RecipeScreen: React.FC = () => {
    return (
        <Container>
            <Content>
                <CustomText
                    color='black'
                    size={28}
                    margin='0 0 32px 0'>
                    Receitas com a cara do seu carrinho
                </CustomText>
                <FilterButton>
                    <CustomText>
                        Filtros
                    </CustomText>
                    <FilterIcon>
                    </FilterIcon>
                </FilterButton>
                <CustomText
                    color='black'
                    size={18}
                    margin='0 0 20px 0'>
                    Faça Hoje Mesmo
                </CustomText>

                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={[0, 0, 0, 0, 0, 0]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CarouselItem />}>
                </FlatList>

                <CustomText
                    color='black'
                    size={18}
                    margin='0 0 20px 0'>
                    Falta Pouco
                </CustomText>

                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={[0, 0, 0, 0, 0, 0]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => <CarouselItem index={index} />}>
                    <CarouselItem>Frango à Parmegiana</CarouselItem>
                </FlatList>
            </Content>
        </Container>
    );
};