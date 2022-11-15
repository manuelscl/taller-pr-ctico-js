const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', calculateDiscountPrice);

const couponsList = [];
couponsList.push({
    name: 'COUPON1',
    discount: 50
});
couponsList.push({
    name: 'COUPON2',
    discount: 30
});
couponsList.push({
    name: 'COUPON3',
    discount: 20
});
couponsList.push({
    name: 'COUPON4',
    discount: 10
});

function calculateDiscountPrice() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    // !price || !discount
    if(!price && !coupon) {
        result.innerText = "Llena el formulario";
        return
    }

    let discount;

    function isCouponInArray(couponName) {
        return couponName.name === coupon;
    }
    const couponsInArray = couponsList.find(isCouponInArray);

    if(couponsInArray) {
        discount = couponsInArray.discount;    
    } else {
        result.innerText = "El cupón no es válido";
        return;
    }

    const newPrice = price * (100 - discount) / 100;
    result.innerText = `Nuevo precio a pagar: $${newPrice}`;
}

