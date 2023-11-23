/* Class representing a pizza order */
class Pizza {
    constructor(size, crust, toppings, specialInstructions) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.specialInstructions = specialInstructions;
    }

    getDescription() {
        return 'A ' + this.size + ' size, ' + this.crust + ' crust pizza with ' +
               this.toppings.join(', ') + '. Special Instructions: ' + this.specialInstructions;
    }
}

/* Event listener for DOM content loaded */
document.addEventListener('DOMContentLoaded', function () {
    /* Dynamically setting the student information */
    document.getElementById('studentInfo').innerText = 'Student ID: 200542367, Name: Manas Sardana';

    /* Event listener for form submission */
    document.getElementById('pizzaForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var size = document.getElementById('pizzaSize').value;
        var crust = document.getElementById('crustType').value;
        var specialInstructions = document.getElementById('specialInstructions').value;
        var selectedToppings = [];

        /* Gathering selected toppings */
        document.querySelectorAll('input[name="toppings"]:checked').forEach(function (checkbox) {
            selectedToppings.push(checkbox.value);
        });

        /* Validation for at least one topping */
        if (selectedToppings.length === 0) {
            alert('Please select at least one topping.');
            return;
        }

        /* Creating a new Pizza object and showing the description in a pop-up window */
        var pizza = new Pizza(size, crust, selectedToppings, specialInstructions);
        alert(pizza.getDescription());
    });
});
