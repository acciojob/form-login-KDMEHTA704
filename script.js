document.addEventListener("DOMContentLoaded", function () {

function getFormvalue(event) {
    //Write your code here
	
    
        event.preventDefault(); // Prevent default form submission
        
        // Retrieve input values
        let firstName = document.querySelector("input[name='fname']").value.trim();
        let lastName = document.querySelector("input[name='lname']").value.trim();
        
        // Construct full name and show alert
        if (firstName || lastName) {
            alert(`${firstName} ${lastName}`.trim());
        } else {
            alert("Please enter your first and last name.");
        }
    }
    
    // Attach event listener to form
    document.getElementById("form1").addEventListener("submit", getFormvalue);
});


