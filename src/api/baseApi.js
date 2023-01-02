export async function getImagesFromLexicaArtApi(searchWords) {
	const res = await fetch(`https://lexica.art/api/v1/search?q=${searchWords}`)
	const data = await res.json()
	return data.images
}
