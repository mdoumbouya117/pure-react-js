import React from 'react'
import { useLocation } from 'react-router-dom'
import Character from '../components/Character'
import { getCharacterByUrl, ICharacter } from '../services/characterService'

export default function Characters() {
  const location = useLocation()
  const { state } : any = location
  const [charactersUrl, ] = React.useState<Array<string>>(state.characters)
  const [characters, setCharacters] = React.useState<Array<ICharacter>>([])
  const [charactersLoading, setCharactersLoading] = React.useState(false)

  React.useEffect(() => {

      const getCharacters = async () => {

          setCharactersLoading(false)

          try {
              const responses = await Promise.all(
                charactersUrl.map(
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

  }, [])
 
  return (
    <div>
        <h1>{state.name}</h1>
        {!charactersLoading && characters?.length > 0 ? 
            <ul>
            {characters.map((character: ICharacter, index: number) => (<Character key={index} character={character} />))}
            </ul>
            : <p>Loading ...</p>
        }
    </div>
  )
}
