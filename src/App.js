import Header from './components/header/Header';
import BlockOne from './components/block1/BlockOne';
import BlockTwo from './components/block2/BlockTwo.jsx';
import BlockOneHalfTitle from './components/block1.5/BlockOneHalfTitle.jsx'
import BlockOneHalfProducts from './objects/BlockOneHalfProducts.json'
import BlockTwoTitle from './components/block2/BlockTwoTitle';
import BlockTwoProducts from './objects/BlockTwoProducts.json'
import BlockTree from './components/block3/BlockTree.jsx';
import BlockTreeProducts from './objects/BlockTreeProducts.json'
import BlockFour from './components/block4/BlockFour.jsx';
import BlockFourProducts from './objects/BlockFourProducts.json'
import BlockOneHalf from './components/block1.5/BlockOneHalf';

import './App.css'

function App() {


  return (
    <div className="App">
      <Header/>
      <BlockOne/>


      <BlockTwo 
        title="bestsellers" 
        coloredTitle={
          <BlockTwoTitle
          firstText="BESTSELLER" 
          firstColor="#FB0223"
          />
        }
      collection= "collection "
      subTitle="The jerseys of the best nba players of the regular seasons."
      products={BlockTwoProducts}
      />

        <BlockOneHalf
          title="EVERY TEAM" 
          coloredTitle={
            <BlockOneHalfTitle
              firstText="ONE" 
              firstColor="#0949ef"
              secondText="STORE"
          />
        }
        collection={
          <BlockOneHalfTitle
          firstText="EVERY" 
          firstColor="#fb0223"
          secondText="TEAM"
          secondColor="#000000"
          />
        }
        subTitle="SElect your favorite team to view it’s jersys."
        players={BlockOneHalfProducts}
        />

      <BlockTree 
        title="kobe bryant" 
        coloredTitle={
          <BlockTwoTitle
            firstText="KOBE" 
            firstColor="#fcbf05"
            secondText="BRYANT"
            secondColor="#6021db"
        />
      }
      collection= "Authentic edition"
      subTitle="In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one. "
      products={BlockTreeProducts}
      />

      <BlockFour 
        title="1992 team usa" 
        coloredTitle={
          <BlockTwoTitle
            firstText="1992" 
            firstColor="#0949ef"
            secondText="team usa"
            secondColor="#fb0223"
        />
      }
      collection= "Authentic edition"
      subTitle="Jerseys of the united sates man’s olympics basketball team,which represented the us of a in the 1992 summer olympics in barcelona."
      products={BlockFourProducts}
      />
    </div>
  );
}

export default App;
