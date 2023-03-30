module.exports = [
  {
    id: 'esa',
    mailingList: {
      development: 2,
      staging: 2,
      production: 4,
    },
    match: ['race.esa.int', 'eodash.eox.at', 'eodash-staging.eox.at', 'eodash-testing.eox.at', 'race.eox.world', 'race.localhost'],
    branding: {
      appName: 'Rapid Action for Citizens with Earth Observation',
      shortName: 'RACE Dashboard',
      primaryColor: '#003247',
      secondaryColor: '#00ae92',
      headerLogo: './eodash-data/general/RACE_Logo.png',
      faviconPath: './public/img/ESA/favicon.ico',
    },
    pageMeta: {
      rootPath: 'https://race.esa.int',
      googleSiteVerification: 'RfWilP51Q2wsZnVlKbxUTovIx90QqqLRFLebGpAeq14',
      shortDescription: 'This dashboard aims to showcase the power of Earth Observations to inform on societal global challenges. It is a cooperation between The European Space Agency and the European Commission.',
      twitterCardImagePath: '/img/ESA/twitter_card.jpg',
      imagePath: '/img/ESA',
    },
    storyPath: '/eodash-data/stories/',
    showNewsletterButton: true,
    customCSS: 'esa',
    newsBanner: {
      color: 'green darken-1',
      icon: 'calendar-star',
      text: '<a href="https://eo4society.esa.int/2021/08/01/rapid-action-on-coronavirus-and-eo-race-dashboard-challenge-3/" target="_blank">Sign up for the RACE Dashboard Challenge #3</a>',
      startDate: '2021-08-01',
      endDate: '2021-11-30',
    },
    aboutText: '/eodash-data/general/about',
    welcomeText: '/eodash-data/general/welcome',
    tutorialText: '/eodash-data/general/tutorials',
    showNewsCarousel: true,
    newsCarouselitems: [
      {
        poi: 'ES4-E1b',
        src: './eodash-data/general/cimbelli.png',
      },
      {
        poi: 'W2-E12c',
        src: './eodash-data/general/new-trucks.png',
      },
    ],
    privacyText: '/eodash-data/general/privacy',
    termsText: '/eodash-data/general/terms',
    challengesText: '/eodash-data/general/challenges',
    feedbackTwitterHandles: ['esa_eo', 'EO_OPEN_SCIENCE', 'eurodatacube'],
    configuredMapPois: [],
    // The label parameter can be used as string to select the parameter identifier
    // or it can be an array of strings the same size as features to set custom
    // tab titles for each of the tabbed groups
    featureGrouping: [],
    demoMode: {
      egu2023: [
        {
          poi: 'GCAQ3-N1b',
        },
        {
          poi: 'WSF-WSF',
          story: '/eodash-data/stories/demo-mode/testDemoStory',
        },
        {
          poi: 'NO3-E1b',
        },
        {
          poi: 'WorldCO-N1',
          extent: [
            1059600.05368,
            5890267.49635,
            1913764.56152,
            6286458.69903,
          ],
          title: 'WorldCO over Austria',
          dataLayerTime: '2023-03-12',
        },
        {
          poi: 'GCAQ1-N1b',
          dataLayerTime: '2023-03-24',
          compareLayerTime: '2022-03-30',
        },
        {
          poi: 'CH4-N1',
        },
        {
          poi: 'World-N1',
        },
        {
          poi: 'CDS-CDS2',
        },
        {
          poi: 'CDS-CDS3',
        },
      ],
      test: [
        {
          poi: 'NO3-E1b',
        },
        {
          poi: 'CDS-CDS2',
        },
        {
          poi: 'CDS-CDS3',
        },
        {
          poi: 'World-N1',
        },
      ],
    },
  },
  {
    id: 'trilateral',
    mailingList: {
      development: 3,
      staging: 3,
      production: 5,
    },
    match: ['eodashboard.org', 'www.eodashboard.org', 'eodash-trilateral.eox.at', 'eodash-trilateral-staging.eox.at', 'eodash-trilateral-testing.eox.at', 'trilateral.eox.world', 'trilateral.localhost'],
    branding: {
      appName: 'Earth Observing Dashboard',
      primaryColor: '#333333',
      secondaryColor: '#004170',
      headerLogo: './data/trilateral/Trilateral_Logo.svg',
      faviconPath: './public/img/trilateral/favicon.ico',
      title: 'Earth Observing Dashboard',
      subtitle: 'Global environmental changes observed by NASA, ESA, and JAXA',
      coverImage: '/data/story-images/EO_Dashboard_kv_no logos.png',
      storiesHeader: 'Stories',
      headerHeight: '50vh',
    },
    pageMeta: {
      rootPath: 'https://eodashboard.org',
      googleSiteVerification: 'iHN2SaSR9qF7T3lOqNYSF4kaq_ZgK-I31SSgO5RKXW8',
      shortDescription: 'The Earth Observing Dashboard combines the resources, technical knowledge and expertise of three partner agencies ESA, JAXA, and NASA to strengthen our global understanding of the changing environment with human activity.',
      twitterCardImagePath: '/img/trilateral/twitter_card.png',
      imagePath: '/img/trilateral',
    },
    displayDummyLocations: './data/trilateral/dummylocations.csv',
    storyPath: '/data/trilateral/',
    customCSS: 'trilateral',
    newsBanner: {
      color: 'green darken-1',
      icon: 'calendar-star',
      text: '<b><a href="https://www.eodashboardhackathon.org/awards/" target="_blank">EO Dashboard Hackathon RESULTS!</a><b>',
      startDate: '2021-08-03',
      endDate: '2021-09-30',
    },
    aboutText: '/data/trilateral/about',
    welcomeText: '/data/trilateral/welcome',
    tutorialText: '/data/trilateral/tutorials',
    challengesText: '/eodash-data/general/eodashboardhackathon',
    showNewsCarousel: true,
    newsCarouselitems: [
      {
        poi: 'Onset-ADD',
        src: './data/trilateral/melt-maps.png',
      },
      {
        poi: 'BR04-PRCTS',
        src: './data/trilateral/new-precipitation-jaxa.png',
      },
      {
        poi: 'ThwaitesLandsat-ADD',
        src: './data/trilateral/landsat-antarctica.png',
      },
      {
        poi: 'S1GRD-ADD',
        src: './data/trilateral/s-1-antarctica.png',
      },
    ],
    customCountryList: [
      { code: 'US', region: 'NORTH AMERICA' },
      { code: 'PR', region: 'NORTH AMERICA' },
      { code: 'BE', region: 'EUROPE' },
      { code: 'HR', region: 'EUROPE' },
      { code: 'FR', region: 'EUROPE' },
      { code: 'GB', region: 'EUROPE' },
      { code: 'DE', region: 'EUROPE' },
      { code: 'IT', region: 'EUROPE' },
      { code: 'SI', region: 'EUROPE' },
      { code: 'ES', region: 'EUROPE' },
      { code: 'JP', region: 'ASIA' },
      { code: 'CN', region: 'ASIA' },
      { code: 'SG', region: 'ASIA' },
      { code: 'BD', region: 'ASIA' },
      { code: 'IN', region: 'ASIA' },
      { code: 'BR', region: 'SOUTH AMERICA' },
      { code: 'CL', region: 'SOUTH AMERICA' },
      { code: 'PE', region: 'SOUTH AMERICA' },
      { code: 'TG', region: 'AFRICA' },
      { code: 'TZ', region: 'AFRICA' },
      { code: 'EG', region: 'AFRICA' },
    ],
    configuredMapPois: [
      'DE1-E13c', 'PL1-E13c', 'BE3-E13c', 'FR3-E13c', 'IT3-E13c',
      'IT9-E13b', 'FR8-E13b', 'UK4-E13b', 'EG1-E13c', 'EG01-N1', 'EG01-N2',
      'EG01-SIF',
    ],
    featureGrouping: [],
    privacyText: '/data/trilateral/privacy',
    termsText: '/data/trilateral/terms',
    feedbackTwitterHandles: ['ESA_EO', 'esa', 'NASAEarth', 'NASA', 'JAXA_en', 'JAXA_jp', 'eurodatacube'],
    countDownTimer: '2020-06-25T13:30:00.000+02:00',
    countDownMatch: ['eodashboard.org', 'www.eodashboard.org', 'eodash-trilateral.eox.at'],
    enableStories: true,
  },
  {
    id: 'gtif',
    mailingList: {
      development: 6,
      staging: 6,
      production: 7,
    },
    match: ['gtif.esa.int', 'gtif.eox.at', 'gtif-demo.eox.at', 'gtif-staging.eox.at', 'gtif-testing.eox.at', 'gtif.eox.world', 'gtif.localhost'],
    branding: {
      appName: 'Green Transition Information Factory',
      primaryColor: '#003247',
      secondaryColor: '#00ae9d',
      headerLogo: './data/gtif/images/gtif_attributions_logo.png',
      faviconPath: './public/img/ESA/favicon.ico',
      title: 'Green Transition Information Factory',
      subtitle: 'Key element of the ESA Space For Green Future Accelerator',
      coverImage: './data/gtif/images/image1.png',
      storiesHeader: 'Subdomains',
      headerHeight: '30vh',
    },
    pageMeta: {
      rootPath: 'https://gtif.esa.int',
      googleSiteVerification: '',
      shortDescription: 'Green Transition Information Factory',
      twitterCardImagePath: '/img/gtif/twitter_card.jpg',
      imagePath: '/img/gtif',
    },
    storyPath: '/data/gtif/stories/',
    showNewsletterButton: false,
    customCSS: 'gtif',
    newsBanner: {
      color: 'green darken-1',
      icon: 'calendar-star',
      text: '<a href="https://eo4society.esa.int/2021/08/01/rapid-action-on-coronavirus-and-eo-race-dashboard-challenge-3/" target="_blank">Sign up for the RACE Dashboard Challenge #3</a>',
      startDate: '2021-08-01',
      endDate: '2021-11-30',
    },
    aboutText: '/data/gtif/stories/about',
    welcomeText: '/data/gtif/stories/welcome',
    tutorialText: '/data/gtif/stories/tutorials',
    showNewsCarousel: true,
    newsCarouselitems: [
      {
        poi: 'WSF-WSF',
        src: './eodash-data/general/WSF.png',
      },
      {
        poi: 'SO2-N1',
        src: './eodash-data/general/TROPOMI-SO2.png',
      },
    ],
    privacyText: '/data/gtif/markdown/privacy',
    termsText: '/data/gtif/markdown/terms',
    challengesText: '/eodash-data/general/challenges',
    feedbackTwitterHandles: ['esa_eo', 'EO_OPEN_SCIENCE', 'eurodatacube', 'gtif'],
    configuredMapPois: [],
    featureGrouping: [],
    enableStories: false,
    enableESALayout: true,
    enableScrollyTelling: true,
    enableIndicatorSidebar: true,
  },
];
