import { setSizeChoice } from "./transientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    const sizesHTML = sizes.map((size => {
        return `<input type="radio" name="size" value="${size.carets}" /> ${size.carets}`
    })
)
    return sizesHTML.join("")

}

const handleSizeChoice = (event) => {

    if (event.target.name === "size") {
        setSizeChoice(parseFloat(event.target.value))
    }
}
