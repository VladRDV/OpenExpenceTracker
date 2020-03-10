import React from 'react';
import { AnimatableManager, ThemeManager, Colors, BorderRadiuses, ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line
import { StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RecordListScreen ({ data, condition, typeFilterMode }) {
	const typeColor = data.type === 'inc' ? Colors.green30 : Colors.red30;
	const fadeIn = AnimatableManager.presets.fadeIn;
	// const fadeOut = AnimatableManager.presets.fadeOut;
	// const _out = {
	// 	0: {
	// 		opacity: 1,
	// 		// scale: 1,
	// 		height: scale(70)
	// 	},
	// 	1: {
	// 		opacity: 0,
	// 		// scale: 0,
	// 		height: 0
	// 	}
	// };
	// const _in = {
	// 	0: {
	// 		opacity: 0,
	// 		// scale: 0,
	// 		height: 0
	// 	},
	// 	1: {
	// 		opacity: 1,
	// 		// scale: 1,
	// 		height: scale(70)
	// 	}
	// };
	// console.log(fadeIn, fadeOut, 'GGGGGGGGGGG');
	// const animation = condition ? _in : _out;
	// const imageAnimationProps = AnimatableManager.getRandomDelay();
	const arrow = data.type === 'inc' ? 'arrowup' : 'arrowdown';
	const arrowColor = data.type === 'inc' ? 'lightgreen' : 'tomato';
	if (condition) {
		return (
			<Animatable.View {...fadeIn}>
				<ListItem activeBackgroundColor={Colors.dark60} height={scale(70)} activeOpacity={0.3} onPress={() => Alert.alert(`pressed on record`)}>
					<ListItem.Part left>
						<AntDesign style={_s.arrow} name={arrow} size={scale(30)} color={arrowColor} />
					</ListItem.Part>
					<ListItem.Part middle column containerStyle={[ _s.border, { paddingRight: 17 } ]}>
						<ListItem.Part containerStyle={{ marginBottom: 3 }}>
							<Text dark10 text70 style={{ flex: 1, marginRight: 10 }} numberOfLines={1}>
								{data.type}
							</Text>
							<Text dark10 text70 style={{ marginTop: 2 }}>
								{data.ammount}
							</Text>
						</ListItem.Part>
						<ListItem.Part>
							<Text style={{ flex: 1, marginRight: 10 }} text90 dark40 numberOfLines={1}>
								{data.date}
							</Text>
							<Text text90 color={typeColor} numberOfLines={1}>
								{data.title}
							</Text>
						</ListItem.Part>
					</ListItem.Part>
				</ListItem>
			</Animatable.View>
		);
	} else {
		return null;
	}
}

const _s = StyleSheet.create({
	arrow: {
		width: scale(30),
		height: scale(30),
		marginHorizontal: 14
	},
	border: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: ThemeManager.dividerColor
	}
});
