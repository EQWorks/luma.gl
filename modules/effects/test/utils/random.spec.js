import { default as random } from 'kepler-outdated-luma.gl-effects/shader-modules/utils/random';

import { normalizeShaderModule } from 'kepler-outdated-luma.gl-shadertools';
import test from 'tape-catch';

test('random#build', t => {
  normalizeShaderModule(random);

  t.ok(random.fs, 'random module fs is ok');
  t.end();
});
