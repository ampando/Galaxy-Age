import { SpaceAge } from '../src/js/spaceAge.js';

describe('SpaceAge class', () => {

  test('should create new age calculator object with all properties', () => {
  const mercuryAgeObject = new SpaceAge(42, 100, .24);  
  expect(mercuryAgeObject.userAge).toEqual(42); 
  expect(mercuryAgeObject.userLifeExpectancy).toEqual(100);
  expect(mercuryAgeObject.planetYearsInEarthYears).toEqual(.24); 
  
});
  test()
    const mercuryAgeCalculator = new SpaceAge(42, 100, .24);
    expect(mercuryAgeCalculator.calculateAge()).toEqual(175);

  }
  

);