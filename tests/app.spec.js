const app = require('../src/app')

test('Generating URL', () => {
    expect(app.generateURL('Olá').toBe('ola'))
})