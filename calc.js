document.addEventListener('DOMContentLoaded', function () {
    const productTypeRadios = document.querySelectorAll('input[name="product-type"]');
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calcButton = document.getElementById('calc-btn');
    const resultDisplay = document.getElementById('result');
    const optionsContainer = document.getElementById('options-container');
    const checkboxContainer = document.getElementById('checkbox-container');
    const optionsSelect = document.getElementById('options');
    const checkbox = document.getElementById('checkbox');

    // Обработчик изменений типа товара
    productTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateForm);
    });

    // Обработчик нажатия кнопки "Рассчитать стоимость"
    calcButton.addEventListener('click', calculateCost);

    // Функция для обновления формы в зависимости от выбранного типа товара
    function updateForm() {
        const selectedType = document.querySelector('input[name="product-type"]:checked').value;
        
        switch (selectedType) {
            case '1':  // Тип 1: без опций и свойств
                optionsContainer.style.display = 'none';
                checkboxContainer.style.display = 'none';
                break;
            case '2':  // Тип 2: с опциями
                optionsContainer.style.display = 'block';
                checkboxContainer.style.display = 'none';
                break;
            case '3':  // Тип 3: с свойствами
                optionsContainer.style.display = 'none';
                checkboxContainer.style.display = 'block';
                break;
        }
    }

    // Функция для расчета стоимости
    function calculateCost() {
        const quantity = parseInt(quantityInput.value);
        const productPrice = parseInt(productSelect.value);
        let totalCost = productPrice * quantity;

        // Опции
        if (optionsSelect.style.display !== 'none') {
            totalCost += parseInt(optionsSelect.value);
        }

        // Свойства (чекбокс)
        if (checkboxContainer.style.display !== 'none' && checkbox.checked) {
            totalCost += parseInt(checkbox.value);
        }

        // Отображение результата
        resultDisplay.textContent = `Итоговая стоимость: ${totalCost} руб.`;
    }

    // Инициализация формы при загрузке страницы
    updateForm();
});
