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
      `${process.env.DATABASE_URL}/coaches/${userId}.json`,
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
};
