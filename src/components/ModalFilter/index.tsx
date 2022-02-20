import React, { Ref } from 'react';
import { Dimensions } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { Container } from './styles';

const { height } = Dimensions.get('window');

type Props = ModalizeProps & {
    modalizeRef: Ref<Modalize>
};

export const ModalFilter: React.FC<Props> = ({ modalizeRef, ...rest }) => {
    return (
        <Modalize
            ref={modalizeRef}
            modalHeight={height / 2}
            scrollViewProps={{
                showsVerticalScrollIndicator: false,
                stickyHeaderIndices: [0],
            }}
            {...rest}
        >
            <Container>

            </Container>
        </Modalize>
    );
};