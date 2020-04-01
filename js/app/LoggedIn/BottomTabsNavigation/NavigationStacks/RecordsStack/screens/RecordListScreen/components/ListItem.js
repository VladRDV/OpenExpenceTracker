import React, { useCallback } from 'react';
import { ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import _c from 'js/uiConfig/colors';

export default function RecordListScreen ({ data, condition, isInSelectDeleteMode, isSelected }) {
	const typeColor = data.type === 'inc' ? _c.green : _c.red;
	let renderSymbol = useCallback(() => {
		const arrow = data.type === 'inc' ? 'arrowup' : 'arrowdown';
		if (isInSelectDeleteMode) {
			const checkbox = isSelected ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline';
			return <MaterialCommunityIcons style={_s.icon} name={checkbox} size={scale(30)} color={_c.gold} />;
		} else {
			return <AntDesign style={_s.icon} name={arrow} size={scale(30)} color={typeColor} />;
		}
	}, []);
	if (condition) {
		return (
			<ListItem activeBackgroundColor={_c.white} height={scale(70)} activeOpacity={0.3}>
				<ListItem.Part left containerStyle={_s.border}>
					{renderSymbol()}
				</ListItem.Part>
				<ListItem.Part middle column containerStyle={{ ..._s.border, paddingRight: scale(17) }}>
					<ListItem.Part containerStyle={_s.titleAmmount}>
						<Text dark10 text70 style={_s.title} numberOfLines={1}>
							{data.title}
						</Text>
						<Text dark10 text70 style={_s.mt}>
							{data.ammount}
						</Text>
					</ListItem.Part>
					<ListItem.Part>
						<Text style={_s.date} text90 dark40 numberOfLines={1}>
							{data.date}
						</Text>
						<Text text90 color={typeColor} numberOfLines={1}>
							{data.category}
						</Text>
					</ListItem.Part>
				</ListItem.Part>
			</ListItem>
		);
	} else {
		return null;
	}
}

const _s = ScaledSheet.create({
	icon: {
		width: '30@s',
		height: '30@s',
		marginHorizontal: '14@sr'
	},
	titleAmmount: {
		marginBottom: '3@sr'
	},
	mid: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: _c.grey
	},
	date: {
		flex: 1,
		marginRight: '10@s'
	},
	mt: {
		marginTop: '2@sr'
	},
	title: {
		flex: 1,
		marginRight: '10@sr'
	}
});
