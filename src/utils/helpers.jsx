export const checkIfIsClicked = (selected, clicked) => {
    return selected === clicked
}


export const getFirstLetter = (string) => {
    const firstLetter = string.charAt(0);
    return firstLetter
}

export const getWeek = (calendar, weeks = 0) => {
    const currentDate = Date.now()
    const oneDay = 24 * 60 * 60 * 1000 // 1 day in milliseconds
    const oneWeek = 7 * oneDay
    const fromDate = currentDate + weeks * oneWeek + oneDay
    const toDate = fromDate + oneWeek
    console.log('fromDate', fromDate);
    console.log('toDate', toDate);


    const filteredCalendar = calendar.filter(
        (event) => event.date >= fromDate && event.date < toDate
    )

    return filteredCalendar
}