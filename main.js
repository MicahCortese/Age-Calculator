import Datepicker from '/node_modules/vanillajs-datepicker/js/Datepicker.js';

const picker = document.querySelector('input[name="datepicker"]');
const currentDate = new Date();
const datepicker = new Datepicker(picker, {
    format: 'mm-dd-yyyy',
    maxDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
});