// Function to handle the image upload
function handleImageUpload(accountNumber) {
  const uploadInput = document.getElementById(`upload${accountNumber}`);
  const profileImg = document.getElementById(`profile${accountNumber}`);

  uploadInput.addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
      profileImg.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
}

// Call the function for each account's upload button
handleImageUpload(1);
handleImageUpload(2);
handleImageUpload(3);

// Function to send a message
function sendMessage(accountNumber) {
  const messageInput = document.getElementById(`message${accountNumber}`);
  const messagesDiv = document.getElementById(`messages${accountNumber}`);

  if (messageInput.value.trim() !== "") {
    const message = document.createElement('div');
    message.textContent = messageInput.value;
    messagesDiv.appendChild(message);
    messageInput.value = ""; // Clear the message input
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the latest message
  }
}
