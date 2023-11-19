import { capitalizeFirstLetter } from './helpers.jsx';


export const convertTime = (time) => {
    let hours = Math.floor(time / 60)
    let min = time % 60
    if (hours > 0) {
        return hours + "h" + (min > 0 ? min + "min" : '');
    }
    return min + "min"
}

export const convertDate = (date, type = "menu") => {
    const dateObj = new Date(date);

    if (type === "menu") {
        let year = dateObj.getFullYear()
        // Check if date and month have 1 figure number, if have 1 figure we add 0 at start to get 2 figures number.
        let month = (dateObj.getMonth() + 1).toString().length === 1 ? (dateObj.getMonth() + 1).toString().padStart(2, '0') : dateObj.getMonth() + 1;
        let day = dateObj.getDate().toString().length === 1 ? dateObj.getDate().toString().padStart(2, '0') : dateObj.getDate();
        return day + "/" + month + "/" + year
    }
    else {
        const day = dateObj.getDate()
        const options = { weekday: 'long', month: 'short' };
        const dateParts = dateObj.toLocaleDateString('fr-FR', options).split(' ');
        if (type === "calendar") {
            dateParts.push(day);
            return dateParts
        }
        if (type === "booked") {
            return capitalizeFirstLetter(dateParts[1]) + " " + day + " " + capitalizeFirstLetter(dateParts[0])
        }
    }
}

