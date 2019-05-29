import React from 'react'
import './styles.scss'


const SvgAnimation = () => (
  <svg width="398" height="120" className="svg-border">
    <g>
      <line className="svg-border__line svg-border__line--top-left" x1="199" y1="0" x2="0" y2="0" />
      <line className="svg-border__line svg-border__line--top-right" x1="199" y1="0" x2="398" y2="0" />
    </g>

    <g>
      <line className="svg-border__line svg-border__line--left" x1="0" y1="0" x2="0" y2="120" />
    </g>

    <g>
      <line className="svg-border__line svg-border__line--right" x1="398" y1="0" x2="398" y2="120" />
    </g>

    <g>
      <line className="svg-border__line svg-border__line--bottom-left" x1="0" y1="120" x2="199" y2="120" />
      <line className="svg-border__line svg-border__line--bottom-right" x1="199" y1="120" x2="398" y2="120" />
    </g>
  </svg>
)

export default SvgAnimation
