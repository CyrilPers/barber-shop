export const getWeek = (calendar, weeks = 0) => {
    const currentDate = new Date().getTime()
    const dayInMillis = 8 * 24 * 60 * 60 * 1000; // 8 days in milliseconds
    const oneWeek = 7 * dayInMillis
    const fromDate = currentDate + weeks * oneWeek


    const filteredCalendar = calendar.filter(
        (event) => event.date > fromDate && event.date < (currentDate + 8 * dayInMillis)
    )

    return filteredCalendar
}