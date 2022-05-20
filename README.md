# Space Age Calculator

#### Independent Project for Epicodus
#### Adrienne Matosich 05.19.2022

## An application that allows a user to calculate their age in various planetary years. Designed to show my ability with using Jest and test-driven development, red/green/refactor workflow, npm and a Webpack environment. 


### Specs
1. Create a class constructor for a user that includes properties of userAge, userLifeExpectancy and planetYearsInEarthYears.
Input: N/A
Output: class SpaceAge {
  constructor(userAge, userLifeExpectancy, planetYearsInEarthYears) {
  this.userAge = userAge;
  this.userLifeExpectancy = userLifeExpectancy;
  this.planetYearsInEarthYears = planetYearsInEarthYears;

2. Create a function prototype that calculates that user's age on the selected planet.
Input: userEarthAge: 42 years
Output: mercuryAge: 175 years

3. Create a function prototype that calculates the user's life expectancy on the selected planet.
Input: userLifeExpectancy: 100 years
Output: mercuryLifeExpectancy: 417 years

4. Create a function prototype that calculates how many years you have left to live on the selected planet given your life expectancy.
Input: userLifeExpectancy: 100, userAge: 42
Output: yearsLeft: 58/.24 = 242 years left 

5. Create a function prototype that will calculate if userEarthAge is greater than userLifeExpectancy and then return the difference in the selected planet years.
Input: userEarthAge: 101, userLifeExpectancy: 100
Output: userEarthAge - userLifeExpectancy / .24 = 4 mercuryYears beyond life expectancy


## Setup/Installation Requirements

* Clone this repository using: git clone https://github.com/ampando/Galaxy-Age.git
* Navigate to the galaxy-age folder 
* Open with VS Code using 'code .' or another text editor of your choosing
* Run npm install to install dependencies
* Run npm run start to open a web server to view the site
* Also available on GitHub pages here: https://ampando.github.io/Galaxy-Age/

## Known Bugs
No known bugs.

 
## Support and contact details

Contact me at amatosich@gmail.com 

## Technologies Used

HTML
CSS
JavaScript
jQuery
Jest
Webpack

### License

GPL license distribution

Copyright (c) 2022, Adrienne Matosich