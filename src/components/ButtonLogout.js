import React from 'react';
import {Button} from 'react-bootstrap';  
import {useHistory} from 'react-router-dom';

function ButtonLogout() {

    const history = useHistory();

    function hit(){
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        window.location.reload()
    }

    return (
        <div>
            <Button variant="danger" onClick={hit} >Log Out</Button>
        </div>
    )
}

export default ButtonLogout
