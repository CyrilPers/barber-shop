export const convertTime = (time) => {
    let hours = Math.floor(time / 60)
    let min = time % 60
    if (hours > 0) {
        return hours + "h" + (min > 0 ? min + "min" : '');
    }
    return min + "min"
}

export const convertDate = (date) => {
    const dateObj = new Date(date);
    let year = dateObj.getFullYear()
    // Check if date and month have 1 figure number, if have 1 figure we add 0 at start to get 2 figures number.
    let month = (dateObj.getMonth() + 1).toString().length === 1 ? (dateObj.getMonth() + 1).toString().padStart(2, '0') : dateObj.getMonth() + 1;
    let day = dateObj.getDate().toString().length === 1 ? dateObj.getDate().toString().padStart(2, '0') : dateObj.getDate();
    return day + "/" + month + "/" + year
}