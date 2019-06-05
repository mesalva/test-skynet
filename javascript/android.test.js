import Android from './android'

test('É um número válido', () => {
  const android = new Android()
  expect(android.numero).toBe('AA000')
})
test('Ao resetar o robo o numero deve mudar', () => {
  const android = new Android()
  const numero1 = android.numero
  android.resetar()
  expect(android.numero).not.toBe(numero1)
})
