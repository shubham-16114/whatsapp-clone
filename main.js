

function number(n) {
    let num = 0, snum = 0

    for (let i = 0; i < n.length; i++) {
        if (n[i] > num) {
            snum = num;
            num =  n[i]
        }
    }
    
    return snum;
    }

    console.log(number([5,2,344,4,666, 6, 1]))


