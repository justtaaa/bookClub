fetch('/api/members', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john.doe@example.com'
    })
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


// Add a new member
function addMember(member) {
    fetch('/api/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(member)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}
document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    fetch('/api/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('message').textContent = "Member added successfully!";
            // Reset the form if needed
            document.getElementById('interestForm').reset();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('message').textContent = "Error adding member.";
        });
});
