import React from 'react'

function Button () {
    return (
        <div style={{ backgroundColor: "#e6e6e6", height: '250px', width: '600px', }}>
            <div style={{width: '100%', height: '35%',  display:'flex', justifyContent: 'center', alignItems:'center', justifyContent:'space-evenly'}}>
                <div style={{backgroundColor:'#126E82',color:'white', height:'50px', width:'50px', borderRadius:'50%',textAlign:'center',alignContent:'center',fontSize:'20px'}}>1</div>
                <div style={{backgroundColor:'white', height:'50px', width:'50px', borderRadius:'50%',textAlign:'center',alignContent:'center',fontSize:'20px'}}>2</div>
                <div style={{backgroundColor:'white', height:'50px', width:'50px', borderRadius:'50%',textAlign:'center',alignContent:'center',fontSize:'20px'}}>3</div>
            </div>
            <h3>Step 1: Learn React </h3>
            <div style={{display: 'flex', width:'100%',height: '35%', justifyContent:'space-around', alignItems:'center'}}>
                <div><button style={{backgroundColor:'#126E82', color:'white'}}>Previous</button></div>
                <div><button style={{backgroundColor:'#126E82', color:'white'}}>Next</button></div>
            </div>

        </div>
    )
}
export default Button