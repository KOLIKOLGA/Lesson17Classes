const submit = document.getElementById("submit");
const education = document.getElementById("education");
const workExperience = document.querySelector("input[type=checkbox]");
const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");
const inputEmail = document.querySelector("#email");
const inputInstitution = document.querySelector("#institution");
const inputDateFinish = document.querySelector("#date-finish");
const inputPost = document.querySelector("#post");
const inputPlaceOfWork = document.querySelector("#place-of-work");
const tbody = document.querySelector(".tbody");

const workData =
  JSON.parse(localStorage.getItem("workData")) !== null
    ? JSON.parse(localStorage.getItem("workData"))
    : [];

const handleFormSubmit = (event) => {
  event.preventDefault();
  getEducation();
  showTab();
};

const getEducation = () => {
  let educationChoice = education.options[education.selectedIndex].value;

  if (educationChoice === "Высшее") {
    const value = workExperience
      ? workExperience.checked
      : workExperience.value;
    if (value) {
      workExperience.value = "есть";
    } else {
      workExperience.value = "нет";
    }
    const newWork = new Higher(
      inputName.value,
      inputAge.value,
      inputEmail.value,
      educationChoice,
      inputInstitution.value,
      inputDateFinish.value,
      workExperience.value,
      inputPost.value,
      inputPlaceOfWork.value
    );
    newWork.test();
    newWork.seyHello();
    workData.push(newWork);
  }
  if (educationChoice === "Средне-специальное") {
    const value = workExperience
      ? workExperience.checked
      : workExperience.value;
    if (value) {
      workExperience.value = "есть";
    } else {
      workExperience.value = "нет";
    }
    const newWork = new Special(
      inputName.value,
      inputAge.value,
      inputEmail.value,
      educationChoice,
      inputInstitution.value,
      inputDateFinish.value,
      workExperience.value,
      inputPost.value,
      inputPlaceOfWork.value
    );
    newWork.test();
    newWork.seyHello();
    workData.push(newWork);
  }
  if (educationChoice === "Среднее") {
    const value = workExperience
      ? workExperience.checked
      : workExperience.value;
    if (value) {
      workExperience.value = "есть";
    } else {
      workExperience.value = "нет";
    }
    const newWork = new Secondary(
      inputName.value,
      inputAge.value,
      inputEmail.value,
      educationChoice,
      inputInstitution.value,
      inputDateFinish.value,
      workExperience.value,
      inputPost.value,
      inputPlaceOfWork.value
    );
    newWork.test();
    newWork.seyHello();
    workData.push(newWork);
  }
  console.log(workData);
  console.log(workExperience.value);
  localStorage.setItem("workData", JSON.stringify(workData));
};

const showTab = () => {
  tbody.innerHTML = "";
  workData.forEach((item, index) => {
    const remove = document.createElement("tr");
    remove.innerHTML = `<button class="delete-btn">Удалить</button>`;
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${item.name}</th>
          <th>${item.email}</th>
          <th>${item.age}</th>
          <th>${item._education}</th>
          <th>${item._institution}</th>
          <th>${item._dateFinish}</th>
          <th>${item._workExperience}</th>
          <th>${item._post}</th>
          <th>${item._placeOfWork}</th>
          <th>${remove.innerHTML}</th>`;
    tbody.append(tr);
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn[index].addEventListener("click", () => {
      tr.innerHTML = "";
      workData.splice(index, 1);
      localStorage.setItem("workData", JSON.stringify(workData));
      showTab();
    });
    inputName.value = "";
    inputEmail.value = "";
    inputAge.value = "";
    education.children[0].selected = true;
    inputInstitution.value = "";
    inputDateFinish.value = "";
    workExperience.checked = false;
    inputPost.value = "";
    inputPlaceOfWork.value = "";
  });
};
if (workData !== []) {
  showTab();
}
submit.addEventListener("click", handleFormSubmit);
