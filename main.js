import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/es6/luxon.min.js';
import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/es6/luxon.js';
import Datepicker from 'https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.1.4/js/Datepicker.min.js';
import Datepicker from 'https://cdn.jsdelivr.net/npm/vanillajs-datepicker@1.3.4/dist/js/Datepicker.js';

// Initialize the datepicker, set the format to 'mm-dd-yyyy', and set the max date to the current date
const picker = document.querySelector('input[name="datepicker"]');
const currentDate = new Date();
const datepicker = new Datepicker(picker, {
    format: 'mm-dd-yyyy',
    maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
});

const button = document.querySelector('#calculate-btn');

// Calculate the age based on the selected date
button.addEventListener('click', () => {
    const selectedDate = DateTime.fromFormat(picker.value, 'MM-dd-yyyy');
    const now = DateTime.now();
    const diff = now.diff(selectedDate, ['years', 'months', 'days']);
    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days % 30); // Approximate days in a month

    // If the datepicker is not empty, display the calculation
    if (picker.value !== '') {
        document.getElementById('result').innerHTML = (`You are ${years} year(s), ${months} month(s), and ${days} day(s) old`);
    }
});