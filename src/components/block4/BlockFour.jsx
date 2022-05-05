import './BlockFour.css'
import line from '../../images/block2/line.png'
export default function BlockFour({ 
  title,
  coloredTitle,
  collection,
  subTitle,
  products,
}) {

  return (
    <section className="black_container">
      <div className="black">
        <div className="black_title">
          <h1 className='title'>Jersey {title}</h1>
          <hr/>
          <h2 className='color_title'>{coloredTitle}</h2>
          <hr/>
          <h2 className='collection'>{collection}</h2>
          <hr/>
          <h2 className='subtitle-four'>{subTitle}</h2>
        </div>
        <div className="products">
          {products.map((item, i) => {
            return (
              <div key={i} className="products-card">
                <img width={307} height={373} src={item.image} alt="" />
                <div className="products-card__name">{item.name}</div>
                <div className="products-card__description">{item.description}</div>
                <div className="products-card__price">{item.price}</div>
              </div>
            )
          })}
        </div>

        <div className='viewall'>
          <input type="button" value="View all" /><img src={line}/>
        </div>
      </div>
    </section>
  )
}