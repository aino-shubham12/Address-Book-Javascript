/**
 * Description : This method is used to validate the form of Address book which has details of pesron ,street ,city and pincode.
 * Author : Shubham Bangar
 */

function validateForm() {
    /**
     * variable person  : This variable is used to get value of form element by id of Enter Name textbox.
     * variable street  : This variable is used to get value of form element by id of Enter Street textbox.
     * variable city    : This variable is used to get value of form element by id of Enter City textbox.
     * variable pincode : This variable is used to get value of form element by id of Enter Pinocde textbox.
     */
    var person = document.getElementById("Pname").value;
    var street = document.getElementById("Street").value;
    var city = document.getElementById("City").value;
    var pincode = document.getElementById("Pincode").value;



    if (person == "") {
        var p = document.getElementById("name");
        p.innerHTML = "Name is required";
        p.style.color = "red";
    }

    if (street == "") {
        var s = document.getElementById("sname");
        s.innerHTML = "Street is required";
        s.style.color = "red";
    }

    if (city == "") {
        var c = document.getElementById("cname");
        c.innerHTML = "City is required";
        c.style.color = "red";
    }

    if (isNaN(pincode)) {
        var pi = document.getElementById("piname")
        pi.innerHTML = "Pincode should be an integer";
        pi.style.color = "red";
    }
    if (pincode == "") {
        var pi1 = document.getElementById("piname")
        pi1.innerHTML = "Pincode is required";
        pi1.style.color = "red";
    }

    if ((person != "") && (street != "") && (city != "") && (pincode != "") && (!isNaN(pincode))) {
        document.write("<div style='text-align:center;'>");
        document.write("<h1>=========== Address Book ==========</h1>");
        document.write("<h3> Your Name :" + " " + person + "</h3>");
        document.write("<h3> Your Street :" + " " + street + " </h3");
        document.write("<br>");
        document.write("<h3> Your City :" + " " + city + "</h3>");
        document.write("<h3> Your Pincode :" + " " + pincode + "</h3>");
        document.write("<br>");
        document.write("</div");
    }

}