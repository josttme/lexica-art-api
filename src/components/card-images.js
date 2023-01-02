import { LitElement, html, unsafeCSS } from 'lit'
import { registerImage } from '../utils/lazyLoading'
import imageTransparent from '/transparent.png'
import cardImage from '../styles/components/card-image.scss?inline'

class CardImages extends LitElement {
	static properties = {
		img: {},
		width: {},
		height: {},
	}
	static styles = [unsafeCSS(cardImage)]
	async firstUpdated() {
		const img = this.renderRoot?.querySelector('img') ?? null
		registerImage(img)
	}
	render() {
		//prettier-ignore
		return html`
			<img
				class="skeleton"
				src=${imageTransparent}
				width=${this.width}
				height=${this.height}
				data-src=${this.img}
				alt="Lexica image"
			/>
		`
	}
}
customElements.define('card-images', CardImages)
