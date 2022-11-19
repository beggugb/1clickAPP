import React from 'react'
import { Button, Nav, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
const Pagination = ({chargeData,total,paginas,current}) =>{
    let renderPageNumbers;
    const pageNumber = []
    if(total !== null){
        for(let i=1;i<=paginas;i++){
            pageNumber.push(i)
        }
    }
    renderPageNumbers = pageNumber.map((number,index)=>{
 
        let classes = current === number ? "btn-linkis":"btn-linkisd"; 
        if(
            number === 1 || number === total || 
            (number >= current - 2 && number <= current +2)
        ){
            return(
                <li className='nav-link' key={index}>
                    <Button
                        className={classes}
                        onClick={() => chargeData(number,12)}
                    >
                        {number}
                    </Button>
                </li>
            );            
        }else{
            return null;
        }        
    });


return(
 
        <Nav className="navbari navbar-expand">
        <li className="nav-link">
        <Button
            className="btn-linki"
            onClick={() => chargeData(1, 12)}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </Button>
        </li>
        <li className="nav-link">
        <Button
          className="btn-linki"
          onClick={() =>
            chargeData(current === 1 ? 1 : current - 1, 12)
          }>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        </li>
        {renderPageNumbers}
        <li className="nav-link">
            <Button
            className="btn-linki"
            onClick={() =>
                chargeData(current === paginas ? current : current + 1,
                12
                )
            }>
            <FontAwesomeIcon icon={faAngleRight} />
            </Button>
        </li>
        <li className="nav-link">
            <Button
            className="btn-linki"
            onClick={() => chargeData(paginas, 12)}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
        </li>
        <li className="nav-link pull-right lRight">
            página {current} de {paginas}
        </li>
        </Nav>  

            
 )
}
export default Pagination