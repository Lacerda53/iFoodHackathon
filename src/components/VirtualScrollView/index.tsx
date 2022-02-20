import React, { ReactNode } from 'react';
import { FlatList, RefreshControlProps, StyleProp, ViewStyle } from 'react-native';

type Props = {
	children: ReactNode;
	horizontal?: boolean;
	contentContainerStyle?: StyleProp<ViewStyle>;
	refreshControl?: React.ReactElement<RefreshControlProps, string>;
};

export const VirtualScrollView: React.FC<Props> = ({
	children,
	horizontal = false,
	contentContainerStyle,
	refreshControl
}) => {
	return (
		<FlatList
			data={[]}
			keyExtractor={() => 'key'}
			renderItem={null}
			horizontal={horizontal}
			contentContainerStyle={contentContainerStyle}
			keyboardShouldPersistTaps='handled'
			showsVerticalScrollIndicator={false}
			refreshControl={refreshControl}
			ListHeaderComponent={
				<>{children}</>
			}
		/>
	);
};