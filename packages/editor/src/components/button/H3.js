import React from 'react'
import withFillColor from './utils/withFillColor'
import withAction from './utils/withAction'

const H3 = ({ fill }) => {
  return (
    <svg width="25" height="25" fill={fill}>
      <g><path d="M5.53 10.98h6.96V5.34c0-.19.16-.34.35-.34h.82c.2 0 .36.15.36.34v13.3c0 .2-.16.35-.36.35h-.82a.35.35 0 0 1-.35-.34v-6.17H5.53v6.17c0 .18-.16.34-.36.34h-.82a.35.35 0 0 1-.35-.34V5.35c0-.2.16-.35.35-.35h.82c.2 0 .36.15.36.34v5.64zM20.76 15.14c.16.35.24.72.24 1.1a2.66 2.66 0 0 1-4.38 2.13 3.94 3.94 0 0 1-.94-1.73c.04-.12.06-.13.2-.13h1.14c.14 0 .17.05.2.12.1.23.25.47.4.6.17.17.4.25.7.25.33 0 .6-.11.81-.33.22-.2.34-.5.34-.88 0-.4-.12-.69-.34-.9-.21-.2-.49-.3-.83-.3h-.22a.3.3 0 0 1-.3-.3v-.79c0-.16.14-.3.3-.3h.12c.39 0 .67-.1.87-.3a1 1 0 0 0 .3-.76c0-.32-.1-.57-.3-.78-.21-.2-.47-.3-.8-.3a.99.99 0 0 0-.62.22 1.4 1.4 0 0 0-.4.63c-.02.06-.05.18-.21.18h-1.11c-.17 0-.18-.11-.17-.17.1-.62.35-1.27.78-1.68a2.38 2.38 0 0 1 1.69-.7c.82 0 1.47.27 1.96.79.46.5.7 1.1.7 1.79 0 .34-.05.68-.18 1-.13.29-.33.54-.61.76.29.22.5.48.66.78z"></path></g>
    </svg>
  )
}

export default withFillColor(withAction(H3))