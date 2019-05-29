// next.config.js
const withESLint = require('next-eslint')
const withSass = require('@zeit/next-sass')

module.exports = withESLint(withSass({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loaders: 'sass-resources-loader',
        options: {
          resources: ['./node_modules/sass-library/import.scss', './styles/config.scss'],
        },
      },
    )

    return config
  },
}))
