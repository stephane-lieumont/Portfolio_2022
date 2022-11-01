import { render } from '@testing-library/react';

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

  })

})