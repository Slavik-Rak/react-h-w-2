import React, { useState, Component } from 'react'
import './App.css';

import 'font-awesome/css/font-awesome.min.css';

import fotoMain0 from '../src/components/imgCard/samsunggalaxynote10.jpg';
import fotoMain1 from '../src/components/imgCard/lenovo-tab-m10.jpg';
import fotoMain2 from '../src/components/imgCard/samsung-g970f.jpg';
import fotoMain3 from '../src/components/imgCard/samsung-galaxy-a71.jpg';
import fotoMain4 from '../src/components/imgCard/samsung-galaxy-s20.jpg';
import fotoMain5 from '../src/components/imgCard/samsung-galaxy.jpg';

import fotoPromo1 from '../src/components/imgCard/best.png';
import fotoPromo2 from '../src/components/imgCard/sale.png';
import fotoPromo3 from '../src/components/imgCard/delivery.png';
import fotoPromo4 from '../src/components/imgCard/premier.png';
import fotoPromo5 from '../src/components/imgCard/new.png';
import fotoPromo6 from '../src/components/imgCard/offer.png';


import { ProductCard } from './components/card/Card';






function App() {

  let fotoMainArr = [fotoMain0, fotoMain1, fotoMain2, fotoMain3, fotoMain4, fotoMain5];
  let fotoPromoArr = [fotoPromo1, fotoPromo2, fotoPromo3, fotoPromo4, fotoPromo5, fotoPromo6];
  let titleCartArr = ['Name Product 1', 'Name Product 2', 'Name Product 3', 'Name Product 4', 'Name Product 5', 'Name Product 6'
  ]
  let priceCartArr = [
    '$ 1232', '$ 323468', '$ 23457', '$ 9890', '$ 5483', '$ 1230', '$ 8765', '$ 878'
  ]
  //---заповнення масиву обєктів------------
  let arrCard = [];

  for (let i = 0; i < titleCartArr.length; i++) {
    let obj = {};
    obj.id = i;
    obj.title = titleCartArr[i];
    obj.price = priceCartArr[i];
    obj.fotoMain = fotoMainArr[i];
    // 
    let val = true;
    let l, r;

    l = parseInt(Math.random() * 5);

    while (val) {
      r = parseInt(Math.random() * 5);
      if (l !== r) {
        val = false;
        break;
      }
    }
    obj.fotoBest = fotoPromoArr[l];
    obj.fotoMainR = fotoPromoArr[r];

    arrCard.push(obj);
  }
  //---кінець заповнення масиву обєктів------------
  const [cardDelOn, delOne] = useState(arrCard);

  console.log(cardDelOn);

  //====funDel===
  const delOneCart = index => {
    console.log(cardDelOn);
    let newArr = [...cardDelOn].filter((elem, indexF) => indexF !== index);
    console.log(cardDelOn[index].title)
    //newArr[index].title = '!!!!!!!!!!';
    //let a = cardDelOn.filter((elem, indexF) => indexF !== index);
    // console.log(index);
    //console.log(a);

    delOne(newArr);
  }
  //============
  return (


    <div className="App">

      {
        arrCard.map((elem, index, arrCard) => (

          <span className="wrapCardForDel" key={elem.id}>

            <ProductCard
              nameTitle={elem.title} price={elem.price} fotoMain={elem.fotoMain}
              fotoBest={elem.fotoBest} fotoMainR={elem.fotoMainR} />

            <button className="buttoDelOne" onClick={() => delOneCart(index)}>
              <i
                className="fa fa-times delIcon" aria-hidden="true"

              />
            </button>
          </span>

        ))
      }


    </div>
  );
}

export default App;
