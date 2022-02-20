import React, { ReactNode } from 'react';
import { FlatList, RefreshControlProps } from 'react-native';

type Props = {
	children: ReactNode;
	horizontal?: boolean;
	refreshControl?: React.ReactElement<RefreshControlProps, string>;
};

export const VirtualScrollView: React.FC<Props> = ({
	children,
	horizontal = false,
	refreshControl
}) => {
	return (
		<FlatList
			data={[]}
			keyExtractor={() => 'key'}
			renderItem={null}
			horizontal={horizontal}
			keyboardShouldPersistTaps='handled'
			showsVerticalScrollIndicator={false}
			refreshControl={refreshControl}
			ListHeaderComponent={
				<>{children}</>
			}
		/>
	);
};