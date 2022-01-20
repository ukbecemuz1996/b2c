
// const hello = () => {
//     console.log("iam here");
// }

// const editSocialButtons = () => {
//     // document.getElementsByClassName("accountButton").forEach(element => {
//     //     console.log(element);
//     // });
//     let btns = document.querySelectorAll("accountButton");
//     console.log(btns);
//     Array.from(btns).forEach(function (element) {
//         console.log(element)
//     });

//     // [].forEach.call(btns, (btn) => {
//     //     console.log(btn)
//     // })

// }


// window.addEventListener("load", editSocialButtons);

$(document).ready(function () {

    $(".accountButton").on("click",function(e){
        e.preventDefault();
        alert("test")
    })
})