module.exports = [{
    name: "myblog_front",
    script: "dist/index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
}]