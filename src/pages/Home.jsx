import React from 'react';

import { Form, Button, Card, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import tool from "../assest/tool.png";
function Homepg()
{


    return(
        <div>
             <div className="col-sm-7 d-flex justify-content-center align-items-center" >
                <img  className="img-fluid  w-50  "  src={tool} alt="not found" />
            </div>
        </div>
        )

}
export default Homepg;