const app = require('../src/app')

test('Basic clean function', () => {
    expect(app.cleanPhrase('Maçã com pudim')).toBe('maca-com-pudim')
})

test('Generating URL without options', () => {
    expect(app.generateURL('Maça com pudim')).toBe('maca-com-pudim')
})

test('Generating URL with options', () => {
    expect(app.generateURL('Maça com pudim', 'dGVzdA==')).toBe('maca-com-pudim_dGVzdA==_')
}) 

test('Generating URL with multiple spaces', () => {
    expect(app.generateURL('Maça  com    pudim')).toBe('maca-com-pudim')
})

test('Extract Id', () => {
    expect(app.extractId('maca-com-pudim_dGVzdA==_')).toBe('dGVzdA==')
})