function getFormvalue(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    let firstName = document.querySelector("input[name='fname']").value.trim();
    let lastName = document.querySelector("input[name='lname']").value.trim();
    
    // Handle cases where input fields might be empty
    if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

    // Ensure proper spacing between names
    let fullName = [firstName, lastName].filter(Boolean).join(" ");
    alert(fullName);
}

document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener to form
    document.getElementById("form1").addEventListener("submit", getFormvalue);
});
