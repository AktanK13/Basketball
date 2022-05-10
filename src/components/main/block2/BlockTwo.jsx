import './BlockTwo.css'
import { useState } from 'react';
import line from '../../../images/block2/line.png'
import BlockTwoProducts from '../../../objects/BlockTwoProducts.json'
import Modal from '../Modal/Modal.jsx'


export default function BlockTwo({ 
  title,
  coloredTitle,
  collection,
  subTitle,
  divak
}) {

  const [searchTerm, setSearchTerm] = useState("");
  const [modalActive, setModalActive] = useState(false)
  return (
    <section className="black_container" id='jersey'>
      <div className="black">
        <div className="black_title">
          <h1 className='title'>Jersey {title}</h1>
          <hr/>
          <h2 className='color_title'>{coloredTitle}</h2>
          <hr/>
          <h2 className='collection'>{collection}</h2>
          <hr/>
          <h2 className='subtitle'>{subTitle}</h2>
        </div>
          
        <>

        <div>
          <input className="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>

      <div className="products">
          {
            BlockTwoProducts 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="products-card">
                      <img width={307} height={373} src={val.image} onClick={() => setModalActive(true)}/>
                      <div className="products-card__name">{val.name}</div>
                      <h3 className="products-card__description">{val.description}</h3>
                      <p className="products-card__price">${val.price}</p>
                  </div> 
                )
              })
          }
      </div>
    </>
    <Modal active={modalActive} setActive={setModalActive} />
        <div className='viewall'>
          <input type="button" value="View all" /><img src={line}/>
        </div>
      </div>
    </section>
  )
}