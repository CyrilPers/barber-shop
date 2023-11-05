export const convertTime = (time) => {
    let hours = Math.floor(time / 60)
    let min = time % 60
    if (hours > 0) {
        return hours + "h" + (min > 0 ? min + "min" : '');
    }
    return min + "min"
}