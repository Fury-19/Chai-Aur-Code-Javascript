const form = document.querySelector('form');

// We are using the height and weight values inside form beacuse intially thise entries are empty.

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stops submission of form!!

    const hgt = parseInt(document.querySelector('#height').value);

    // We need to parse the value to Int since the value is string initially!!

    const wgt = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results')

    if (hgt < 0 || isNaN(hgt))
    {
        result.innerHTML = "Please give a valid input height!!"
    }
    else if (wgt < 0 || isNaN(wgt))
    {
        result.innerHTML = "Please give a valid input weight!!"
    }
    else
    {
        const bmi = (wgt / ((hgt * hgt / 10000))).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        // To further add the HTML we can use '+=' on innerHTML OR we first createElement('p') and further use
        // textContent to add the statements in the respective tag 
        if (bmi < 18.6)
        {
            result.innerHTML += `<p>You are under weight!</p>`
        }
        else if (bmi >= 18.6 && bmi < 24.9)
        {
            result.innerHTML += `<p>You are in normal weight range!</p>`
        }
        else
        {
            result.innerHTML += `<p>You are over weight!</p>`
        }
    }
})