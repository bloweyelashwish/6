const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 }
    case 'ok':
      return { ...state, ok: state.ok + 1 }
    case 'bad':
      return { ...state, bad: state.bad + 1 }
    case 'zero':
      return initialState
    default:
      return state
  }
}

export default counterReducer