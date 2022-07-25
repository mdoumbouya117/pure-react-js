import React from 'react'
import { useLocation } from 'react-router-dom'
import Character from '../components/Character'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import { getCharacterByUrl, ICharacter } from '../services/characterService'

export default function Characters() {
  const CHARACTER_PER_PAGE = 10  
  const location = useLocation()
  const { state } : any = location
  const [charactersUrl, ] = React.useState<Array<string>>(state.characters)
  const [characters, setCharacters] = React.useState<Array<ICharacter>>([])
  const [charactersLoading, setCharactersLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const paginationCount = Math.ceil(charactersUrl.length / CHARACTER_PER_PAGE)

  React.useEffect(() => {

      const getCharacters = async () => {

          setCharactersLoading(false)

          try {
              const responses = await Promise.all(
                charactersUrl.slice(CHARACTER_PER_PAGE*(page-1), CHARACTER_PER_PAGE*page).map(
                    characterUrl => getCharacterByUrl(characterUrl)
                    .then(response => response)
                    .catch(error => error)
                )
              )
              .then(response => response)
              .catch(error => error)

              setCharacters(responses)              
          } catch (error) {
              // LOG ERROR
              return error
          }

          setCharactersLoading(false)
      }

      getCharacters()

  }, [page, charactersUrl])
 
  return (
    <div>
        <h1>{state.name}</h1>
        {!charactersLoading && characters?.length > 0 ? 
            <>
                <ul className='character-list'>
                    {characters.map((character: ICharacter, index: number) => (<Character key={index} character={character} />))}
                </ul>
                <Pagination count={paginationCount} setPage={setPage}/>
            </>
            : <Loader />
        }
    </div>
  )
}
