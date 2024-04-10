export const selectAuthToken = (state) => state.auth.token;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserProfile = (state) => state.auth.user;
export const selectDailiNorma = (state) => state.auth.user.dailyNorma;
export const selectLoading = (state) => state.auth.isLoadingServer;

export const selectFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser;
