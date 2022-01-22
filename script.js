function clock() {
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();


    // making time limited into 12
    if (hour > 10) {
        hour = hour - 12;
    }



    // adding "0" before single digit

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }


    // updating value to their respective fields 

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}


//updating time every second
setInterval(clock, 1000);