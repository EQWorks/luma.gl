import test from 'tape-catch';
import { addEvents } from 'kepler-outdated-luma.gl-addons';

test('kepler-outdated-luma.gl-addons#addEvents', t => {
  t.throws(() => addEvents(), 'addEvents is removed');
  t.end();
});
