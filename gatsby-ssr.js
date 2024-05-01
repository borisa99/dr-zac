const React = require('react')

const seoData = require('./src/settings/seo.json')

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: seoData?.lang || 'en' })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
}
