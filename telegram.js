document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const botToken = "7926821589:AAG3xHU9ndkceXMsCsRYH_xl4AYt2PQCDYU";
    const chatId = "7065751961";
    
    // Collect form data
    const firstName = document.getElementById("esmek").value;
    const lastName = document.getElementById("la9abek").value;
    const email = document.getElementById("email").value;
    const arduino = document.querySelector("select[name='Location']").value;
    const profession = document.querySelector("select[name='Location']").value;
    const message = document.querySelector("textarea[name='Name']").value;

    const text = `
New Form Submission:
👤 Name: ${firstName} ${lastName}
📧 Email: ${email}
🔹 Arduino: ${arduino}
🎓 Profession: ${profession}
📝 Message: ${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: text })
    }).then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Failed to send message.");
        }
    }).catch(error => {
        alert("Error: " + error);
    });
});
