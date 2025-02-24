export const calculateTotalPrice = (order) => {
    return order.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );
};

export const parseDate = (date) => {
    const dateParts = date.split("T");
    const timeParts = dateParts[1].split(":");

    return dateParts[0] + " " + timeParts[0] + ":" + timeParts[1];
}
