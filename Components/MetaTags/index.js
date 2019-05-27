import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const MetaTags = ({ title, description }) => (
  <Head>
    <html lang="fr" />
    <title>{title}</title>

    <link
      rel="icon"
      type="image/png"
      href="../../static/imgs/favicon.png"
    />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
)

MetaTags.propTypes = {
  /**
   * title of view
   * string
   */
  title: PropTypes.string.isRequired,
  /**
   * description meta
   * string
   */
  description: PropTypes.string.isRequired,
}

export default MetaTags
