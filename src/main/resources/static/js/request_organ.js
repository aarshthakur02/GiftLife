document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("user"));
    
    if (!userData || userData.role !== "RECIPIENT") {
        alert("Only recipients can access this page.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("organRequestForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const organType = document.getElementById("organType").value;
        const bloodType = document.getElementById("bloodType").value;

        const requestBody = {
            organType: organType,
            bloodType: bloodType
        };

<<<<<<< HEAD
        fetch(`https://organs-donation-website-production.up.railway.app/recipient/request?userId=${userData.id}`, {
=======
        fetch(`http://localhost:8080/recipient/request?userId=${userData.id}`, {
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            window.location.href = "dashboard.html";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error submitting request.");
        });
    });
});
