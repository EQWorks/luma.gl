import test from 'tape-catch';

import { createGLContext } from 'kepler-outdated-luma.gl-webgl';
import { makeDebugContext } from 'kepler-outdated-luma.gl-debug';

function triggerGLError(gl) {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, -1, gl.STATIC_DRAW);
}

function triggerValidationError(gl) {
  gl.bindBuffer(gl.ARRAY_BUFFER, undefined);
}

test('WebGL#makeDebugContext', t => {
  const gl = createGLContext({debug: false});
  t.doesNotThrow(() => triggerGLError(gl), 'The default context does not throw on GL error');
  t.doesNotThrow(
    () => triggerValidationError(gl),
    'The default context does not throw on validation error'
  );

  const debugContext = makeDebugContext(gl, {throwOnError: true, break: ['createProgram']});

  t.ok(debugContext, 'debug context is returned');
  t.throws(
    () => triggerGLError(debugContext),
    /INVALID_VALUE/,
    'The debug context throws on GL error'
  );
  t.throws(
    () => triggerValidationError(debugContext),
    /Undefined argument/,
    'The debug context throws on validation error'
  );

  t.is(makeDebugContext(debugContext), debugContext, 'Does not wrap context twice');
  t.is(makeDebugContext(debugContext, {debug: false}), gl, 'Returns original context');
  t.is(makeDebugContext(gl), debugContext, 'Reuses debug context');
  t.is(makeDebugContext(null), null, 'Handles null');

  t.end();
});
