let eMail = document.getElementById("mail");

eMail.addEventListener("change",(event) => {
    if (eMail.value.includes("@") && (eMail.value.includes(".com")) || (eMail.value.includes(".co"))) {
        document.write("Valid");
    } else {
        document.write("Unvalid");
    }
})

// && (eMail.value.includes(`.$$$`))