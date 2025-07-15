import crypto from 'crypto'

export default ({ env }) => ({
  'user-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
      jwt: {
        expiresIn: '30d',
      },
    },
  },
})
