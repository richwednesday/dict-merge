const assert = require('assert')
const merge = require('../dictionary')

describe('dictionaryMerge', function() {
	it('returns a dictionary', function() {
		let result = merge({a: 1, b: 2}, {b: 3, c: 4})

		assert.equal(typeof result, 'object')
	})

	it('same keys should use first key', function() {
		let result = merge({a: 1, b: 2}, {b: 3, c: 4})

		assert.deepEqual(result, { a: 1, b: 2, c: 4 })
	})

	it('execute function on same key values', function() {
		let result = merge({a: 1, b: 2}, {b: 3, c: 4}, (x, y) => x+y)

		assert.deepEqual(result, { a: 1, b: 5, c: 4 })
	})

	it('with nested dictionaries', function() {
		let result = merge({a: 1, b: 2, d: {e: 2, f: 4}}, {b: 3, c: 4, d: {e: 0, g: 0}})

		assert.deepEqual(result, { a: 1, b: 2, d: { e: 2, f: 4, g: 0 }, c: 4 })
	})

	it('with nested dictionaries and merge function', function() {
		let result = merge({a: 1, b: 2, d: {e: 2, f: 4}}, {b: 3, c: 4, d: {e: 1, g: 0}}, (x, y) => x+y)

		assert.deepEqual(result, { a: 1, b: 5, d: { e: 3, f: 4, g: 0 }, c: 4 })
	})

})