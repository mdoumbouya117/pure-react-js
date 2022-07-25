import React from 'react'
import { getCharacterByUrl, ICharacter } from '../services/characterService'

interface IProps {
    character: ICharacter
}

export default function Character({ character }: IProps) {
  const { spouse: spouseLink, name, allegiances, died } = character
  const [spouseName, setSpouseName] = React.useState('')

  const colorCode = (id: string = '') => {
    if (id.length === 1) return `00${id}`
    else if (id.length === 2) return `0${id}`
    else return id
  }

  React.useEffect(() => {

    if (spouseLink) getCharacterByUrl(spouseLink)
      .then((spouse: ICharacter) => setSpouseName(spouse.name))
      .catch(error => error)

  }, [spouseLink])

  return (
    <li>
      <p>{name} {died && <>- <span className='color-red'>Died</span></>}</p>
      {spouseLink && <p>Spouse: {spouseName}</p>}
      {allegiances && allegiances.map(
        (allegiance: string, index: number) => (
            allegiance?.split('/')?.at(-1) && 
            <div key={index} className="house-color-block" style={{backgroundColor: `#${colorCode(allegiance.split("/").at(-1))}`}}></div>
          )
        )
      }
    </li>
  )
}
