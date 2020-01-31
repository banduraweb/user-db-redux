export const renderData = (dataArray,field, arrowSort)=> {

    if ((!dataArray[0])) {
        return dataArray
    }
    else if ((dataArray[0][field])) {
        switch (!isNaN(dataArray[0][field])) {
            case true:
                return arrowSort === "up" ?
                    [...dataArray].sort((a, b) => +a[field] - (+b[field]))
                    :  [...dataArray].sort((a, b) => +b[field] - (+a[field]));

            case false:
                return arrowSort === "up" ?
                    [...dataArray].sort((a, b) =>  a[field].localeCompare(b[field]))
                    : [...dataArray].sort((a, b) =>  b[field].localeCompare(a[field]));
            default:
                return dataArray
        }
    }
    return dataArray
};