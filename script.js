
document.getElementById("feedback-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value;

    const data = { name, email, feedback, rating };

    const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.text();
    console.log(result);
});