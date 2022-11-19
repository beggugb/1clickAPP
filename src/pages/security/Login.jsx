import React from "react";
import {Button,FormGroup,ButtonGroup,Form,Input,Row,Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLock } from "@fortawesome/free-solid-svg-icons";    
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from '../../auth/auth-context'

const Login = () => {  
    const dispatch = useDispatch()    
    const {onLogin} = React.useContext(AuthContext); 
    const { item } = useSelector(state => state.usuario) 
    
    const changeHandler = event => {          
        const { name, value } = event.target              
        dispatch({ type: 'changeUsuario', props: name, value: value});     
  
    }
    return(
       <div className="unit">
        <div className="contenedor">
            <div className="contenidoCentral">
                <div className="contenidoLeft">
                    <div className="imas">
                    <img src={require("../../assets/img/logo.png")}/>
                    </div>                
                </div>
                <div className="contenidoRight">
                    <Row>
                        <Col>
                            <div className="login">
                                <Form className="form-login" onSubmit={onLogin}>
                                    <h6>Inicion de Sessiòn</h6>
                                    <FormGroup row>
                                        <Col md={2} className="io-blue">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </Col>
                                        <Col md={10}>
                                            <Input
                                                id="username"
                                                type="text"
                                                name="username"
                                                value={item.username}
                                                placeholder="..username"
                                                onChange={(e)=>{changeHandler(e)}}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={2} className="io-blue">
                                            <FontAwesomeIcon icon={faKey} />
                                        </Col>
                                        <Col md={10}>
                                            <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={item.password}
                                            placeholder="******"
                                            onChange={(e)=>{changeHandler(e)}}
                                            required
                                            />
                                        </Col>
                                    </FormGroup>   
                                    <ButtonGroup>
                                        <Button type="submit" className="btn-form btn-md">
                                            <FontAwesomeIcon icon={faLock} />
                                        </Button>
                                    </ButtonGroup>
                                </Form>    
                            </div>
                        </Col>
                    </Row>                    
                </div>
            </div>
        </div>
       </div>
    )
}
export default Login;