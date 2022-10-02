const resolvers = {
  Person: {
    age(source: any) {
      const { born } = source;

      if (!born) return;

      return new Date().getUTCFullYear() - born;
    },
  },
};

export default resolvers;
