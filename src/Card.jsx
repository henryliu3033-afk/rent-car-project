import ImageToyota from './assets/toyota.jpg'

function Card (props) {
    return(<>
    <div className="card">
        <img src={props.img} alt="toyota" />
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.name}<span>{props.highLight}</span></p>
        </div>
        
    </div>



    </>)
}

export default Card



/*网页 浏览器插件
 性质 下游做集运的商家 
 怎么赚钱 给下游甩单 要集运的客户丢给国外想在淘宝买东西的人 过关清关太麻烦

 商品聚合平台 要有比价

 商务逻辑， 1. 用户下单 2. 商家接单 3. 物流运输 4. 清关 5. 最终送达用户手中*/