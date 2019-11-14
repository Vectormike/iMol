export const removeAlert = (state, payload) => {
  return state.filter(alert => alert.id !== payload);
};
