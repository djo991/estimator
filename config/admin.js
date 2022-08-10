module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4a3fe61bb05fc2d2e571fb9e74e8165'),
  },
});
