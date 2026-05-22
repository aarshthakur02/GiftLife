document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData || userData.role !== "RECIPIENT") {
        alert("Access restricted to recipients.");
        window.location.href = "index.html";
        return;
    }

    const matchesList = document.getElementById("matchesList");

    function findMatches() {
<<<<<<< HEAD
        fetch(`https://organs-donation-website-production.up.railway.app/matching/find?recipientId=${userData.id}`, {
=======
        fetch(`http://localhost:8080/matching/find?recipientId=${userData.id}`, {
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
            method: "POST"
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            loadMatches(); // Refresh the matches list after finding
        })
        .catch(error => console.error("Error finding matches:", error));
    }

    function loadMatches() {
<<<<<<< HEAD
        fetch("https://organs-donation-website-production.up.railway.app/matching/all")
=======
        fetch("http://localhost:8080/matching/all")
>>>>>>> 76a15d64b9c7d35b619d95400750348aebf7daaa
            .then(response => response.json())
            .then(matches => {
                if (matches.length === 0) {
                    matchesList.innerHTML = "<p>No matches found</p>";
                } else {
                    matchesList.innerHTML = matches
                        .filter(match => match.recipient.id === Number(userData.id))
                        .map(match => `
                            <div class="match">
                                <p>Donor: ${match.donor.user.name}</p>
                                <p>Organ: ${match.donor.organType}</p>
                                <p>Blood Type: ${match.donor.bloodType}</p>
                            </div>
                        `).join("");
                }
            })
            .catch(error => console.error("Error loading matches:", error));
    }

    function logout() {
        localStorage.removeItem("user");
        window.location.href = "index.html";
    }

    // Auto-load matches when the page loads
    loadMatches();

    // Attach the findMatches function to the button in case it's missing
    document.querySelector("button[onclick='findMatches()']").addEventListener("click", findMatches);
});
