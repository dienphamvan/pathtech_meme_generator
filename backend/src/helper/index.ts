export const imagePath = 'public/images'
export const port = 5555

export const svgTemplate = (
  caption: string,
  x: number,
  y: number,
  color: { r: number; g: number; b: number }
) => `<svg width="500" height="500">
          <text 
          x="${x}"
          y="${y}" 
          font-size="50" 
          fill="rgb(${color.r},${color.g},${color.b})">
            ${caption}
          </text>
      </svg>`
