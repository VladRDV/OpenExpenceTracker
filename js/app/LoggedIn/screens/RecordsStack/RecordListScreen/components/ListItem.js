import React from 'react';
import { AnimatableManager, Colors, ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line
import * as Animatable from 'react-native-animatable';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import _c from '../../../../../../uiConfig/colors';
export default function RecordListScreen ({ data, condition, typeFilterMode }) {
	const typeColor = data.type === 'inc' ? _c.lGreen : _c.tomato;
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
	const arrowColor = data.type === 'inc' ? _c.lGreen : _c.tomato;
	if (condition) {
		return (
			<Animatable.View {...fadeIn}>
				<ListItem activeBackgroundColor={_c.white} height={scale(70)} activeOpacity={0.3}>
					<ListItem.Part left containerStyle={_s.border}>
						<AntDesign style={_s.arrow} name={arrow} size={scale(30)} color={arrowColor} />
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
			</Animatable.View>
		);
	} else {
		return null;
	}
}

const _s = ScaledSheet.create({
	arrow: {
		width: '30@s',
		height: '30@s',
		marginHorizontal: '14@sr'
	},
	titleAmmount: {
		marginBottom: '3@sr'
	},
	mid: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: _c.lGrey
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
