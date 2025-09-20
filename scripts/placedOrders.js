export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = fetchResponse.json()

    let ordersHTML = orders.map(
        (order) => {

        }
    )

    return ordersHTML
}