import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

describe('test snapshot', () => {
  it('should render Rocket Container', () => {
    const renderRocketContainer = renderer.create(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    ).toJSON();
    expect(renderRocketContainer).toMatchSnapshot();
  });
});
