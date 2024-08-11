import { InputDataType } from '../../../helper/const'

type PreviewProps = {
  inputData: InputDataType
}

const Preview = ({ inputData }: PreviewProps) => {
  return (
    <div className='text-center'>
      <div className='inline-block relative overflow-hidden'>
        <img
          src={URL.createObjectURL(inputData.image)}
          alt='Preview'
          className='w-96 h-96 object-contain'
        />
        <span
          className='absolute text-[40px] font-medium'
          style={{
            top: `${Number(inputData.y) - 50}px`,
            left: `${Number(inputData.x) - 25}px`,
            color: `rgb(${inputData.color?.r}, ${inputData.color?.g}, ${inputData.color?.b})`,
          }}
        >
          {inputData.caption}
        </span>
      </div>
    </div>
  )
}

export default Preview
