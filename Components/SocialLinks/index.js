import React from 'react'
import './styles.scss'

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        className="social__link"
        href="https://fr.linkedin.com/in/jeanfrancoisswain"
        rel="noopener noreferrer"
        target="_blank"
      >
          Linkedin
      </a>
    </li>

    <li>
      <a
        className="social__link"
        href="https://github.com/jf-swain"
        rel="noopener noreferrer"
        target="_blank"
      >
          Github
      </a>
    </li>

    <li>
      <a
        className="social__link"
        href="https://twitter.com/swainjean"
        rel="noopener noreferrer"
        target="_blank"
      >
          Twitter
      </a>
    </li>
  </ul>
)

export default SocialLinks
