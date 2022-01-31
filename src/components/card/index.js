import React, {useState} from "react";

import {IconsEnum} from "../../helpers/themes/icons.themes"
import {ImagesEnum} from "../../helpers/themes/images.themes"
import { CardInterface } from "./card-interface";

import './style.css'

export const Card = ({firstImage,secondImage}) =>{
    const [mainImage, setMainImage] = useState('');
    const [buy, setBuy] = useState(false);

  

    const setImages = (image) =>{
        setMainImage(image)
    }

    return (
            <div className="card">
                <div className="card__main">

                    <div className="card__btn-new">
                        <p>new</p>
                    </div>

                    <div  
                        className="card__img"
                        onMouseEnter={() => setImages(secondImage)}
                        onMouseLeave={() => setImages(firstImage)}
                        >
                        <img src={mainImage} />
                    </div>

                    <div onClick={()=>setBuy(!buy)} className="card__scales">
                        <img src={buy ? IconsEnum.CARD_TICK : IconsEnum.CARD_SCALES} />
                    </div>

                </div>

                <div className="card__info">
                    <h2>Шампунь</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <CardInterface/>

            </div>
    )
}
