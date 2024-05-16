class Special extends Person {
  constructor(
    name,
    age,
    email,
    education,
    institution,
    dateFinish,
    workExperience,

    post,
    placeOfWork
  ) {
    super(name, age, email);
    this._education = education;
    this._institution = institution;
    this._dateFinish = dateFinish;
    this._workExperience = workExperience;

    this._post = post;
    this._placeOfWork = placeOfWork;
  }

  test() {
    super.educationGroup();
  }
  get workExperience() {
    return this._workExperience;
  }
  set workExperience(workExperience) {
    this.workExperience = workExperience.value;
  }
  get education() {
    return this._education;
  }
  set education(education) {
    this.education = education.options[education.selectedIndex].value;
  }
  get institution() {
    return this._institution;
  }
  set institution(inputInstitution) {
    this.institution = inputInstitution.value;
  }
  get dateFinish() {
    return this._dateFinish;
  }
  set dateFinish(inputDateFinish) {
    this.dateFinish = inputDateFinish.value;
  }
  get post() {
    return this.post;
  }
  set post(inputPost) {
    this.post = inputPost.value;
  }
  get placeOfWork() {
    return this._placeOfWork;
  }
  set placeOfWork(inputPlaceOfWork) {
    this.placeOfWork = inputPlaceOfWork.value;
  }
}
