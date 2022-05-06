import line from '../../../images/block2/line.png'
import './BlockOneHalf.css'

export default function BlockOneHalf({ 
  title,
  coloredTitle,
  collection,
  subTitle,
  players,
}) {

  return (
    <section className="container_onehalf" id='teams'>
      <div className="onehalf">
        <div className="onehalf_title">
          <h1 className='url_title'>{title}</h1>
          <hr/>
          <h2 className='name_title'>{coloredTitle}</h2>
          <hr/>
          <h2 className='collection_title'>{collection}</h2>
          <hr/>
          <h2 className='subtitle_title'>{subTitle}</h2>
        </div>

        <div className="onehalf_team">
            <div className="team_east">
                <p>East</p>
            </div>
            <div className="team_west">
                <p>West</p>
            </div>
        </div>
        <div className="teams">
                {players.map((item) => {
                    return (
                        <div className="players">
                            <img src={item.img}/>
                        </div>
                    )
                })
                }
        </div>
        <div className='viewall_team'>
          <input type="button" value="About Team" /><img src={line}/>
        </div>
      </div>
    </section>
  )
}