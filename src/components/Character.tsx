import React from 'react'
import { ICharacter } from '../services/characterService'

interface IProps {
    character: ICharacter
}

export default function Character(props: IProps) {
  const { character } = props

  return (
    <li>{character.name}</li>
  )
}
