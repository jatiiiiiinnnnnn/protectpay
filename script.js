// Function to move items from Pending Approval to Past Approval
function moveToPastApproval(button, accepted = true) {
    const requestItem = button.parentElement;
    const pastApprovalList = document.getElementById('past-list');
  
    // Update the text based on acceptance or rejection
    const status = accepted ? "Accepted" : "Rejected";
    requestItem.querySelector('span').textContent += ` - ${status}`;
  
    // Remove the buttons
    requestItem.removeChild(requestItem.querySelector('.accept-btn'));
    requestItem.removeChild(requestItem.querySelector('.reject-btn'));
  
    // Move the item to the past approval list
    pastApprovalList.appendChild(requestItem);
  }
  