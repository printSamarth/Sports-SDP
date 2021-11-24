import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        const st= {
            backgroundcolor:"black",
            color: "black",
            left: 0,
            bottom: 0,
            right: 0,
            paddingBottom:"60px",
        };
        return (
            <div style={st} class="jumbotron text-center">
                <p>Developed @ IIITB(2021)</p>
            </div>
        )
    }
}

export default FooterComponent
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class FooterComponent extends React.Component
// {
//   render()
//   {
//     return (
//         <div class="jumbotron text-center">
//         <p>Footer</p>
//       </div>
//     )
//   }
// }
// export default FooterComponent;