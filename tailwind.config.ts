import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0A2A51'
        },
        gray: {
          50: '#E9EDF5'
        },
        rose: '#E20054'
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}