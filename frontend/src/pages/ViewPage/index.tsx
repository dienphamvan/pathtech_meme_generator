import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../helper/const'

const ViewPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <img
        src={`${BASE_URL}/static/images/${id}`}
        alt='Meme'
        className='m-auto pt-16'
      />
    </div>
  )
}

export default ViewPage
