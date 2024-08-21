module.exports.fire = fire;
module.exports.default = { fire };

function fire(callback) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await callback()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
