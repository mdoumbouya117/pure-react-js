const BOOKS_API_URL = 'https://www.anapioficeandfire.com/api/books'

export interface IBook {
    url: string,
    name: string,
    isbn: string,
    authors: Array<string>,
    numberOfPages: number,
    publisher: string,
    country: string,
    mediaType: string,
    released: string,
    characters: Array<string>,
    povCharacters: Array<string>
}

export const getBooks = async () : Promise<Array<IBook>> => {

    return await fetch(BOOKS_API_URL)
        .then(response => response.json())
        .then(response => response)
}