import { fetch} from './fetch'

const LOAD_MORE_STEP = 10

// ensure data for rendering given list type
export function FETCH_LIST_DATA ({ commit, dispatch, state }, { type ,data,method}) {
  console.log('  1111111111111111 ')
  if(undefined===method)
    method = 'GET'
  return fetch(type,data,method)
}

// load more items
export function LOAD_MORE_ITEMS ({ dispatch, state }) {
  state.counts[state.activeType] += LOAD_MORE_STEP
  return dispatch('ENSURE_ACTIVE_ITEMS')
}

