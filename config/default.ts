import dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ive6cex.mongodb.net/`,
  env: 'development'
}
