import { SpaceAge } from '../src/js/spaceAge.js';

describe('SpaceAge class', () => {

  test('should create new age calculator object with all properties', () => {
  const mercuryAgeObject = new SpaceAge(42, 100, .24);  
  expect(mercuryAgeObject.userAge).toEqual(42); 
  expect(mercuryAgeObject.userLifeExpectancy).toEqual(100);
  expect(mercuryAgeObject.planetYearsInEarthYears).toEqual(.24); 
  })  
});
  test('should calculate userAge on selected planet', () => {
    const mercuryAgeCalculator = new SpaceAge(42, 100, .24);
    expect(mercuryAgeCalculator.calculateAge()).toEqual(175);
})
  test('should calculate userAge on selected planet', () => {
    const venusAgeCalculator = new SpaceAge(42, 100, .62);
    expect(venusAgeCalculator.calculateAge()).toEqual(68);
})
  test('should calculate userAge on selected planet', () => {
    const marsAgeCalculator = new SpaceAge(42, 100, 1.88);
    expect(marsAgeCalculator.calculateAge()).toEqual(22);
})
  test('should calculate userAge on selected planet', () => {
    const jupiterAgeCalculator = new SpaceAge(42, 100, 11.86);
    expect(jupiterAgeCalculator.calculateAge()).toEqual(4);
})
