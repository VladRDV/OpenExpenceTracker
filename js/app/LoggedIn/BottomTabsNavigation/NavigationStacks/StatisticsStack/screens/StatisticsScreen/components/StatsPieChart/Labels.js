import React, { useState } from 'react';
import { Text as SVGText } from 'react-native-svg';
import _c from 'js/uiConfig/colors';
import { scale } from 'react-native-size-matters';

export default function Labels ({ slices, height, width }) {
	return slices.map((slice, index) => {
		const { labelCentroid, pieCentroid, data } = slice;
		return (
			<SVGText
				key={index}
				x={pieCentroid[0]}
				y={pieCentroid[1]}
				fill={_c.white}
				textAnchor={'middle'}
				alignmentBaseline={'middle'}
				fontSize={scale(14)}
				stroke={_c.white}
				strokeWidth={1}>
				{data.amount}
			</SVGText>
		);
	});
}
