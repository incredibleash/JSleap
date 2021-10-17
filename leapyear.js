function my_year() {

    var year = document.getElementById("year").value;


    if (year > 0) {
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            alert(year + " is a Leap Year")
        }
        else {
            alert(year + " is not a Leap Year")

        }

    } else {
        alert("Please enter a valid year")
    }
}