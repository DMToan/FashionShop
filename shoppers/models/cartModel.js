exports.add = (cart, item) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].id === item.id) {
            cart[i].quantity += item.quantity;
            return;
        }
    }
    cart.push(item);
}

exports.remove = (cart, id) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        if (id === cart[i].id) {
            cart.splice(i, 1);
            return;
        }
    }
}

exports.add = (cart, items) => {
    for (var i = cart.length - 1; i >= 0; i--) {
        for (var j = items.lenght - 1; j >= 0; j--) {
            if (cart[i].id === items[j].id) {
                cart[i].quantity = items[j].quantity;
            }
        }
    }
    return;
}