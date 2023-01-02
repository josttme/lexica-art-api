import appConstants from '../common/constants'
import Route from 'route-parser'
import { homeSearchPage } from '../utils/navigator'
const baseUrl = import.meta.env.BASE_URL
import HomePage from '../pages/home.template'

export const routes = {
	Main: new Route(appConstants.routes.home),
	Search: new Route(appConstants.routes.search),
}

// prettier-ignore
export const render = (path) => {
	routes.Main.match(path) || path.startsWith(routes.Search.spec)
		? homeSearchPage(HomePage())
		: '<h1>Error</h1>'
}

export const goTo = (path) => {
	path = baseUrl === path ? baseUrl : baseUrl + path
	if (location.pathname !== path) {
		window.history.pushState({ path }, path, path)
		render(path)
	} else {
		window.history.replaceState({ path }, path, path)
	}
}

export const getRouterParams = () => {
	const url = new URL(window.location.href).pathname
	return getPathRoute(url)
}

const initRouter = () => {
	window.addEventListener('popstate', (e) => {
		render(new URL(window.location.href).pathname)
	})
	document.querySelectorAll('[href^="/"]').forEach((el) => {
		el.addEventListener('click', (env) => {
			env.preventDefault()
			const { pathname: path } = new URL(env.target.href)
			goTo(path)
		})
	})
	render(new URL(window.location.href).pathname)
}

export default initRouter
