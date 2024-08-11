import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ROUTES, BASE_URL, InputDataType } from '../../helper/const'
import FormPicker from './components/FormPicker'
import Preview from './components/Preview'

const initialInputData: InputDataType = {
  image: undefined,
  caption: undefined,
  x: undefined,
  y: undefined,
  color: undefined,
}

function PickerPage() {
  const [inputData, setInputData] =
    React.useState<InputDataType>(initialInputData)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // Send form data
      const formData = new FormData()
      formData.append('image', inputData.image)
      formData.append('caption', inputData.caption || '')
      formData.append('x', inputData.x || '')
      formData.append('y', inputData.y || '')
      formData.append('color', JSON.stringify(inputData.color))

      const response = await fetch(`${BASE_URL}${API_ROUTES.generate}`, {
        method: 'POST',
        body: formData,
      })

      const data = (await response.json()) as { id: string }

      navigate(`/${data.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (value < 0 || value > 255) return

    const newColor = {
      ...(inputData.color || { r: 0, g: 0, b: 0 }),
      [event.target.name]: parseInt(event.target.value, 10),
    }

    setInputData({
      ...inputData,
      color: newColor,
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target

    let transformedValue: any = value

    if (type === 'file') {
      transformedValue = event.target.files?.[0]
    } else if (type === 'number') {
      transformedValue = Number(value)
    }

    setInputData({
      ...inputData,
      [name]: transformedValue,
    })
  }

  return (
    <>
      <FormPicker
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleColorChange={handleColorChange}
        inputData={inputData}
        setInputData={setInputData}
      />
      {inputData.image && <Preview inputData={inputData} />}
    </>
  )
}

export default PickerPage
