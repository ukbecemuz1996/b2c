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

    document.querySelectorAll(".claims-provider-list-buttons .options").forEach((element1) => {
        document.querySelectorAll("#localAccountForm .divider").forEach((element2) => {
            element2.after(element1);
        })
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

window.addEventListener("load", editSocialButtons);