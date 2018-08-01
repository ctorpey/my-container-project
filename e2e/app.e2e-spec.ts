import { MyContainerProjectPage } from './app.po';

describe('my-container-project App', function() {
  let page: MyContainerProjectPage;

  beforeEach(() => {
    page = new MyContainerProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
