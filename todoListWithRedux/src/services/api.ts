function serverMock(simulateError = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        return reject('has error on call')
      }

      return resolve('done')
    }, 2000)
  })
}

export { serverMock }
