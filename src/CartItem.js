import React from "react";


class CartItem extends React.Component{
   
    // class component to be a react component we use a method render
   
    render(){


        return(
<div className="cart-item">

    <div className="left-block">
        <img style={styles.image}></img>
    </div>
    <div className="right-block">

        <div style={{fontSize:25,color:'#777'}}>Phone</div>
        <div style={{color:'red'}}>Price</div>
        <div style={{color:'#777'}}>Qty:1</div>
<div className="cart-item-actions">

    {/*Buttons*/}
</div>
    </div>
    
</div>
        )

        
    }
}

const styles={
    image:{

        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem