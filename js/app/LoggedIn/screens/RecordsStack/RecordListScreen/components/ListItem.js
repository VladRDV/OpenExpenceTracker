import React from 'react';
import { AnimatableManager, ThemeManager, Colors, BorderRadiuses, ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line
import { StyleSheet, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function RecordListScreen ({ data }) {
	const statusColor = data.type === 'inc' ? Colors.green30 : Colors.red30;
	const animationProps = AnimatableManager.presets.fadeInRight;
	const imageAnimationProps = AnimatableManager.getRandomDelay();
	console.log(data, 'DDDDDD');
	return (
		<Animatable.View {...animationProps}>
			<ListItem activeBackgroundColor={Colors.dark60} activeOpacity={0.3} height={60} onPress={() => Alert.alert(`pressed on record`)}>
				<ListItem.Part left>
					<Animatable.Image
						source={{ uri: 'https://pbs.twimg.com/profile_images/2783430299/5134cbf0a710d3e58862bba85db46027_400x400.png' }}
						style={_s.image}
						{...imageAnimationProps}
					/>
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
						<Text text90 color={statusColor} numberOfLines={1}>
							{data.title}
						</Text>
					</ListItem.Part>
				</ListItem.Part>
			</ListItem>
		</Animatable.View>
	);
}

const _s = StyleSheet.create({
	image: {
		width: 54,
		height: 54,
		borderRadius: BorderRadiuses.br20,
		marginHorizontal: 14
	},
	border: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: ThemeManager.dividerColor
	}
});
