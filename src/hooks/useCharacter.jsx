import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { characterDetail, cleanDetail } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export const useCharacter = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const character = useSelector((state) => state.characterDetail)

  useEffect(() => {
    dispatch(characterDetail(id))
    return () => dispatch(cleanDetail())
  }, [dispatch, id])

  return character
}
