import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const Tag = ({ tagName }) => (
  <Fragment>
    {
      tagName.map(tag => (
        <span className="tag">
          {tag}
        </span>
      ))
    }
  </Fragment>
)

Tag.propTypes = {
  tagName: PropTypes.array.isRequired,
}

export default Tag
