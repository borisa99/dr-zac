import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ to, className, children, ...props }) {
  const internal = /^\/(?!\/)/.test(to)
  return (
    <>
      {!internal ? (
        <a
          href={to}
          className={className}
          target={to.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      ) : (
        <GatsbyLink to={to} className={className} {...props}>
          {children}
        </GatsbyLink>
      )}
    </>
  )
}
