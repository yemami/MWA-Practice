
exports.calculateSubTotalPrice = cartItems => {
    const result = cartItems.reduce(
        (acc, cartItem) => acc + cartItem.amount * cartItem.price, 0
    )
    return result.toFixed(2)
}

exports.calculateTotalPrice = subTotal => {
    return (subTotal * 1.15).toFixed(2); // flat 15% service charge
}
