export const fire = async <T extends unknown>(callback: () => T) =>
	new Promise<T>(async (resolve, reject) => {
		try {
			const data = await callback()
			resolve(data)
		} catch (error) {
			reject(error)
		}
	})
