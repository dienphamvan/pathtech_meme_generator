import { RgbColor } from 'react-colorful'

export const BASE_URL = 'http://localhost:5555'

export const API_ROUTES = {
  generate: '/api/generate',
}

export type InputDataType = {
  image: any | undefined
  caption: string | undefined
  x: string | undefined
  y: string | undefined
  color: RgbColor | undefined
}
