import ImageBmwLogo from './assets/bmw-logo.webp'



function Brands({ img, alt, models }) {
  return (
    <div className="brands">

      {/* 品牌 LOGO */}
      <img className="brand-logo" src={img} alt={alt} />

      {/* 車型圖片 */}
      <div className="models">
        <img className="model-top-right" src={models[0]} alt={`${alt}-top`} />
        <img className="model-top-left" src={models[1]} alt={`${alt}-bottom`} />
        <img className="model-bottom-left" src={models[2]} alt={`${alt}-left`} />
        <img className="model-bottom-right" src={models[3]} alt={`${alt}-right`} />
      </div>

    </div>
  );
}
export default Brands