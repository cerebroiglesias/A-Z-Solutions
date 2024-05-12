$('#updateForm').submit(function() {
    var value = $('#update-id').val(); 
    this.action = '/articulos/' + value;
    return true;
});

const socket = io.connect();
let messages = [];

const messageInput = document.getElementById('message');
const ul = document.getElementById('messages');

socket.on('messages', (data) => {
    var receivedMessages = data;
    createMessages(receivedMessages)
})

const createMessages = (receivedMessages) => {
    for(var i = messages.length; i < receivedMessages.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `SocketID: ${receivedMessages[i].socketId} --> Message: ${receivedMessages[i].message}`
        ul.appendChild(li);
    }
    messages = receivedMessages
}

messageInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        sendMessage(event)
    }
})


function sendMessage(event) {
    socket.emit('message', messageInput.value);
    messageInput.value = '';
}