import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useStore} from "../../stores/createStore";
import {generatePath, NavLink} from "react-router-dom";
import {routes} from "../routes";


const NotFound =  () => {
  return <div>404 Not Found</div>

}

export  default  NotFound;
