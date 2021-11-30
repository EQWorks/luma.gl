import { AmbientLight, DirectionalLight, PointLight } from 'kepler-outdated-luma.gl-core';
import test from 'tape-catch';

test('kepler-outdated-luma.gl-core#AmbientLight', t => {
  const light = new AmbientLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});

test('kepler-outdated-luma.gl-core#DirectionalLight', t => {
  const light = new DirectionalLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});

test('kepler-outdated-luma.gl-core#PointLight', t => {
  const light = new PointLight();
  t.ok(light, 'Created a default AmbientLight');
  t.end();
});
