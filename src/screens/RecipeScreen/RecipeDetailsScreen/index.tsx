import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { CardHero } from '../../../components/CardHero';
import { CustomText } from '../../../components/CustomText';
import { Divider } from '../../../components/Divider';
import { ItemCart } from '../../../components/ItemCart';
import { MainButton } from '../../../components/MainButton';
import { ArrowHeader, Container, Content, Header, HeaderButton, ImageRecipe } from './styles';

const data = [
    {
        "name": "Bacon Sadia defumado fatiado",
        "amount": "200 gramas",
        "image": "https://brf.my.salesforce.com/servlet/servlet.ImageServer?id=0154A000024CgjIQAS&oid=00D410000012TJaEAM"
    },
    {
        "name": "Linguiça Toscana SADIA 950g",
        "amount": "100 gramas",
        "image": "https://www.sadia.com.br/assets/images/_/products/11e16fb2792eb88187c4866fcc336bd5edf2d691.png"
    },
    {
        "name": "Azeite de Oliva Extra Virgem Gallo Vidro",
        "amount": "500 ml",
        "image": "https://www.madrid.com.br/imagens/produtos/big/24218.jpg"
    },
    {
        "name": "Castanha de Caju Torrada e Salgada QUALITÁ",
        "amount": "180 gramas",
        "image": "https://www.clubeextra.com.br/img/uploads/1/840/591840.png"
    },
    {
        "name": "COSTELA SUINA SADIA CONGELADA 1 UNIDADE 1100G - hiperideal",
        "amount": "100 gramas",
        "image": "https://www.paodeacucar.com/img/uploads/1/323/11996323.png"
    }
]

export const RecipeDetailsScreen: React.FC = () => {
    const { goBack } = useNavigation();

    return (
        <Container contentContainerStyle={{ paddingBottom: 20 }}>
            <HeaderButton activeOpacity={.8} onPress={goBack}>
                <ArrowHeader stroke='#757575' />
            </HeaderButton>
            <Header>
                <ImageRecipe
                    source={{ uri: 'https://vapza.vteximg.com.br/arquivos/ids/155604/bowl-feijoada.png' }}
                    resizeMode='cover'
                />
            </Header>
            <CardHero
                userName='@tatimkm'
                image='https://media-exp1.licdn.com/dms/image/C5603AQGmg6nQGWC53Q/profile-displayphoto-shrink_200_200/0/1601475112943?e=1648080000&v=beta&t=jcyX68d7a8Sk3Q9Uiuh0ay4RzRJ-X8dJaiCQH_LK9E0'
            />
            <Content>
                <CustomText
                    weight='bold'
                    size={16}
                >
                    Feijoada Completa (2 pessoas)
                </CustomText>
                <CustomText
                    margin='15px 0'
                >
                    Ingredientes que você não possui:
                </CustomText>
                <Divider />
                <ItemCart
                    name='Azeite de Oliva Extra Virgem Gallo Vidro 500ml'
                    values='Faltam 200 gramas'
                    colorValues='secondary'
                    image='https://m.media-amazon.com/images/I/51Qx+FviOxL._AC_SX679_.jpg'
                />
                <MainButton>Adicionar item</MainButton>
                <CustomText
                    margin='20px 0'
                >
                    Ingredientes utilizados que estão em seu carrinho:
                </CustomText>
                <FlatList
                    keyExtractor={(_, index) => String(index)}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ItemCart
                            name={item.name}
                            values={item.amount}
                            colorValues='green'
                            image={item.image}
                        />
                    )}
                />
                <CustomText
                    margin='20px 0'
                >
                    Modo de preparo:
                </CustomText>
                <CustomText>
                    Separe um uma panela as carnes defumadas (linguiça, bacon, costelinha defumada). Com um fio de azeite frite as carnes.{'\n\n'}
                    Para uma feijoada mais leve, lembre-se de descartar a gordura/óleo das carnes fritas.{'\n\n'}
                    Aproveite a panela maior para compor a sua feijoada. Na nossa receita, aproveitamos a panela do rabo de porco. Assim como a gordura que lá havia (descartamos apenas o excesso).{'\n\n'}
                    Acrescente com a panela quente, os temperos a seu gosto.{'\n\n'}
                    Posteriormente acrescente a castanha de caju.{'\n\n'}
                    Acrescente água, 500 ml aproximadamente e cozinhe o caldo por 20 minutos.{'\n\n'}
                    Se preferir engrossar o caldo, acrescente um pouco de castanhas moídas.{'\n\n'}
                </CustomText>
            </Content>
        </Container>
    );
};