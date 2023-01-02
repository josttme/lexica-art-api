export function getSearchWords() {
	if (location.pathname.startsWith('/lexica-art-api/search=')) {
		const [_, searchWords] = location.pathname.split('=')
		return delete20Url(searchWords)
	} else {
		return 'cat elegant'
	}
}
export function delete20Url(query) {
	return query.replace(/%20/g, ' ')
}

export function createCardsImages(images) {
	return images.map(
		(image) => `
		<card-images
			width=${image.width}
			height=${image.height}
			img=${image.srcSmall}
		></card-images>`
	)
}
