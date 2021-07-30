import React, { Children, Fragment } from 'react'
import { View, Dimensions } from 'react-native'
import { PagesProps } from '../../types'

const Pages = ({ children, loop, pageSize }: PagesProps) => {
	let pages = Children.toArray(children)

	if (loop && pages.length > 1) {
		pages.unshift(pages[pages.length - 1])
		pages.push(pages[1])
	}

	return (
		<Fragment>
			{pages.map((child, index) => (
				<View key={index} style={{ width: pageSize }}>
					{child}
				</View>
			))}
		</Fragment>
	)
}
Pages.defaultProps = {
	pageSize: Dimensions.get('window').width,
	loop: true
}

export default Pages
