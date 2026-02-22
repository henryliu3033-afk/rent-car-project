import HeroImage from './assets/irent.jpg'

function Hero(){
   return(
   <div className="hero-section">

     <img src={HeroImage} alt="Irent" />

     <div className="content">
       <h1>萬聖節有優惠 租車全部<span className='discount'>1折起!!</span></h1>
       <p>還在等什麼呢？跟你的好朋友一起出遊吧</p>
       <button className='reges'>趕快預定!</button>
     </div>

   </div>
   )
}

export default Hero