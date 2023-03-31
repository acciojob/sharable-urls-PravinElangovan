// your code here
const form = document.querySelector('form');
const url = document.querySelector('#url');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const name = form.elements.name.value;
  const year = form.elements.year.value;

  // Construct the query string
  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

  // Update the URL in the h3 element
  url.textContent = `https://localhost:8080/${queryString}`;
});
