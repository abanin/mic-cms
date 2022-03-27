module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3799c93a2ecd5e39c26217ff2cbd58ea'),
  },
});
