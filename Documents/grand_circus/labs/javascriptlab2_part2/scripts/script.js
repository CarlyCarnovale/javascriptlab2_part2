const awesomePeople = [];

function handleSubmit(event) {
  event.preventDefault();

  awesomePeople.push({
    Name: event.target[0].value, // event.target[0].value refers to the form's first input's value property
    Email: event.target[1].value, // event.target[1].value refers to the form's first input's value property
    Phone: event.target[2].value,// event.target[2].value refers to the form's first input's value property
    Family: event.target[3].value // event.target[3].value refers to the form's first input's value property

});

  displayPeople();
}

function displayPeople() {
  document.querySelector(".info_container").innerHTML = "";

  awesomePeople.forEach((person, index) => {
    const div = document.createElement("div");
    div.classList.add("classdiv");
    div.innerHTML = `
    <p>Name: ${person.Name}</p>
    <p>Email: ${person.Email}</p>
    <p>Phone: ${person.Phone}</p>
    <p>Family: ${person.Family}</p>
    <i class="fas fa-trash"></i>
    `;

    document.querySelector(".info_container").append(div);
  });
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleDelete(event) {

  awesomePeople.splice(Number(event.target.attributes[0].value), 1);
  displayPeople();
}

document
  .querySelector(".info_container")
  .addEventListener("click", handleDelete);
