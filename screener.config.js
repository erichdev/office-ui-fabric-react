module.exports = {
  apiKey: process.env.SCREENER_API_KEY,
  projectRepo: 'erichdev/office-ui-fabric-react',
  hide: '.od-Header, .App-nav, .ComponentPage-overviewSection, .ComponentPage-bestPracticesSection, .ComponentPage-implementationSection, .od-OfficeFooter, [class^="pageHeader_"], .App-mobileNavBar, .App-mobileNavOverlay, .ms-App-header, .ms-App-nav, ',

  tunnel: {
    host: 'localhost:4321',
    gzip: true,
    cache: true
  },

  states: [
    // {
    //   name: 'Breadcrumb',
    //   url: 'https://dev.office.com/fabric#/components/breadcrumb'
    // },
    // {
    //   name: 'Button',
    //   url: 'https://dev.office.com/fabric#/components/button'
    // }
    {
      name: 'Button',
      url: 'http://localhost:4321/#/examples/button'
    }
  ],

  beforeEachScript: function () {
    document.querySelector('.ms-App-content').style.position = 'static';
  },
  
  failureExitCode: 0,
  
  baseBranch: 'master'
};
