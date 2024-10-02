export const setObjectToLocalStorage = (key: string, value) => {
	localStorage.setItem(key, JSON.stringify(value))
}