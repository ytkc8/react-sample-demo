'use strict'

require('babel-core/register')

const noop = () => null
require.extensions['.svg'] = noop
require.extensions['.png'] = noop
require.extensions['.css'] = noop
