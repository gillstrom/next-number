import test from 'ava';
import m from './';

test(t => {
	const next = m(50, a => a + 1);

	t.is(next(), 51);
	t.is(next(), 52);
	t.is(next(), 53);
	t.is(next(), 54);
});

test(t => {
	const next = m(1, a => (a / 2) * 3);

	t.is(next(), 1.5);
	t.is(next(), 2.25);
	t.is(next(), 3.375);
	t.is(next(), 5.0625);
});
