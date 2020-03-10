import { Colors, Typography, Spacings } from 'react-native-ui-lib';
import { scale } from 'react-native-size-matters';
Colors.loadColors({
	primaryColor: '#2364AA',
	secondaryColor: '#81C3D7',
	textColor: '##221D23',
	errorColor: '#E63B2E',
	successColor: '#ADC76F',
	warnColor: '##FF963C'
});

Typography.loadTypographies({
	heading: { fontSize: scale(36), fontWeight: '600' },
	subheading: { fontSize: scale(28), fontWeight: '500' },
	body: { fontSize: scale(18), fontWeight: '400' }
});

Spacings.loadSpacings({
	page: scale(20),
	card: scale(12),
	gridGutter: scale(16)
});
