import { default as warp } from 'kepler-outdated-luma.gl-effects/shader-modules/warp-filters/warp';

import { normalizeShaderModule } from 'kepler-outdated-luma.gl-shadertools';
import test from 'tape-catch';

test('warp#build', t => {
  normalizeShaderModule(warp);

  t.ok(warp.fs, 'warp module fs is ok');
  t.end();
});
