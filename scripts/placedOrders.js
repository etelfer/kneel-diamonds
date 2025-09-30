export const Orders = async () => {
    const fetchResponse = await fetch ("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
console.log(orders)
    let ordersHTML = orders.map(
        (order) => {
            let orderPrice = order.metal.price + order.style.price + order.size.price
            orderPrice = orderPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
            return `<div>Order #${order.id} Cost ${orderPrice}</div>`
        }
    ).join("")

    return ordersHTML
}