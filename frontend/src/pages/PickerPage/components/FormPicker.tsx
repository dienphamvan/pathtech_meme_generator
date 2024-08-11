import React from 'react'
import { RgbColor, RgbColorPicker } from 'react-colorful'
import CommonLabel from '../../../components/Label'
import { InputDataType } from '../../../helper/const'

type FormPickerProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputData: InputDataType
  setInputData: React.Dispatch<React.SetStateAction<InputDataType>>
}

const FormPicker = ({
  handleChange,
  handleSubmit,
  handleColorChange,
  inputData,
  setInputData,
}: FormPickerProps) => {
  return (
    <form className='pt-12 mx-auto max-w-[600px]' onSubmit={handleSubmit}>
      <div className='mb-4 flex'>
        <CommonLabel>Image</CommonLabel>
        <input
          className='border-2 w-96'
          type='file'
          name='image'
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4 flex'>
        <CommonLabel>Caption</CommonLabel>
        <input
          className='border-2 w-96'
          name='caption'
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4 flex'>
        <CommonLabel>Coordinates</CommonLabel>
        <div className='flex justify-between w-96'>
          <input
            type='number'
            className='border-2'
            placeholder='X'
            name='x'
            onChange={handleChange}
            required
          />
          <input
            type='number'
            className='border-2'
            placeholder='Y'
            name='y'
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex'>
        <CommonLabel>Color Picker</CommonLabel>
        <div className='flex gap-2'>
          <RgbColorPicker
            style={{ width: 100, height: 100 }}
            color={inputData.color}
            onChange={(newColor) => {
              setInputData({ ...inputData, color: newColor })
            }}
          />
          <span>
            <input
              type='number'
              className='border-2 w-14'
              value={inputData?.color?.r}
              required
              name='r'
              placeholder='R'
              onChange={handleColorChange}
            />
          </span>
          <span>
            <input
              type='number'
              className='border-2 w-14'
              required
              name='g'
              placeholder='G'
              value={inputData?.color?.g}
              onChange={handleColorChange}
            />
          </span>
          <span>
            <input
              type='number'
              className='border-2 w-14'
              required
              name='b'
              placeholder='B'
              value={inputData?.color?.b}
              onChange={handleColorChange}
            />
          </span>
        </div>
      </div>
      <button
        className='mx-auto block mt-5 bg-cyan-500 text-white px-10 rounded-lg py-2'
        type='submit'
      >
        Generate
      </button>
    </form>
  )
}

export default FormPicker
