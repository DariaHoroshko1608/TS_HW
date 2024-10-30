const formatProductInfo = (product) => {
    const availability = product.available ? 'Так' : 'Ні';
    return `Товар: ${product.name}, Ціна: ${product.price} грн., В наявності: ${availability}`;
};

// Пример использования
const product = {
    name: "Машина",
    price: 80000,
    available: true
};

console.log(formatProductInfo(product));


