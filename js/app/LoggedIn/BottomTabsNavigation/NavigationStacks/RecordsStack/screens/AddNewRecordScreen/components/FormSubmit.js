import React from 'react';
import { Button } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';

import _c from 'js/uiConfig/colors';

export default function FormSubmit ({ toggleStatusBarStyle, arr, select, toggle, statusBarIsLight }) {
	return (
		<Button
			backgroundColor={_c.blue}
			label="Save"
			labelStyle={{ fontWeight: '600' }}
			style={{ width: '80%', alignSelf: 'center' }}
			enableShadow
			// ref={(element) => (this.button_1 = element)}
			// onPress={() => this.showSnippet(this.button_1)}
		/>
	);
}
