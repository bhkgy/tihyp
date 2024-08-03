document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage('You', userInput);
        // Simulate a response from Takamiya Tsukina
        setTimeout(() => {
            const reply = generateReply(userInput);
            appendMessage('Tsukina', reply);
        }, 500);
        document.getElementById('user-input').value = '';
    }
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(message) {
    // Simulate a simple reply mechanism
    const replies = [
        "That's interesting!",
        "Tell me more.",
        "Hmm, I see.",
        "What do you think about it?",
        "Could you elaborate?"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}
