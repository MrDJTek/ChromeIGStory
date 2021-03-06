const initialState = {
  currentStoryObject: null,
  isFullPopup: false,
  isSearchActive: false,
  isSnackbarActive: false,
  isCookiesValid: true,
  isPrivacyDisclaimerAcknowledged: false,
  cookies: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_POPUP_STORY_OBJECT':
    return {
      ...state,
      currentStoryObject: action.currentStoryObject
    }
    case 'SET_IS_FULL_POPUP':
    return {
      ...state,
      isFullPopup: action.isFullPopup
    }
    case 'SET_IS_SEARCH_ACTIVE':
    return {
      ...state,
      isSearchActive: action.isSearchActive
    }
    case 'SET_IS_SNACKBAR_ACTIVE':
    return {
      ...state,
      isSnackbarActive: action.isSnackbarActive
    }
    case 'SET_COOKIES':
    return {
      ...state,
      cookies: action.cookies
    }
    case 'SET_COOKIES_VALID':
    return {
      ...state,
      isCookiesValid: action.isCookiesValid
    }
    case 'SET_PRIVACY_DISCLAIMER_ACKNOWLEDGED':
    return {
      ...state,
      isPrivacyDisclaimerAcknowledged: action.isPrivacyDisclaimerAcknowledged
    }
    default:
    return state;
  }
};
