document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();


    var formData = {
        name: document.getElementById("nameInput").value,
        email: document.getElementById("emailInput").value,
        message: document.getElementById("messageInput").value
    };


    fetch('umeshduni66@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");

                document.getElementById("contactForm").reset();
            } else {
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error sending message. Please try again later.");
        });
});
