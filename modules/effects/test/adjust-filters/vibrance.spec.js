import { vibrance } from 'kepler-outdated-luma.gl-effects';
import { normalizeShaderModule } from 'kepler-outdated-luma.gl-shadertools';
import test from 'tape-catch';

test('vibrance#build/uniform', t => {
  normalizeShaderModule(vibrance);
  const uniforms = vibrance.getUniforms();

  t.ok(uniforms, 'vibrance module build is ok');
  t.equal(uniforms.amount, 0, 'vibrance amount uniform is ok');
  t.end();
});
