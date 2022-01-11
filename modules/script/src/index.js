// We use `module.exports` instead of `export default` in this file so that using
// require() to access the bundle will return one object instead of {default: ...}.
// `export` must be paired with `import` and `module.exports` must be paired with `require`
// https://github.com/webpack/webpack/issues/4039

/* global window, global */
const _global = typeof window === 'undefined' ? global : window;

const lumaGL = require('kepler-outdated-luma.gl-core');
require('kepler-outdated-luma.gl-debug');

const filters = require('kepler-outdated-luma.gl-glfx');

const shadertools = require('kepler-outdated-luma.gl-shadertools');

const mathGL = require('math.gl');

_global.keplerLuma = Object.assign({}, _global.keplerLuma, lumaGL, { filters }, shadertools);

_global.mathgl = mathGL;

module.exports = _global.keplerLuma;
