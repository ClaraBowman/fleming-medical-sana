/**
 * Initialise our custom scripts for Engagebay forms.
 */
export default function engagebay() {

  // Create extra fields for our forms that are useful for reporting.
  if (document.querySelector('.engagebay-forms')) {
    addHiddenFields();
  }
}

/**
 * Add extra hidden fields.
 */
function addHiddenFields() {
  // Create the 'Last In Touch' hidden input.
  let inputDate = document.createElement('input');
  inputDate.type = 'hidden';
  inputDate.id = 'Last_In_Touch';
  inputDate.name = 'Last_In_Touch';
  inputDate.setAttribute('data-ebay_field', 'Last In Touch');
  let date = new Date();
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  let year = date.getFullYear();
  inputDate.value = month + '-' + year;

  // Create the 'Last Visited URL' hidden input.
  let inputURL = document.createElement('input');
  inputURL.type = 'hidden';
  inputURL.id = 'Last_Visited_URL';
  inputURL.name = 'Last_Visited_URL';
  inputURL.setAttribute('data-ebay_field', 'Last Visited URL');
  inputURL.value = document.referrer;

  // Append the hidden inputs to our form.
  let form = document.querySelector('.engagebay-forms form');
  form.appendChild(inputURL);
  form.appendChild(inputDate);
}
