const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', calculateDiscountPrice);

function calculateDiscountPrice() {
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    // !price || !discount
    if(!price && !discount) {
        result.innerText = "Llena el formulario";
        return
    } else if (!price && discount) {
        result.innerText = "Te faltó poner el precio";
        return;
    } else if (price && !discount) {
        result.innerText = "Te faltó poner el descuento";
        return;
    }

    if(discount > 100) {
        result.innerText = "Sí, claro, un descuento del 100% :)"
        return;
    }
    const percentageDiscount = price * (100 - discount) / 100;
    result.innerText = `Nuevo precio a pagar: $${percentageDiscount}`;
}

