import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Tag = ({ tagName }) => (
  <div className="tag">
    {tagName}
  </div>
)

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
}

export default Tag
