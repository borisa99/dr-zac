import cliProgress from 'cli-progress'
import fs from 'fs'
import fetch from 'node-fetch'
import path, { dirname } from 'path'
import toml from 'toml'
import { fileURLToPath } from 'url'

export function recursivelyRemoveEmptyElements(element) {
  if (element.children().length === 0 && element.text().trim() === '') {
    const parent = element.parent()
    element.remove()
    return recursivelyRemoveEmptyElements(parent)
  } else {
    return
  }
}

export const checkIfImageExists = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    return false
  }
}

export const initiateProgressBar = () => {
  return new cliProgress.SingleBar(
    {
      format:
        ' {bar} | {percentage}% | {eta_formatted} | {value}/{total} | {title} ',
    },
    cliProgress.Presets.shades_classic,
  )
}

export const addRedirect = (from, to, status = 301) => {
  const rootDir = path.dirname(process.cwd())
  const netlifyConfigPath = path.join(rootDir, 'netlify.toml')
  let netlifyConfig = fs.readFileSync(netlifyConfigPath, 'utf8')

  // Parse the existing redirects
  const existingConfig = toml.parse(netlifyConfig)
  const existingRedirects = existingConfig.redirects || []

  // Check if the redirect already exists
  const duplicate = existingRedirects.find(
    (redirect) => redirect.from === from && redirect.to === to,
  )

  // If the redirect doesn't exist, add it
  if (!duplicate) {
    const redirect = `
[[redirects]]
  from = "${from}"
  to = "${to}"
  status = ${status}
  force = true
`

    netlifyConfig += redirect
    fs.writeFileSync(netlifyConfigPath, netlifyConfig)
  }
}
