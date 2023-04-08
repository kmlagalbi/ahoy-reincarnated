export function getLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key))
}

export function setLocalStorage(key, value) {
    console.log(key)
    console.log(value)
    window.localStorage.setItem(key, JSON.stringify(value))
}