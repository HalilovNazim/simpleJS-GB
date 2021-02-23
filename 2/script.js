var cart = {
    "sadkjsad": {
        'name': 'Samsung Galaxy S10',
        'count': '1',
        'price': 20,
    },
    "qweopkas": {
        'name': 'LG Optimus G E100500',
        'count': '2',
        'price': 1000,
    },
    "losjosoa": {
        'name': 'Nokia 2110',
        'count': '1',
        'price': 100,
    },
};

document.onclick = (event) => {
    if (event.target.classList.contains('plus')){
        plusFunction(event.target.dataset.id);
    } else if (event.target.classList.contains('minus')){
        minusFunction(event.target.dataset.id);
    } else if (event.target.classList.contains('delete')){
        deleteFunction(event.target.dataset.id);
    }
}

// увелечение количества товара
const plusFunction = (id) => {
    cart[id]['count']++;
    renderCart();
}

// уменьшение количества товара
const minusFunction = (id) => {
    if (cart[id]['count'] - 1 == 0){
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

// удаление товара с корзины
const deleteFunction = (id) => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

