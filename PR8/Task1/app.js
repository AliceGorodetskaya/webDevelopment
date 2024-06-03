const PizzaOrder = require('./pizzaOrder');

const order = new PizzaOrder();

order.on('orderPlaced', (pizza) => {
    console.log(`Event: Order placed for ${pizza} pizza`);
    order.preparePizza(pizza);
});

order.on('pizzaPrepared', (pizza) => {
    console.log(`Event: ${pizza} pizza prepared`);
    order.packPizza(pizza);
});

order.on('pizzaPacked', (pizza) => {
    console.log(`Event: ${pizza} pizza packed`);
    order.deliverPizza(pizza);
});

order.on('pizzaDelivered', (pizza) => {
    console.log(`Event: ${pizza} pizza delivered`);
    console.log('Enjoy your pizza!');
});

order.placeOrder('Pepperoni');
