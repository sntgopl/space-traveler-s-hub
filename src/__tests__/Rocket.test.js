import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Rocket from '../components/Rocket';
import store from '../redux/configureStore';

describe('test snapshot', () => {
  it('should render Rocket Container', () => {
    const renderRocketContainer = renderer.create(
      <Provider store={store}>
        <Rocket
          key={1}
          id={1}
          name="Rocket test"
          type="Rocker"
          img="url test"
          description="It is a rocket"
          reserved={false}
        />
      </Provider>,
    ).toJSON();
    expect(renderRocketContainer).toMatchSnapshot();
  });
});

describe('test with testing library', () => {
  it('should change to cancel reservation', () => {
    render(
      <Provider store={store}>
        <Rocket
          key={1}
          id={1}
          name="Rocket test"
          type="Rocker"
          img="url test"
          description="It is a rocket"
          reserved
        />
      </Provider>,
    );
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });

  it('should change to reserve rocket', () => {
    render(
      <Provider store={store}>
        <Rocket
          key={1}
          id={1}
          name="Rocket test"
          type="Rocker"
          img="url test"
          description="It is a rocket"
          reserved={false}
        />
      </Provider>,
    );
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
});
