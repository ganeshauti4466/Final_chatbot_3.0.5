//This is the Stellantis Mission Card Component 
//All the Information here are static and are only displayed for generalize information


import React from 'react'
import value1 from'../images/1.png'
import value2 from '../images/2.png'
import value3 from '../images/3.png'
import value4 from '../images/4.png'
const Stellantismiss = () => {
    const mojo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAeCAYAAAASN1ElAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB7ZtBTxNBFMffm62JnAS9KcQSyllIFCoXtjdvcPUE3Ly1Hr3AAl48AZ+A9huUm55aDkbAg3uXmpoIRyiJEbTbfb6ZAgY625a2uyRmfkm7bWd2mvTfN/vef2YR2iBuO/2xnzAGlpgBQBuI4oDQrxoJKoDo8guXyN8u7Tl5MNwq2KxRifnLSrNgmUsRW0AAZSTMeqKWK+84ZTBEjhXUMDq5mhZVzLOYL/hxF9qE/yX9/GQj4Oz9h6mT48OCC4ZI0YqamFxZ44NzEzGvI8VFBCls/9Fh4QMYIqNB1JHJlU0W5BX0CoTkwGAqfnxQ2AJDJFwRVUZoTwU9h8ccMxEbHeLixegzZ54PmebdsYi+v+ChP7y/u4jywe/H+WkBCPMtvinDf5oW4xt6gcp+40knbpEo8Ju4rpPKaFm4/R2n2GywVuMwFa/PHy4XnQoYQkNFagysuWAhyK31+eOtBJXIEqb22x/nOjYo4+USCU20howSlYjmdY0yQr0+St0kssquU/H+UEqeq+2AmJb1LxhCQ4xMrM4GRWkN/VQnU6UUVl1n9dTdKUNoCEDf1jfRVjeOUH26pqJ2ZAtnwRAaMQTxRE201yDErj1c9ClHgr3i658DphPJlTQYeof04AGyXJG8jvEFdUznAIua37W9V7WgGCMwREHdm88kkssnIsio//rZ6VpUY+jfApyICjD8d4jzubiB4am3j6FLRqcck+VGDAHlOFKxrGsUVT8F3VI1pUtkqOCk5dKnpUyM0N/mbLThx0dBc3zIQheQsGa0mTXQRmlnyThLISEQKaB0QTvx1LGhQ6QPzPLp61HS16+G3iC8M3CDrqtkic1OLD15jjT2tWNyUmz2MYWLkJYeCNrQNUr7MHaKhZsIq/Y18TlB1iMS5cAQKqqk8c5oPShaWYYx61R8qU+nzZHTtewLmmu0RC0QCMqCIVQuvaTEc17A9mGtRfc8+bQlwHcvzAkp9p0a2JwUcWJFdrOzCWGhtLOYBUOoXDEIRyaX16UvCyGgMt5dk/FGwZU9SscHxfcDj+xhROxpfcnrtbnS3lLP9z4Z9DTsJmRh8wOD9gBHbBJ6gIpQI2ikaPf9yoh9MDT9nTjhUZuzO0HdjgFveMp1wBApgTv0j34U3XtD01sC4YTFjbctrhRT0Duvj15++7hUBEPkYLsdRyacWV7WsdWien0N9t8NUuwfK7uR3SnvLrhmt+Dt8heMEGMPiPmetQAAAABJRU5ErkJggg=="
    return (
        <>
            <div style={{ color: 'black', padding: '7px', borderRadius: '12px', backgroundColor: 'rgb(241, 241, 241)', boxShadow: 'rgba(150, 149, 149, 0.4) 2px 2px 4px' }}>
                <div>
                    <div style={{textAlign:'left' , marginLeft:'10px'}}>
                        <img src= {mojo} style={{ height: '11px', width: '29px' }} alt="head_icon" class="icon-image" />
                        <span style={{ fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '30px', color: '#243782', marginLeft: '10px' }}>Our Purpose</span>
                    </div>
                    <div>
                        <div style={{
                            color: '#243782',
                            fontFamily: 'Encode Sans Condensed',
                            fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '28px', marginLeft: '5px', marginTop: '15px'
                        }}>
                            Powered By Our Diversity, We Lead The Way The World Moves!
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#243782', display: 'flex', fontFamily: 'Encode Sans Condensed', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', marginTop: '10px' }}>"As stated in our purpose, it is the energy, passion and diversity of our people and brands that power us to do great things, exceeding expectations and setting the highest standards for our future."</div>
                    </div>
                    <div style={{ color: '#243782', display: 'flex', fontFamily: 'Encode Sans Condensed', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', marginTop: '10px' }}>
                        <div>Our purpose and our values go beyond the words themselves. Each of our four values carries equal importance, complementing and drawing strength from the others to take us forward towards our purpose.</div>
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', padding: '7px', marginTop: '15px', borderRadius: '12px' , textAlign:'left' , marginLeft:'10px'}}>
                <div>
                    <img src={mojo} style={{ height: '11px', width: '29px' }} alt='head_icon'></img>
                    <span style={{
                        color: '#243782',
                        fontFamily: 'Encode Sans Condensed',
                        fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '28px', marginLeft: '5px', textAlign:'left',marginTop: '15px'
                    }}>Our Values</span>
                </div>
                <div   >
                    <div>
                        <img src={value1} alt='satellantis_values1' style={{height:'100%' ,width:'100%' , marginTop:'12px'}}></img>
                    </div>
                    <div>
                        <img src={value2} alt='satellantis_values1' style={{height:'100%' ,width:'100%'}}></img>
                    </div>
                    <div>
                        <img src={value3} alt='satellantis_values1' style={{height:'100%' ,width:'100%'}}></img>
                    </div>
                    <div>
                        <img src={value4} alt='satellantis_values1'style={{height:'100%' ,width:'100%'}}></img>
                    </div>
                </div>
            </div>
            <div style={{ color: 'black', padding: '7px', marginTop: '15px', borderRadius: '12px', backgroundColor: 'rgb(241, 241, 241)', boxShadow: 'rgba(150, 149, 149, 0.4) 2px 2px 4px' }}>
                <div style={{textAlign:'left' , marginLeft:'10px'}}>
                    <img src={mojo} style={{ height: '11px', width: '29px' }} alt='head_icon'></img>
                    <span style={{ fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '30px', color: '#243782', marginLeft: '10px'  }}>Our Vision</span>
                </div>
                <div style={{
                    color: '#243782',
                    fontFamily: 'Encode Sans Condensed',
                    fontSize: '20px', fontStyle: 'normal', fontWeight: '700', lineHeight: '28px', marginLeft: '5px', marginTop: '15px'
                }}>
                    <div>Becoming the most customer-centric and sustainable mobility company</div>
                </div>
                <div style={{ color: '#243782', display: 'flex', fontFamily: 'Encode Sans Condensed', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '26px', marginTop: '10px' }}>
                    <div>“ Building Stellantis while making a positive contribution to our society is a truly shared endeavour. And this togetherness is one of the great competitive strengths inherited from our founding companies.”</div>
                </div>
            </div>
        </>

    )
}

export default Stellantismiss