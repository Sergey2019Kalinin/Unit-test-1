import healthValue from './app.js'

test('значение уровня жизни игрового персонажа - healthy', () => {

	const input = {name: 'Маг', health: 90};
	const expected = "healthy";
	const received = healthValue(input);

	expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - wounded', () => {

	const input = {name: 'Маг', health: 50};
	const expected = "wounded";
	const received = healthValue(input);

	expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - critical', () => {

	const input = {name: 'Маг', health: 14};
	const expected = "critical";
	const received = healthValue(input);

	expect(received).toBe(expected);
});