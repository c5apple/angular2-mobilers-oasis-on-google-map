import { Angular2MobilersOasisOnGoogleMapPage } from './app.po';

describe('angular2-mobilers-oasis-on-google-map App', () => {
  let page: Angular2MobilersOasisOnGoogleMapPage;

  beforeEach(() => {
    page = new Angular2MobilersOasisOnGoogleMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
