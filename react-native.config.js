module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
    appcenter: {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
    'appcenter-analytics': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
    'appcenter-crashes': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
  assets: ['./assets/fonts/'],
};
