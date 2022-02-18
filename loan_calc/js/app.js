document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loan-form');
    const sum = document.getElementById('amount');
    const pros = document.getElementById('interest');
    const dat = document.getElementById('years');

    const addSum = document.getElementById('item-month');
    const addTotal = document.getElementById('item-total');
    const addPros = document.getElementById('item-pros');
    const loader = document.getElementById('loader');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(sum.value === '' || pros.value === '' || dat.value === '') {
            alert('Проверьте все ли заполнили')
        }

        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);

        const sumValue = sum.value;
        const prosValue = pros.value;
        const datValue = dat.value;

        const fulData = datValue * 12;

        const resSum = sumValue / 100 * prosValue + Number(sumValue);
        const resPros = sumValue / 100 * prosValue
        const monthPay = resSum / fulData;
        
        addSum.innerHTML = monthPay;
        addTotal.innerHTML = resSum;
        addPros.innerHTML = resPros;
    });

})