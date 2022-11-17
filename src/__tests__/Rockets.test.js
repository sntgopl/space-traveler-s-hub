import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Rockets from '../pages/Rockets';
import store from '../redux/configureStore';

describe('test snapshot', () => {
  it('should render Rocket Container', () => {
    const renderRocketContainer = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(renderRocketContainer).toMatchSnapshot();
  });
});
