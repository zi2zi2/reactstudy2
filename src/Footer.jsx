
import React from 'react'


function Footer(props){

    const footerStyle = { position:'fixed', bottom: '0', width: '100%', height: '40px', backgroundColor:'#DDD'};

    return (
        <div id='footer' style={footerStyle}>
            <div style={{display:'flex', width:'100%', height:'100%',position:'absolute', alignItems:'center', justifyContent:'center'}}>
                <span>Copyright 2022 LGCNS</span>
            </div>
            
        </div>
    );

}

export default  Footer;



