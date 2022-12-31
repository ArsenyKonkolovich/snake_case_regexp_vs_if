const str = 'MyNAMEIsBONDIsSpy';

const toSnakeCase = (str) => {
    const res = [];
    let firstUp;
    let last;
    for (let i = 0; i < str.length - 1; i = (last - 1)) {
        if (str[i].toUpperCase() === str[i]) {
            firstUp = i;
            if (str[i + 1].toUpperCase() === str[i + 1]) {
                for (let y = firstUp + 1; y < str.length; y += 1) {
                    if (str[y].toLowerCase() === str[y]) {
                        last = y;
                        break;
                    } else if (y === str.length - 1) {
                        last = y + 2;
                    }
                }
                res.push(str.slice(firstUp, last - 1));
            } else {
                for (let g = firstUp + 1; g < str.length; g += 1) {
                    if (str[g].toUpperCase() === str[g]) {
                        last = g;
                        break;
                    } else if (g === str.length - 1) {
                        last = g + 1;
                    }
                }
                res.push(str.slice(firstUp, last));
            }
        } else {
            last += 1;
        }
        console.log(i, str[i], firstUp, str[firstUp + 1], last, str[last - 2]);

    }

    return res.map((word) => word.toLowerCase()).join('_');
}

console.log(toSnakeCase(str));
