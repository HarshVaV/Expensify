function shortenDate(date){
    let dateArr= date.split("-");
    const month={
        "01":"Jan",
        "02":"Feb",
        "03":"Mar",
        "04":"Apr",
        "05":"May",
        "05":"Jun",
        "07":"Jul",
        "08":"Aug",
        "09":"Sep",
        "10":"Oct",
        "11":"Nov",
        "12":"Ddec",
    }

    return dateArr[2]+' '+month[dateArr[1]];
}

export default shortenDate;