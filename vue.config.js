module.exports = {
    process.env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        VUE_ENV: '"client"',
        VUE_APP_TEST: JSON.stringify(process.env.VUE_APP_TEST),
        PORT: JSON.stringify(process.env.PORT)
      }
}