import WrapperHoc from "./WrapperHoc"
import './LikeImageHoc.css'

function LikeImageHoc(props) {
  return (
    <div>
      <button className="like-btn" onClick={props.handleCounter}>Like Image {props.counter}</button>
    </div>
  )
}

export default WrapperHoc(LikeImageHoc);