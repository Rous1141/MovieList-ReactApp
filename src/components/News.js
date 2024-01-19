
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
export default function News() {
  const { theme} = useContext(ThemeContext)
  return (
    <div className='background' style={{backgroundImage: theme.backgroundImage,transition: 'all 1s ease-in-out'}}>
      <div className='head'style={{transition: theme.transition,background:theme.background}}>
       <div className='product-card'>
        <div className='product-thumb'>
          <img src={`https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_spiderverse2_poster_4.jpg`} alt=''/>
        </div>
        <div className='news-details'>
        <div className='name'>Movie Of The Week</div>
            <h4>Spiderman: Across The Spiderverse</h4>
            <h4>GOOD SHOW!</h4>
            <h4>direct</h4>
            <div className='product-price'>Rating: 10/10</div>
            <div className='product-bottom-details'><p>Descrisption:</p></div>
        </div>
    </div>
  </div>
  </div>
  )
}