export class SpaceAge {
  constructor(userAge, userLifeExpectancy, planetYearsInEarthYears) {
  this.userAge = userAge;
  this.userLifeExpectancy = userLifeExpectancy;
  this.planetYearsInEarthYears = planetYearsInEarthYears;

}

calculateAge() {
  return parseInt((this.userAge / this.planetYearsInEarthYears).toFixed());

}

calculateExpectancy() {
  return parseInt((this.userLifeExpectancy / this.planetYearsInEarthYears).toFixed());
}

calculateYearsLeft() {

}

}