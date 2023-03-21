require("dotenv").config();

const config = {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
  gmailKey: process.env.GMAIL_KEY,
  gmailUserName: process.env.GMAIL_USER_NAME,
  webUrl: process.env.WEB_URL,
  secret: process.env.SECRET,
  geoApi: process.env.GEO_API,
};

for (key in config) {
  if (!config[key]) {
    console.log("Incomplete Configuration");
    process.exit(1);
  }
}

module.exports = config;
