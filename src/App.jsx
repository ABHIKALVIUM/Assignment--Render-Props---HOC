import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';
import LikePostHoc from './components/LikePostHoc';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>

      <h3>Some Blog</h3>

      <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div>

    </div>
  );
}

export default App;
