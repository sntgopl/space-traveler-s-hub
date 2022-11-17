import rocketReducer, { cancelRocket, getRocket, reserveRocket } from '../redux/rockets/rockets';

describe('test list defined', () => {
  it('should list of rockets be defined', () => {
    const previousState = [];
    expect(rocketReducer(previousState, getRocket())).toBeDefined();
  });
  it('should reserve of rockets be defined', () => {
    const previousState = [];
    expect(rocketReducer(previousState, reserveRocket())).toBeDefined();
  });
  it('should cancel of rockets be defined', () => {
    const previousState = [];
    expect(rocketReducer(previousState, cancelRocket())).toBeDefined();
  });
});
