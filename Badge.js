import React from 'react'
import {connect} from 'react-redux';

const Badge = ({products}) => {
    return (
        <div>
            <center>
                <h1 style={{"color":"white"}}>DreamVista.com</h1>
                <h2 style={{"color":"white"}}>All your dreams can come true if you entered your dreams here</h2>
            <button type="button" class="btn btn-primary position-relative" style={{"fontSize":"15px"}}>
            Total Dreams : 
            &nbsp;<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {products.length}
            </span>
            </button>
            </center>
        </div>
    )
}
const mapStateToProps = state => ({
    products : state
})
export default connect(mapStateToProps)(Badge);