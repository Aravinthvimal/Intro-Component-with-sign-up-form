function validate_form() {

    const inputFeilds = document.querySelectorAll("input");

    const validInputs = Array.from(inputFeilds).filter( input => input.value !== "");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mailid = (document.getElementById("emailAddr").value);

    if(mailid.match(mailformat) && (validInputs.length) == 4) {
        document.getElementById("message-neg").style.display = "none";
        document.getElementById("message-poss").style.display = "block";

        const myTimeout = setTimeout(myGreeting, 1500);

        function myGreeting() {
            document.getElementById("myForm").reset();
        }
    }

    else {
        document.getElementById("message-neg").style.display = "flex"
        document.getElementById("message-poss").style.display = "none";
    }

}
