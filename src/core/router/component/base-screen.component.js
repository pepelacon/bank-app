import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance.
	 * @param {Object} options - The options for BAseScreen
	 * @param {string} options.title - The title for screen
	 */
	constructor({ title }) {
		document.title = getTitle(title)
	}
	/**
	 * Render child component
	 * @returns {HTMLElement} 
	 
	 */
	render() {
		throw new Error('Render method must be implemented in the child class')
	}
}
