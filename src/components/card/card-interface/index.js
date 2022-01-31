import React, { useState }  from "react";

import {IconsEnum} from "../../../helpers/themes/icons.themes"
import {ImagesEnum} from "../../../helpers/themes/images.themes"

import './style.css'

export const CardInterface = () =>{
    const [colorChange, setColorChange] = useState('цвет');
    const [showList, setShowList] = useState(false);
    const [count, setCount] = useState(1);
    const [choiseBtn, setChoiseBtn] = useState(null);


    const toggleShowList = ()=> setShowList(!showList)
    const colors = ['red','green','blue','yellow','white','black']
    const btnList = ['100 мл','200 мл','300 мл']

    const setColorsParameters = (array) =>array.map(item=>(<p onClick={()=>{setColorChange(item);toggleShowList()}}>{item}</p>))
    const setBtnList = (array) =>array.map((item,index)=>(
        <div className="card__interface-radio">
            <div onClick={()=>setChoiseBtn(index)} className={index===choiseBtn ? "card__interface-radio__item active" : "card__interface-radio__item"}><span></span></div>
            <p>{item}</p>
        </div>
    ))
    
    let price = 200;
    return (
            <div className="card__interface">
                <div className="card__interface-item">
                    <div onMouseLeave={()=>setShowList(false)} className={showList ? "card__color active" : "card__color "}>
                        <div onClick={toggleShowList} className="card__color-main">
                            <p>{colorChange}</p>
                            <img src={IconsEnum.CARD_ARROW} />
                        </div>
                        <div className="card__color-parameters">
                            {setColorsParameters(colors)}
                        </div>

                    </div>
                    <div className="card__price">
                        <p>{price*count} грн</p>
                    </div>
                </div>
                <div className="card__interface-column">
                    {setBtnList(btnList)}
                </div>
                <div className="card__interface-bottom">
                    <div className="card__interface-count">
                        <p onClick={()=>setCount(count>1 ? count-1 : count)}>-</p>
                        <p>{count}</p>
                        <p onClick={()=>setCount(count+1)}>+</p>
                    </div>
                    <button >купить</button>
                </div>
            </div>
    )
}
