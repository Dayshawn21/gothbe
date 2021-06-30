module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: "mongodb+srv://dayshawn:dayday@cluster0.mkolz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: true,
      },
    },
  },
});
