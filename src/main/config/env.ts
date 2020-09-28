export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/survey-node-api',
  port: process.env.PORT || 5050
}
