const app = require('../src/app')

test('Generating URL without options', () => {
    expect(app.generateURL('Maça com pudim')).toBe('maca-com-pudim')
})

test('Generating URL with options', () => {
    expect(app.generateURL('Maça com pudim', {id: 1, category: 'Food'})).toBe(null)
}) 