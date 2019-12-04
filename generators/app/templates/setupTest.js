process.env.NODE_ENV = 'test';

afterAll(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  delete process.env.IS_BROWSER;
});
