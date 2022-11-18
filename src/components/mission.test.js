import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Table from 'react-bootstrap/Table';
import Mission from './Mission';
import MissionContainer from './MissionContainer';
import NavBar from './NavBar';
import store from '../redux/configureStore';

describe('render Mission', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Table>
            <Mission
              key={1}
              id={1}
              name="Mission test"
              description="first mission"
              reserved={false}
            />
          </Table>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('render Mission', () => {
  it('should render a mission', () => {
    render(
      <Provider store={store}>
        <Table>
          <Mission
            key={1}
            id={1}
            name="Mission test"
            description="first mission"
            reserved={false}
          />
        </Table>
      </Provider>,
    );
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });

  it('should render a mission', () => {
    render(
      <Provider store={store}>
        <Table>
          <Mission
            key={1}
            id={1}
            name="Mission test"
            description="first mission"
            reserved
          />
        </Table>
      </Provider>,
    );
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });
});

describe('render Mission Container', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionContainer />
        </Provider>,
      )
      .toJSON();
    expect(tree).toBeDefined();
  });
});

describe('render Nav Bar', () => {
  it('should render Nav Bar', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
