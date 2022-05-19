import { SpaceAge } from '../src/js/spaceAge.js';

describe('SpaceAge class', () => {

  test('should create new age calculator object with all properties', () => {
  const mercuryAgeObject = new SpaceAge(42, 100, .24);  
  expect(mercuryAgeObject.userAge).toEqual(42); 
  expect(mercuryAgeObject.userLifeExpectancy).toEqual(100);
  expect(mercuryAgeObject.planetYearsInEarthYears).toEqual(.24); 
  
});
  
  
  //let rectangle;

  /*beforeEach(() => {
    rectangle = new Rectangle(3,5);
  });*/

  /*test('should correctly create a rectangle object using two sides', () => {
    expect(rectangle.side1).toEqual(3);
    expect(rectangle.side2).toEqual(5);
  });

  test('should correctly get the area of a rectangle object', () => {
    expect(rectangle.getArea()).toEqual(15);
  });*/

});