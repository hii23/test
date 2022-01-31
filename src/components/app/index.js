import React from "react";
import {ImagesEnum} from "../../helpers/themes/images.themes"
import { Card } from "../card";

import './style.css'

export const App = () =>{


    return (
        <div className="app">
            <Card firstImage={ImagesEnum.HEADE_FIRST} secondImage={ImagesEnum.HEADE_SECOND}/>
            <Card firstImage={ImagesEnum.JUMASENBAGA_FIRST} secondImage={ImagesEnum.JUMASENBAGA_SECOND}/>
            <Card firstImage={ImagesEnum.SCHAUMA_FIRST} secondImage={ImagesEnum.SCHAUMA_SECOND}/>
            
        </div>
    )
}
