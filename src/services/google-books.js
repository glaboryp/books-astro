export const getBooks = async () => {
	const result = await fetch(`
		https://www.googleapis.com/books/v1/volumes?
		q=una
		&langRestrict=es
		&printType=books
		&orderBy=relevance
		&maxResults=30
		&key=${import.meta.env.BOOK_API_SECRET}
	`)
	const books = await result.json()
	return books.items
}

export const getBookBy = async ({ id }) => {
	const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${import.meta.env.BOOK_API_SECRET}`)
	const book = await result.json()
	return book.volumeInfo
}
