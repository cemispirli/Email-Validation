let eMail = document.getElementById("mail");

eMail.addEventListener("change",(event) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail.value)) {
        alert("You have entered an valid email address :)");
    } else {
        alert("You have entered an invalid email address!");
    }
})

