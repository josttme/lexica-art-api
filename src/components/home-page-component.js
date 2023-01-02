import { LitElement, html, css, unsafeCSS } from 'lit'
import { getSearchWords } from '../utils'
import { getImagesFromLexicaArtApi } from '../api/baseApi'
import { createCardsImages } from '../utils'
import homePage from '../styles/components/home-page.scss?inline'
class MoviePage extends LitElement {
	static styles = [unsafeCSS(homePage)]
	async firstUpdated() {
		const searchWords = getSearchWords()
		const title = this.renderRoot?.querySelector('span') ?? null
		const contentImages = this.renderRoot?.querySelector('section') ?? null
		const seeMoreImages = this.renderRoot?.querySelector('a') ?? null
		title.innerText = `Results for: "${searchWords}"`
		// Get images from API
		const getImages = await getImagesFromLexicaArtApi(searchWords)
		const cardsImages = createCardsImages(getImages)
		contentImages.insertAdjacentHTML('beforeend', cardsImages.join(' '))
		seeMoreImages.innerText = `See more images of "${searchWords}" on the official page`
		seeMoreImages.setAttribute('href', `https://lexica.art/?q=${searchWords.replace(/ /g, '+')}`)
	}
	render() {
		return html`
			<span></span>
			<section></section>
			<a target="_blank"></a>
		`
	}
}
customElements.define('home-page-component', MoviePage)
