export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state, getters) {
    return state.requests && state.requests.length > 0;
  },
};
