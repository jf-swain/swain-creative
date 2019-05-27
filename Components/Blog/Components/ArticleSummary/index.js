import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class ArticleSummary extends PureComponent {
  render() {
    const { articleSumContent: { title, contentSummary } } = this.props

    return (
      <article className="article-content">
        <header className="article-content__header">{title}</header>

        <p className="article-content__content">
          {contentSummary}
        </p>
      </article>
    )
  }
}

ArticleSummary.propTypes = {
  articleSumContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contentSummary: PropTypes.string.isRequired,
  }).isRequired,
}

export default ArticleSummary
