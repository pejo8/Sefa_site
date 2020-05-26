import React from 'react';
import './../css/PravaStvar_middle.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'
// import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import ReactPlayer from "react-player";

var image = ["februar 2016/1.jpg","februar 2016/2.jpg","februar 2016/3.jpg"
            ,"februar 2016/4.jpg","februar 2016/5.jpg","februar 2016/6.jpg"];
var i = image.length;
var slider_content = [<a key={i} href="/"> <img src= {image[i-1]} alt='project' /> </a>];

var image1 = ["novembar 2017/1.jpg","novembar 2017/2.jpg","novembar 2017/3.jpg",
              "novembar 2017/4.jpg","novembar 2017/5.jpg","novembar 2017/6.jpg","novembar 2017/7.jpg"];
var i1 = image1.length;
var slider_content1 = [<a key={i} href="/"> <img src= {image1[i1-1]} alt='project' /> </a>];

var image2 = ["april 2019/1.JPG","april 2019/2.JPG","april 2019/3.JPG"];
var i2 = image2.length;
var slider_content2 = [<a key={i} href="/"> <img src= {image2[i2-1]} alt='project' /> </a>];

class PravaStvar_middle extends React.Component {

    componentWillMount(){
        this.setState({brojac:i});
        this.setState({brojac1:i1});
        this.setState({brojac2:i2});
        console.log(this.state);
    }

    nextImage(){
        if(i < image.length){
            i = i+1;
        } else{
            i = 1;
        }
        slider_content = [<a href="/"> <img src= {image[i-1]} alt='project' /> </a>]
        this.setState({brojac:i});
    }

    nextImage1(){
        if(i1 < image1.length){
            i1 = i1+1;
        } else{
            i1 = 1;
        }
        slider_content1 = [<a href="/"> <img src= {image1[i1-1]} alt='project' /> </a>]
        this.setState({brojac1:i1});
    }

    nextImage2(){
        if(i2 < image2.length){
            i2 = i2+1;
        } else{
            i2 = 1;
        }
        slider_content2 = [<a href="/"> <img src= {image2[i2-1]} alt='project' /> </a>]
        this.setState({brojac2:i2});
    }

    prewImage(){
        if(i > 1){
            i = i-1;
        } else{
            i = image.length;
        }
        slider_content = [<a href="/"> <img src= {image[i-1]} alt='project' /> </a>]
        this.setState({brojac:i});
    }

    prewImage1(){
        if(i1 > 1){
            i1 = i1-1;
        } else{
            i1 = image1.length;
        }
        slider_content1 = [<a href="/"> <img src= {image1[i1-1]} alt='project' /> </a>]
        this.setState({brojac1:i1});
    }

    prewImage2(){
        if(i2 > 1){
            i2 = i2-1;
        } else{
            i2 = image2.length;
        }
        slider_content2 = [<a href="/"> <img src= {image2[i2-1]} alt='project' /> </a>]
        this.setState({brojac2:i2});
    }

  render() {
    return (
      <div className="middle_pravaStvar">
          
        <p> PRAVA STVAR </p>

        <div className="pasus">
            <b>Prava Stvar</b> je humanitarni projekat zabavno-edukativnog karaktera koji se 
            realizuje sa ciljem podizanja svesti mladih o humanosti i prikupljanju 
            sredstava za one kojima je to najpotrebnije.
        </div>

        {/* MESTO ZA VIDEO!!!!! */}
        <div className="pravaStvar_video">
            <div style={{marginLeft: "5%", width:"45%"}}>
                    <ReactPlayer 
                        url={"/klip1"}
                        playing={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="auto"
                        controls={true} />
            </div>
            <div style={{marginLeft: "5%", width:"45%"}}>
                    <ReactPlayer 
                        url={"/klip2"}
                        playing={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="auto"
                        controls={true} />
            </div>
        </div>

        <div className="pasus">
            SEFA se posebno zahvaljuje Sergeju Trifunoviću koji je govorio na 
            temu “Zašto je teško biti human”,  Nenadu Daniloviću poznatijem 
            kao Neša Bridžis koji je održao stand up veče, Vladi Georgievu 
            koji je održao nastup u Amfiteatru 1 Ekonomskog fakulteta, 
            Dejanu Saviću koji je govorio na temu „Psihologija pobednika“, 
            kao  partnerima koji su na razne načine podržali ovaj projekat.
        </div>

        <div className="pravaStvar_baner">
            <img src="pravaStvar_baner.png" alt="baner" />
        </div>

        <div className="pravaStvar_gosti">
            <div className="pravaStvar_gost">
                <p> FEBRUAR 2016 </p>
                <div className="pravaStvar_slider">
                    <div id="box">
                        {slider_content}
                    </div>
                    <button className="prew" onClick={this.prewImage.bind(this)}> {"<"} </button>
                    <button className="next" onClick={this.nextImage.bind(this)}> > </button>
                </div>
                <p className="gost"> GOST </p>
                <p> Sergej Trifunović </p>
            </div>
                <div className="pravaStvar_gost">
                    <p> NOVEMBAR 2017 </p>
                    <div className="pravaStvar_slider">
                        <div id="box">
                            {slider_content1}
                        </div>
                        <button className="prew" onClick={this.prewImage1.bind(this)}> {"<"} </button>
                        <button className="next" onClick={this.nextImage1.bind(this)}> > </button>
                    </div>
                    <p className="gost"> GOST </p>
                    <p> Neša Bridžis </p>
            </div>
            <div className="pravaStvar_gost">
                    <p> APRIL 2019 </p>
                    <div className="pravaStvar_slider">
                        <div id="box">
                            {slider_content2}
                        </div>
                        <button className="prew" onClick={this.prewImage2.bind(this)}> {"<"} </button>
                        <button className="next" onClick={this.nextImage2.bind(this)}> > </button>
                    </div>
                    <p className="gost"> GOST </p>
                    <p> Vlado Georgijev </p>
                    <p> Dejan Savić </p>
            </div>
        </div>

      </div>
      );
  }

}

export default PravaStvar_middle;