const app = require('../src/app')

test('Basic clean function', () => {
    expect(app.cleanPhrase('Maçã com pudim')).toBe('maca-com-pudim')
})

test('Generating URL without options', () => {
    expect(app.generateURL('Maça com pudim')).toBe('maca-com-pudim')
})

test('Generating URL with options', () => {
    expect(app.generateURL('Maça com pudim', {id: 1})).toBe('maca-com-pudim_id-1_')
}) 

test('Generating URL with multiple spaces', () => {
    expect(app.generateURL('Maça  com    pudim')).toBe('maca-com-pudim')
})