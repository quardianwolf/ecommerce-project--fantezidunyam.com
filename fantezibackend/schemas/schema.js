import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import avantajlar from './avantajlar';
import footer from './footer';
import sizinicinsectiklerimiz from './sizinicinsectiklerimiz';
import slider from './slider';
import urunler from './urunler';
import peek from './peek';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ avantajlar, footer, sizinicinsectiklerimiz, slider, urunler, peek ]),
})
