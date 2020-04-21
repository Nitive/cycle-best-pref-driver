import { Stream } from 'xstream'
import range = require('lodash/range')

import { h, cx, click } from '../../src/'

export function main() {
  const selected$: Stream<string> = click('.item').map(event => event.target.id)

  const list = range(50000)
    .map(index => {
      const class$ = selected$
        .map(id => id === String(index) ? 'selected' : '')
        .map(className => cx('item', className))
        .startWith('item')
      return <li class$={class$} id={String(index)}>select me</li>
    })

  return (
    <ul>
      {list}
    </ul>
  )
}
