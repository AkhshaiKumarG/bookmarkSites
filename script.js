// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let secondDiv = document.getElementById("secondDiv");


siteNameInput.addEventListener("change", function() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener("change", function() {
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
})


function verify() {
    if (siteNameInput.value === "" || siteUrlInput.value === "") {
        if (siteNameInput.value === "") {
            siteNameErrMsg.textContent = "Required*";
        }
        if (siteUrlInput.value === "") {
            siteUrlErrMsg.textContent = "Required*";
        }
    } else {
        createAndAppend();
        siteNameInput.value = "";
        siteUrlInput.value = "";
        siteNameErrMsg.textContent = "";
        siteUrlErrMsg.textContent = "";
    }
}

function createAndAppend() {
    let container = document.createElement("div");
    container.classList.add("lists-container");
    secondDiv.appendChild(container);
    // bookmarksList.appendChild(container);



    let list = document.createElement("li");
    // bookmarksList.classList.add("lists-container");
    list.style.listStyleType = "none";
    container.appendChild(list);


    let heading = document.createElement("h1");
    heading.textContent = siteNameInput.value;
    heading.classList.add("lists")
    list.appendChild(heading);

    let anchor = document.createElement("a");
    anchor.href = siteUrlInput.value;
    anchor.target = "_blank";
    anchor.textContent = siteUrlInput.value;
    list.appendChild(anchor);
    siteNameInput.value = "";
    siteUrlInput.value = "";
}

bookmarkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    verify();
})
