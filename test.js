import test from 'ava';
import fn from './';

test(t => {
	const next = fn(50, a => a + 1);

	t.is(next(), 51);
	t.is(next(), 52);
	t.is(next(), 53);
	t.is(next(), 54);
	t.end();
});

test(t => {
	const next = fn(1, a => (a / 2) * 3);

	t.is(next(), 1.5);
	t.is(next(), 2.25);
	t.is(next(), 3.375);
	t.is(next(), 5.0625);
	t.end();
});
