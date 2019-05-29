import React, { Fragment } from 'react'

import withLayout from '../Components/withLayout'
import Blog from '../Components/Blog'
import SocialLinks from '../Components/SocialLinks'
import SvgAnimation from '../Components/SvgAnimation'

import Translate from '../translate-fr'

import './styles.scss'

function Home() {
  return (
    <Fragment>
      <section className="home">
        <header className="title">
          <h1 className="title_h1">{Translate.home.h1}</h1>

          <h2 className="title_h2">{Translate.home.h2}</h2>
          <SvgAnimation />

          <SocialLinks />
        </header>

      </section>

      <Blog />
    </Fragment>
  )
}

export default withLayout(Home, {
  title: 'swain-creative: Accueil',
  description: 'Site web de jean-françois Swain',
})
