import React from 'react'

export default function About(props) {


    // const [MyStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let MyStyle = {
        color: props.Mode === 'dark' ? 'white' : 'rgb(5, 40, 70)',
        backgroundColor: props.Mode === 'dark' ? 'rgb(5, 40, 70)' : 'white',
    }


    // const [myBtn, setMyBtn] = useState('Enable dark mode')



    return (

        <div className='container' style={MyStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={MyStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
                            <strong>Icode 1</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            Icode is very good website
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Icode 2</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Icode 3</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={MyStyle}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores deleniti minima autem laboriosam ipsum, molestias officia laudantium quisquam! Dolore, ab.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
