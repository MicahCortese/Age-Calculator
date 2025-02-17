import Datepicker from '/node_modules/vanillajs-datepicker/js/Datepicker.js';

const picker = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(picker, {
    format: 'mm-dd-yyyy'
});