const editSocialButtons = () => {

    document.querySelectorAll(".accountButton").forEach((element) => {
        element.innerHTML = getButtonIcon(element.id)
    })

    document.querySelectorAll(".divider").forEach((element) => {
        if (element.parentElement.id !== "localAccountForm")
            element.remove()
    })

    document.querySelectorAll("#localAccountForm .divider h2").forEach((element) => {
        element.innerHTML = "Or Continue With"
    })

    document.querySelectorAll("#localAccountForm .intro").forEach((element) => {
        element.remove();
    })

    document.querySelectorAll(".claims-provider-list-buttons .intro h2").forEach((element) => {
        element.innerHTML = "joblink";
    })

    document.querySelectorAll(".claims-provider-list-buttons .intro").forEach((element) => {
        let subTitle = document.createElement("p");
        subTitle.classList.add("logo-subtitle");
        subTitle.innerText = "Hola, Glad to see you again";
        element.append(subTitle);
    })

    document.querySelectorAll(".claims-provider-list-buttons .options").forEach((element1) => {
        document.querySelectorAll("#localAccountForm .divider").forEach((element2) => {
            element2.after(element1);
        })
    })

    document.querySelectorAll("#email").forEach((element) => {
        element.parentElement.innerHTML += getInputIcon("email");
    })

    document.querySelectorAll("#password").forEach((element) => {
        element.parentElement.innerHTML += getInputIcon("password");
    })

    console.log("iam here");
}


const getButtonIcon = (id) => {
    switch (id) {
        case "GoogleExchange":
            return '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a3b81" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,128h88a88.1,88.1,0,1,1-25.8-62.2" fill="none" stroke="#3a3b81" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>';
        case "FacebookExchange":
            return '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3a3b81" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#3a3b81" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M168,88H152a23.9,23.9,0,0,0-24,24V224" fill="none" stroke="#3a3b81" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="#3a3b81" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>'
    }
}

const getInputIcon = (input) => {
    switch (input) {
        case "email":
            return '<svg style="position:absolute;top:50%;left:15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></circle><path d="M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path></svg>';
        case "password":
            return '<svg style="position:absolute;top:50%;left:15px" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="88" width="176" height="128" rx="8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></rect><path d="M92,88V52a36,36,0,0,1,72,0V88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"></path><circle cx="128" cy="152" r="8"></circle></svg>';
    }
}
// editSocialButtons();
window.addEventListener("load", editSocialButtons);