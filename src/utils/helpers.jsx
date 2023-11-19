export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const checkIfIsClicked = (selected, clicked) => {
    return selected === clicked
}


export const getFirstLetter = (string) => {
    const firstLetter = string.charAt(0);
    return firstLetter
}

export const getWeek = (calendar, weeks = 0) => {
    const currentDate = new Date()
    // Set hours to 0 to get day at 00:00 and avoid jumping 2 days instead of 1
    const today = currentDate.setHours(0, 0, 0, 0)
    const oneDay = 24 * 60 * 60 * 1000 // 1 day in milliseconds
    const oneWeek = 7 * oneDay
    const fromDate = today + weeks * oneWeek + oneDay
    const toDate = fromDate + oneWeek

    const filteredCalendar = calendar.filter(
        (event) => event.date >= fromDate && event.date < toDate
    )

    return filteredCalendar
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}