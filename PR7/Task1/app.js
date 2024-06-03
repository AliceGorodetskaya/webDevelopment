const mainFun = require('./task1.js'); 

const callback1 = () => {
    console.log('callback1 called');
};

const callback2 = () => {
    console.log('callback2 called');
};

mainFun(callback1, callback2);