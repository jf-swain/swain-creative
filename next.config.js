// next.config.js
const withESLint = require('next-eslint')
const withSass = require('@zeit/next-sass')

module.exports = withESLint(withSass())
