const initState = {
  admin: {},
  login: false,
  loading: false,
  success: false,
  urlTemp: "",
  data: [],
  berita: [],
  kegiatan: [],
  article: {},
  update: false,
  exist: false,
};

const reducer = (state = initState, action) => {
  if (action.type === "CHANGE_ADMIN") {
    return {
      ...state,
      admin: action.value,
    };
  }
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      login: action.value,
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === "CHANGE_SUCCESS") {
    return {
      ...state,
      success: action.value,
    };
  }
  if (action.type === "CHANGE_URL") {
    return {
      ...state,
      urlTemp: action.value,
    };
  }
  if (action.type === "CHANGE_UPDATE") {
    return {
      ...state,
      update: action.value,
    };
  }
  if (action.type === "CHANGE_DATA") {
    return {
      ...state,
      data: action.value,
    };
  }
  if (action.type === "CHANGE_BERITA") {
    return {
      ...state,
      berita: action.value,
    };
  }
  if (action.type === "CHANGE_KEGIATAN") {
    return {
      ...state,
      kegiatan: action.value,
    };
  }
  if (action.type === "CHANGE_ARTICLE") {
    return {
      ...state,
      article: action.value,
    };
  }
  if (action.type === "CHANGE_EXIST") {
    return {
      ...state,
      exist: action.value,
    };
  }
  return state;
};

export default reducer;
