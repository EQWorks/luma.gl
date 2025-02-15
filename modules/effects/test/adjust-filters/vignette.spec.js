import { vignette } from 'kepler-outdated-luma.gl-effects';
import { normalizeShaderModule } from 'kepler-outdated-luma.gl-shadertools';
import test from 'tape-catch';

test('vignette#build/uniform', t => {
  normalizeShaderModule(vignette);
  const uniforms = vignette.getUniforms();

  t.ok(uniforms, 'vignette module build is ok');
  t.equal(uniforms.radius, 0.5, 'vignette radius uniform is ok');
  t.equal(uniforms.amount, 0.5, 'vignette amount uniform is ok');
  t.end();
});
