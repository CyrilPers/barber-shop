export const removeItemFromArray = (id, array) => {
    return array.filter((item) => item.id !== id)
}

export const addItemToArray = (newItem, array) => {
    return [...array, newItem];
}

export const isEmpty = (array) => {
    return array.length === 0
}