module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'icons/minion',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
      {
          name: '@electron-forge/maker-dmg',
          config: {
              icon: 'icons/minion.icns',
              background: 'icons/dmg.png',
          },
      },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
