export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://vue-https-c5f76-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    /*     const data = await response.json();
     */
    if (!response.ok) {
      console.log(response);
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://vue-https-c5f76-default-rtdb.firebaseio.com/coaches.json`
    );

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in data) {
      const coach = {
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        description: data[key].description,
        hourlyRate: data[key].hourlyRate,
        areas: data[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
