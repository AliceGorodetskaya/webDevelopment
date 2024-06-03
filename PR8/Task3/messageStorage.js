class MessageStorage {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    getAllMessages() {
        return this.messages;
    }
}

module.exports = MessageStorage;
