import './index.css'

const ImageItem = props => {
  const {imageDetails, clickedThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  console.log(imageDetails)

  const onClickThumbnail = () => {
    clickedThumbnail(id)
  }

  return (
    <li className="list-image">
      <button className="tn-btn" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} className="tn-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
