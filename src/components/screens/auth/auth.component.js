import { BaseScreen } from '@/core/router/component/base-screen.component'

export class Auth extends BaseScreen {
	constructor() {
		super({ title: 'Auth' })
	}
	render() {
		return '<p>Auth</p>'
	}
}
