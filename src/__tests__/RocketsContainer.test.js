import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketsContainer from '../components/RocketsContainer';
import store from '../redux/configureStore';

describe('test snapshot', () => {
  it('should render Rocket Container', () => {
    const renderRocketContainer = renderer.create(
      <Provider store={store}>
        <RocketsContainer />
      </Provider>,
    ).toJSON();
    expect(renderRocketContainer).toBeDefined();
  });
});
