import React from 'react';
import './Card.css';
import 'font-awesome/css/font-awesome.min.css';
import { Star } from '../star/star'



export const ProductCard = (props) => {

    const hz=()=>{

       console.log(props.arrCard);
    }

    return (
        <div className="productCardWrap">
            <div className="topProdCartWrap">
                <div className="leftProdCart">
                    <img src={props.fotoBest} className='icon' alt="" />
                </div>

                <div className="centerProdCart">
                    <img src={props.fotoMain} alt="" />


                </div>
                <div className="rigthProdCart">
                    <img src={props.fotoMainR} className='icon' alt="" />
                </div>
            </div>


            <div className="centerProdCartWrap">

                <Star />
                <div className="centerProdCartName">
                    {props.nameTitle}
                </div>
            </div>


            <div className="bottomProdCartWrap">
                <div className="bottomProdCartWrapPrice"  onClick={hz}>
                    {props.price}
                </div>
                <div className="bottomProdCartWrapIcon"><i className="fa fa-shopping-basket" aria-hidden="true"></i></div>
            </div>

         
           
        </div>
    )
}