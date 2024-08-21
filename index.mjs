export function fire(callback) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await callback()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

