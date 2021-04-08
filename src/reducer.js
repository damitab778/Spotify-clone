export const initialState = {
  user: null,
  token: null,
  playlist: null,
  discover_weekly: null,
  playListId: "5Br6IZVPt7wdHMSrchSSb2",
  trackUri: null,
  searchAll: null,
  info: null,
  songs: [],
  songsBottom: [],
  albums: [],
};

const reducer = (state, action) => {
  console.log("AKCJA", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TRACK_URI":
      return {
        ...state,
        trackUri: action.trackUri,
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playListId: action.playListId,
      };
    case "SET_SEARCH_ALL":
      return {
        ...state,
        searchAll: action.searchAll,
      };

    case "SET_SEARCH_TRACK":
      return {
        ...state,
        searchTrack: action.searchTrack,
      };

    case "SET_MOST_POPULAR":
      return {
        ...state,
        info: action.info,
      };

    case "SET_TOP_TRACK":
      return {
        ...state,
        songs: [...state.songs, action.trackInfo],
      };
    case "CLR_TOP_TRACK":
      return {
        ...state,
        songs: [],
      };
    case "SET_BOTTOM_TRACKS":
      return {
        ...state,
        songsBottom: [...state.songsBottom, action.trackBottom],
      };
    case "CLR_BOTTOM_TRACKS":
      return {
        ...state,
        songsBottom: [],
      };
    case "SET_ALBUM":
      return {
        ...state,
        albums: [...state.albums, action.albumInfo],
      };
    case "CLR_ALBUM":
      return {
        ...state,
        albums: [],
      };
    default:
      return state;
  }
};

export default reducer;
