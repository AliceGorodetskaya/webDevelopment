const EventEmitter = require('events');

class MessageManager extends EventEmitter {
    constructor(storage) {
        super();
        this.storage = storage;
    }

    sendMessage(message) {
        console.log(`Sending message: ${message}`);
        this.emit('messageSent', message);
    }

    receiveMessage(message) {
        console.log(`Receiving message: ${message}`);
        this.storage.addMessage(message);
        this.emit('messageReceived', message);
    }

    showReceivedMessages() {
        const receivedMessages = this.storage.getAllMessages();
        console.log('Received messages:');
        receivedMessages.forEach((message, index) => {
            console.log(`${index + 1}. ${message}`);
        });
    }
}

module.exports = MessageManager;
