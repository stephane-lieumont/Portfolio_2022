import { render, screen} from '~/config/config.jest'
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter  as Router } from 'react-router-dom';
import DevProject from '~/pages/DevProject';
import store from '~/store/main.store';

window.scrollTo = jest.fn()

describe('When call DevProject Page', () => {
  beforeAll(() => {
    jest.mock('react-router', () => ({
      ...jest.requireActual('react-router'), // use actual for all non-hook parts
      useParams: () => ({
        params: 'ProjectsDevData[0].hashName,'
      }),
      useRouteMatch: () => ({ url: 'ProjectsDevData[0].hashName'}),
    }));
  })


  test('Should render DevProject default', () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes location={'/portfolio-stephane-lieumont-developpeur/case-tes-potes-application-mobile-2022'}>          
              <Route path={'/portfolio-stephane-lieumont-developpeur/:params'} element={<DevProject title={'test'} />} />
          </Routes>
        </Router>
      </Provider>
    )

    const component = screen.getByTestId('project-page')

    expect(component).toBeInTheDocument()
  })
})