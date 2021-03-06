import camelCase from 'lodash/camelCase'

/**
 * @function PleasureArgsParser
 * @param {String[]} [args=process.argv] - Arguments
 * @return {Object} The parsed args in object style
 *
 * @example <caption>Retrieving cli args</caption>
 *
 * ```js
 * const PleasureArgsParser = require('pleasure-args-parser')
 * const args = PleasureArgsParser(['--sandy=papo', '-papo', '--api', '--first-name', 'martin'])
 * console.log(typeof args === 'object') // true
 * console.log(args.sandy === 'papo') // true
 * console.log(args.api) // true
 * console.log(args.papo) // true
 * console.log(args.firstName === 'martin') // true
 * console.log(Object.keys(args).length === 4) // true
 * ```
 */
export default function PleasureArgsParser (args = process.argv) {
  const res = {}
  let currentArg
  args.forEach(arg => {
    const cleanArg = camelCase(arg.replace(/^-+/, '').replace(/=.*$/, ''))

    if (currentArg) {
      if (/^-/.test(arg)) {
        res[currentArg] = true
      } else {
        res[currentArg] = cleanArg
        currentArg = null
        return
      }
    }

    if (/^--/.test(arg)) {
      if (arg.indexOf('=') > 0) {
        res[cleanArg] = arg.split('=')[1]
      } else {
        currentArg = cleanArg
      }
    } else if (/^-/.test(arg)) {
      res[cleanArg] = true
    }
  })
  if (currentArg) {
    res[currentArg] = true
  }
  return res
}
