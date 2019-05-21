import React, { PureComponent } from 'react'

import Translate from '../../translate-fr'
import Tag from './Components/Tag'
import ArticleSummary from './Components/ArticleSummary'

import './styles.scss'

class Blog extends PureComponent {
  render() {
    return (
      <section className="blog">
        <h2>{Translate.blogSummary.sectionTitle}</h2>

        <article className="blog-article">
          <div className="article-detail">
            <span>
              <Tag tagName={Translate.blogSummary.articleFirst.tag} />
            </span>

            <span className="article-detail__date">
              {Translate.blogSummary.articleFirst.date}
            </span>
          </div>

          <div className="_article-content">
            <ArticleSummary
              articleSumContent={Translate.blogSummary.articleFirst}
            />
          </div>
        </article>
      </section>
    )
  }
}

export default Blog
