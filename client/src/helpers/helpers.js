export const removeAlert = (state, payload) => {
  state.filter(alert => alert.id !== payload);
};
