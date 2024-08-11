import cors from 'cors'
import { randomUUID } from 'crypto'
import express, { Express } from 'express'
import multer from 'multer'
import sharp from 'sharp'
import { imagePath, port, svgTemplate } from './helper'
import fs from 'fs'
import path from 'path'

const app: Express = express()
app.use(cors())

let fileName: string

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath)
  },
  filename: function (req, file, cb) {
    fileName = randomUUID() + path.extname(file.originalname)
    cb(null, fileName)
  },
})

const upload = multer({ storage: storage })

app.post('/api/generate', upload.single('image'), async (req, res) => {
  const { caption, x, y, color } = req.body
  const parsedColor = JSON.parse(color) as { r: number; g: number; b: number }
  const fileNameOut = `${randomUUID()}${path.extname(fileName)}`

  // Generate the meme
  await sharp(`${imagePath}/${fileName}`)
    .composite([
      {
        input: Buffer.from(svgTemplate(caption, x, y, parsedColor)),
      },
    ])
    .jpeg()
    .toFile(`${imagePath}/${fileNameOut}`)

  // Delete the original image
  fs.unlinkSync(`${imagePath}/${fileName}`)

  res.json({ id: fileNameOut })
})

app.use('/static', express.static('./public'))

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`)
})
