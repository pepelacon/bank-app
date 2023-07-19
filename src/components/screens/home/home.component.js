import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
// import { Field } from '../../ui/field/field.component'

import { Field } from '@/components/ui/field/field.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'
// import { UserItem } from '@/components/ui/user-item/user-item.component'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'mwerg',
					placeholder: 'Enter email',
					variant: 'green'
				}),
				new UserItem(
					{
						avatarPath:
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34hPo9zGkYxB2NKePgvPeImdm-CDTsHPrt4DFUyU_4A&s',
						name: 'Daniel'
					},
					false,
					() => alert('hey')
				)
			],
			styles
		)

		$R(element).find('h1').css('color', 'green')

		return element
	}
}
