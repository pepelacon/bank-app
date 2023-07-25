import { COLORS } from '@/config/colors.config'

class ValidationService {
	constructor() {
		this.errorBorderTimeout = {}
	}

	showError(error, timeout = 2000) {
		Element.css('border-color', COLORS.error)

		if (this.errorBorderTimeout[element]) {
			clearTimeout(this.errorBorderTimeout[element])
		}

		this.errorBorderTimeout[element] = setTimeout(() => {
			element.css('border-color', '')
		}, timeout)
	}
}

export default new ValidationService()
