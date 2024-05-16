console.log("hi");
const applicantForm = document.getElementById("person");
const inputId = document.querySelector("#id");
const inputs = document.querySelectorAll("input");
const specialization = document.querySelector("#specialization");
const tbody = document.querySelector(".tbody");

let good = [];
let obj = {};
let tabletItem = {};

function serializeForm(formNode) {
  const { elements } = formNode;

  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, type } = element;
      const value = type === "checkbox" ? element.checked : element.value;

      return { name, value };
    });

  data.forEach((i) => {
    let key = i.name;
    let value = i.value;
    obj[key] = value;
  });

  //tabletItem = JSON.parse(localStorage.getItem(`item${inputId.value}`));
}
console.log(obj);
//
// function getRowInTable() {
//   //tbody.innerHTML = "";
//   item = tabletItem;
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//   <td>${item.id}</td>
//   <td>${item.name}</td>
//   <td>${item.email}</td>
//   <td>${item.age}</td>
//   <td>${item.specialization}</td>
//   <td>${item.date}</td>
//   <td>${item.children}</td>

//   <td><button class="cart-btn-delete">x</button></td>
//   `;
//   tbody.append(tr);
//   tr.addEventListener("click", (event) => {
//     if (event.target !== "td") {
//       tr.innerHTML = "";
//     }
//   });
// }
const removeInputValue = () => {
  inputs.forEach((inp) => {
    inp.value = "";
    inp.checked = false;
    specialization.options.selectedIndex = "";
  });
};

const handleFormSubmit = (event) => {
  // Просим форму не отправлять данные самостоятельно
  event.preventDefault();
  serializeForm(applicantForm);
  removeInputValue();
  let id = getId();
  inputId.value = id;
  //getRowInTable();
  localStorage.setItem(`item`, JSON.stringify(obj));
  getItem = JSON.parse(localStorage.getItem(`item`));
  console.log(getItem.id);
  console.log(obj.id);
  good.push(obj);

  // if (getItem.id !== obj.id) {
  //   localStorage.setItem(`item`, JSON.stringify(obj));
  // }
  console.log(good);
  console.log(obj);

  console.log("Отправка!");
  //localStorage.setItem(`item${inputId.value}`, JSON.stringify(obj));
  //tabletItem = JSON.parse(localStorage.getItem(`item${inputId.value}`));
};

applicantForm.addEventListener("submit", handleFormSubmit);

function getId(length = 6) {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = "";

  for (let i = 0; i < length; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}

inputId.value = "1";
// personName() {
//   let name = document.getElementById("name").value;
//   console.log(name);
// }
// personEmail() {
//   let email = document.getElementById("email").value;
//   console.log(email);
// }
// personAge() {
//   let age = document.getElementById("age").value;
//   console.log(age);
// }
