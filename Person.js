class Person {
  constructor() {
    this.name = inputName.value;
    this.age = inputAge.value;
    this.email = inputEmail.value;
  }
  seyHello() {
    console.log(`Привет, меня завут ${this.name}!
  Мне ${this.age} года. Ваше решение Вы можете отправить мне на имеил ${this.email}`);
  }
  educationGroup() {
    let educationChoice = education.options[education.selectedIndex].value;
    return educationChoice;
  }
}
