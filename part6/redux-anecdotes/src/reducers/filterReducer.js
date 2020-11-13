const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const setFilter = (string) => {
  return {
    type: 'SET_FILTER',
    filter: string
  }
}

export default filterReducer