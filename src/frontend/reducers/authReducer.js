export function authReducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME":
      return {
        ...state,
        user: { ...state.user, firstName: action.payload },
      };
    case "LAST_NAME":
      return {
        ...state,
        user: { ...state.user, lastName: action.payload },
      };
    case "EMAIL":
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case "USER_NAME":
      return {
        ...state,
        user: { ...state.user, userName: action.payload },
      };
    case "PASSWORD":
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case "TOKEN":
      return {
        ...state,
        user: { ...state.user, token: action.payload },
      };
    case "ERROR":
      return {
        ...state,
        user: { ...state.user, error: action.payload },
      };
  }
}
