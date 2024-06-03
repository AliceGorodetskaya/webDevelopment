const EventEmitter = require('events');

class PizzaOrder extends EventEmitter {
    constructor() {
        super();
    }

    placeOrder(pizza) {
        console.log(`Placing order for ${pizza} pizza...`);
        this.emit('orderPlaced', pizza);
    }

    preparePizza(pizza) {
        console.log(`Preparing ${pizza} pizza...`);
        this.emit('pizzaPrepared', pizza);
    }

    packPizza(pizza) {
        console.log(`Packing ${pizza} pizza...`);
        this.emit('pizzaPacked', pizza);
    }

    deliverPizza(pizza) {
        console.log(`Delivering ${pizza} pizza...`);
        this.emit('pizzaDelivered', pizza);
    }
}

module.exports = PizzaOrder;
