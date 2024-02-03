// Fetch all members
fetch('/api/members')
    .then(response => response.json())
    .then(data => console.log(data));

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
