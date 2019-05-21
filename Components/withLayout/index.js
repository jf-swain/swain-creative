import React, { PureComponent, Fragment } from 'react'
import MetaTags from '../MetaTags'

import '../../styles/config.scss'
import './styles.scss'

export default (
  WrappedComponent,
  {
    /**
     * title page
     * String
     */
    title,
    /**
     * meta description
     * String
     */
    description,
  },
) => class withLayout extends PureComponent {
  render() {
    const { ...props } = this.props

    return (
      <Fragment>
        <MetaTags
          title={title}
          description={description}
        />

        <section className="wrapper">
          <WrappedComponent {...props} />
        </section>
      </Fragment>
    )
  }
}
