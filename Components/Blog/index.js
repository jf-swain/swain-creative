import React, { PureComponent } from 'react'

import Translate from '../../translate-fr'
import Tag from './Components/Tag'
import ArticleSummary from './Components/ArticleSummary'

import './styles.scss'

class Blog extends PureComponent {
  render() {
    const { blog: { articles } } = Translate

    return (
      <section className="blog">
        <h2>{Translate.blog.sectionTitle}</h2>

        {
          articles.map(article => (
            <article className="blog-article">
              <div className="article-detail">
                <span>
                  <Tag
                    tagName={article.tag}
                  />
                </span>

                <span className="article-detail__date">
                  {article.date}
                </span>
              </div>

              <div className="_article-content">
                <ArticleSummary
                  articleSumContent={article}
                />
              </div>
            </article>
          ))
        }
      </section>
    )
  }
}

export default Blog
