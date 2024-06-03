const MessageStorage = require('./messageStorage');
const MessageManager = require('./messageManager');

const storage = new MessageStorage();
const manager = new MessageManager(storage);

manager.on('messageReceived', (message) => {
    console.log(`Event: Message received - ${message}`);
});

manager.sendMessage('Hello, world!');
manager.sendMessage('How are you?');
manager.receiveMessage('Fine, thank you.');
manager.showReceivedMessages();
