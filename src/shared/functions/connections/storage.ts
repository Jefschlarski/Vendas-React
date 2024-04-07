export const setItemInStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getItemFromStorage = (key: string) => {
    return localStorage.getItem(key);
}

export const removeItemFromStorage = (key: string) => {
    localStorage.removeItem(key);
}