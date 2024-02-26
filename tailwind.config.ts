import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: [
        'iransansxv',
        {
          fontFeatureSettings: '"ss02"',
          fontVariationSettings: '"dots" 8'
        }
      ]
    },
    extend: {
      colors: {
        red: {
          50: '#FCE5EE',
          200: '#F180A9'
        },
        blue: {
          900: '#0A2A51'
        },
        gray: {
          50: '#E9EDF5',
          500: '#647E9A',
          700: '#445A74',
          900: '#253343'
        },
        rose: {
          500: '#E20054'
        }
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}