import React from 'react'

import withLayout from '../Components/withLayout'

import Translate from '../translate-fr'

import './styles.scss'

function Home() {
  return (
    <div className="title">
      <h1>{Translate.home.h1}</h1>
      <h2>{Translate.home.h2}</h2>
    </div>
  )
}

export default withLayout(Home, {
  title: 'swain-creative: Accueil',
  description: 'Site web de jean-françois Swain',
})
