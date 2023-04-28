import { ADD_FAV, REMOVE_FAV, REMOVE_ALL_FAV, CHARACTER_DETAIL, FILTER, ORDER, RESET, CLEAN_FILTER } from './action-types'
import axios from 'axios'
import { URL_BASE } from '../utils/api.js'
// API_KEY not used

export const addFav = (character) => {
  const endpoint = URL_BASE + 'fav'
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data
      })
    })
  }
}

export const removeFav = (id) => {
  const endpoint = URL_BASE + 'fav/' + id
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data
      })
    })
  }
}

export const removeAllFav = () => {
  const endpoint = URL_BASE + 'fav/all'
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_ALL_FAV,
        payload: data
      })
    })
  }
}

export const characterDetail = (id) => {
  return function (dispatch) {
    axios(URL_BASE + 'character/' + id)
      .then(response => {
        dispatch({
          type: CHARACTER_DETAIL,
          payload: response.data
        })
      }
      )
  }
}

export const cleanDetail = () => ({
  type: 'CLEAN_DETAIL'
})

export const filter = (gender) => ({
  type: FILTER,
  payload: gender
})

export const order = (order) => ({
  type: ORDER,
  payload: order
})

export const reset = () => ({
  type: RESET
})

export const cleanFilter = () => ({
  type: CLEAN_FILTER
})
