import { LitElement, html, unsafeCSS } from 'lit'
import { goTo } from '../router'
import search from '../styles/components/search.scss?inline'

class searchComponent extends LitElement {
	static styles = [unsafeCSS(search)]
	render() {
		return html`
			<div>
				<input type="search" placeholder="Search for an image" />
				<button @click=${this.onClick} type="button" title="Search">
					<svg
						focusable="false"
						xmlns="http://www.w3.org/2000/svg"
						fill="rgba(255, 255, 255, 0.6)"
						width="25px"
						viewBox="0 0 24 24"
					>
						<path
							d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
						></path>
					</svg>
				</button>
			</div>
		`
	}
	firstUpdated() {
		this.inputSearch.addEventListener('keyup', (e) => {
			e.stopPropagation()
			if (e.key === 'Enter') {
				this.searchValur()
			}
		})
		window.addEventListener('keydown', (e) => {
			if (e.keyCode == 13) {
				this.inputSearch.focus()
			}
		})
	}
	get inputSearch() {
		return this.renderRoot?.querySelector('input') ?? null
	}
	onClick = (e) => {
		e.preventDefault()
		this.searchValur()
	}
	searchValur() {
		if (this.inputSearch.value.trim()) {
			goTo(`search=${this.inputSearch.value}`)
			this.inputSearch.value = ''
		}
	}
}
customElements.define('seacrh-component', searchComponent)
