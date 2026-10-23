// Знаходимо контейнер із картками піц.
const pizzaList = document.querySelector(".pizza-list");

// Знаходимо кнопку зі стрілкою вперед.
const nextPizza = document.querySelector("#next-pizza");

// Після натискання переносимо першу картку в кінець списку.
nextPizza.addEventListener("click", function () {
    const firstPizza = pizzaList.querySelector(".pizza-card");
    pizzaList.appendChild(firstPizza);
});

// Знаходимо кнопку зі стрілкою назад.
const prevPizza = document.querySelector("#prev-pizza");

// Після натискання переносимо останню картку на початок.
prevPizza.addEventListener("click", function () {
    const firstPizza = pizzaList.querySelector(".pizza-card");
    const lastPizza = pizzaList.querySelector(".pizza-card:last-child");

    pizzaList.insertBefore(lastPizza, firstPizza);
});

// Знаходимо кнопки вибору піц.
const orderMargherita = document.querySelector("#order-margherita");
const orderPepperoni = document.querySelector("#order-pepperoni");
const orderFourCheese = document.querySelector("#order-four-cheese");

// Показуємо інформацію про вибрану піцу.
orderMargherita.addEventListener("click", function () {
    alert("Вибрано: Маргарита\nКількість: 1\nСума: 189 грн.");
});

orderPepperoni.addEventListener("click", function () {
    alert("Вибрано: Пепероні\nКількість: 1\nСума: 229 грн.");
});

orderFourCheese.addEventListener("click", function () {
    alert("Вибрано: Чотири сири\nКількість: 1\nСума: 249 грн.");
});