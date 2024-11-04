let sendGetRequestBtn = document.getElementById("sendGetRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");


function getResult() {
    let options = {
        method: "GET",
    }
    loading.classList.remove("d-none");
    requestStatus.classList.add("d-none")

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })

        .then(function(jsonData) {
            loading.classList.add("d-none");
            requestStatus.classList.remove("d-none")
            let requestStatusCode = jsonData.code;
            let httpResponseText = JSON.stringify(jsonData);
            requestStatus.textContent = requestStatusCode;
            httpResponse.textContent = httpResponseText;
        })
}


sendGetRequestBtn.addEventListener("click", getResult);