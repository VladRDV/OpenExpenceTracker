import React from 'react';
import { AnimatableManager, ThemeManager, Colors, BorderRadiuses, ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line
import { StyleSheet } from 'react-native';

export default function RecordListScreen ({ data }) {
	// const data = [ { date: '20-12-2020', ammount: '120%', type: 'inc', title: 'payday' } ];
	return (
		<Animatable.View {...animationProps}>
			<ListItem activeBackgroundColor={Colors.dark60} activeOpacity={0.3} height={77.5} onPress={() => Alert.alert(`pressed on order #${id + 1}`)}>
				<ListItem.Part left>
					<Animatable.Image
						source={{ uri: 'https://pbs.twimg.com/profile_images/2783430299/5134cbf0a710d3e58862bba85db46027_400x400.png' }}
						style={styles.image}
						{...imageAnimationProps}
					/>
				</ListItem.Part>
				<ListItem.Part middle column containerStyle={[ styles.border, { paddingRight: 17 } ]}>
					<ListItem.Part containerStyle={{ marginBottom: 3 }}>
						<Text dark10 text70 style={{ flex: 1, marginRight: 10 }} numberOfLines={1}>
							{row.name}
						</Text>
						<Text dark10 text70 style={{ marginTop: 2 }}>
							{row.formattedPrice}
						</Text>
					</ListItem.Part>
					<ListItem.Part>
						<Text style={{ flex: 1, marginRight: 10 }} text90 dark40 numberOfLines={1}>
							{data.date}
						</Text>
						<Text text90 color={statusColor} numberOfLines={1}>
							{data.ammount}
						</Text>
					</ListItem.Part>
				</ListItem.Part>
			</ListItem>
		</Animatable.View>
	);
}

const _s = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1
	},
	filter: {
		flex: 0.08,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'red'
	},
	list: {
		flex: 0.92,
		backgroundColor: 'indigo'
	}
});
