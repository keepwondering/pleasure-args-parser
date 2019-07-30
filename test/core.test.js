import test from 'ava'
import PleasureArgsParser from '../'

test(`Parses all args starting with a dash in object style`, t => {
  const args = PleasureArgsParser(['--sandy=papo', '-papo', '--api', '--name', 'martin'])

  t.truthy(args)
  t.true(typeof args === 'object')
  t.is(args.sandy, 'papo')
  t.true(args.api)
  t.true(args.papo)
  t.is(args.name, 'martin')
  t.is(Object.keys(args).length, 4)
})
