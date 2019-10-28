import meds from '../meds'

describe('medicine records', () => {
  test('loads properly', (done) => {
    expect(meds).toBeTruthy()
    done()
  })

  test('check amount of meds', (done) => {
    expect(meds.length).toStrictEqual(4370)
    done()
  })
})
