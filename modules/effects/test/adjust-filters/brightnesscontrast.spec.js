import { brightnessContrast } from 'kepler-outdated-luma.gl-effects';
import { normalizeShaderModule } from 'kepler-outdated-luma.gl-shadertools';
import test from 'tape-catch';

test('brightnessContrast#build/uniform', t => {
  normalizeShaderModule(brightnessContrast);
  const uniforms = brightnessContrast.getUniforms();

  t.ok(uniforms, 'brightnessContrast module build is ok');
  t.equal(uniforms.brightness, 0, 'brightnessContrast brightness uniform is ok');
  t.equal(uniforms.contrast, 0, 'brightnessContrast contrast uniform is ok');
  t.end();
});
