export const initialState = {
  loading: true,
  error: '',
  tracks: [],
  limit: 10,
  height: 578,
  totalPages: 0,
  totalItems: 0,
  labelFacets: [],
  pageNumber: 1,
  facets: [],
  searchCriteria: {
    searchTerm: "",
    itemsPerPage: "10",
    pageNumber: "1",
    sortColumn: "",
    sortOrder: "",
    filter: {}
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        tracks: action.payload.tracks,
        totalPages: Number(action.payload.totalPages),
        totalItems: Number(action.payload.totalItems)
      }
    case 'CHANGE_LIMIT':
      return {
        ...state,
        loading: true,
        searchCriteria: { ...state.searchCriteria, itemsPerPage: action.payload.toString() },
        limit: action.payload
      }
    case 'SORT_CHANGE':
      return {
        ...state,
        loading: true,
        searchCriteria: { ...state.searchCriteria, sortColumn: action.payload.sortColumn, sortOrder: action.payload.sortOrder }
      }
    case 'PAGE_CHANGE':
      return {
        ...state,
        loading: true,
        searchCriteria: { ...state.searchCriteria, pageNumber: action.payload.pageNumber.toString() },
        pageNumber: action.payload.pageNumber
      }
    case 'SET_SEARCH':
      return {
        ...state,
        loading: true,
        searchCriteria: { ...state.searchCriteria, searchTerm: action.payload.searchTerm },
      }
    default:
      return state
  }
}