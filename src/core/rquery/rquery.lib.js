class RQuery {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)
			if (!this.element) {
				throw new Error(`element ${selector} not found`)
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}
	}

	/**
	 * @param {string} selector
	 * @returns {RQuery}
	 */
	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found`)
		}
	}
	/**
	 * @param {string} property - The CSS property set
	 * @param {string} value - The value to set for the CSS property.
	 * @returns {RQuery} The current RQuery instance for chaining
	 */
	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('Property and value must be strings')
		}
		this.element.style[property] = value
		return this
	}
}

/**
 * @param {string | HTMLElement} selector
 * @returns {RQuery}
 */
export function $R(selector) {
	return new RQuery(selector)
}
