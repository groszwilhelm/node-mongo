const path = require('path');

module.exports = {
  apps: [
    {
      name: "api-starter",
      script: `${path.resolve(__dirname)}/src/index.js`,
      watch: true,
      env: {
        "NODE_ENV": "development",
        "APP_PORT": 8080,
        "APP_LOG_LEVEL": "debug",
      },
      env_qa: {
        "NODE_ENV": "qa",
        "APP_PORT": 8080,
        "APP_LOG_LEVEL": "debug",
      },
      env_test: {
        "NODE_ENV": "test",
        "APP_PORT": 8080,
        "APP_LOG_LEVEL": "debug",
      },
      env_production: {
        "NODE_ENV": "production",
        "APP_PORT": 8080,
        "APP_LOG_LEVEL": "info",
      }
    }
  ]
};
