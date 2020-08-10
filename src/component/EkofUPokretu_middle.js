import React from 'react';
import './../css/EkofUPokretu_middle.css';

const image = ["oktobar 2016/2.jpg", "oktobar 2016/3.jpg", "oktobar 2016/4.jpg", 
             "oktobar 2016/5.jpg", "oktobar 2016/6.jpg", "oktobar 2016/7.jpg", 
             "oktobar 2016/8.jpg", "oktobar 2016/9.jpg", "oktobar 2016/10.jpg", 
             "oktobar 2016/1.jpg"];
let i = image.length;
let slider_content = [<img key={i} src= {image[i-1]} alt='project' />];

const image1 = ["oktobar 2017/2.jpg", "oktobar 2017/3.jpg", "oktobar 2017/4.jpg",
                "oktobar 2017/5.jpg", "oktobar 2017/6.jpg", "oktobar 2017/1.jpg"];
let i1 = image1.length;
let slider_content1 = [<img key={i} src= {image1[i1-1]} alt='project' />];

const image2 = ["oktobar 2018/2.jpg", "oktobar 2018/3.jpg", "oktobar 2018/4.jpg",
                "oktobar 2018/5.jpg", "oktobar 2018/6.jpg", "oktobar 2018/7.jpg",
                "oktobar 2018/8.jpg", "oktobar 2018/9.jpg", "oktobar 2018/10.jpg", 
                "oktobar 2018/1.jpg"];
let i2 = image2.length;
let slider_content2 = [<img key={i} src= {image2[i2-1]} alt='project' />];

const image3 = ["oktobar 2019/2.jpg", "oktobar 2019/3.jpg", "oktobar 2019/4.jpg",
                "oktobar 2019/5.jpg", "oktobar 2019/6.jpg", "oktobar 2019/7.jpg", 
                "oktobar 2019/8.jpg", "oktobar 2019/9.jpg", "oktobar 2019/10.jpg", 
                "oktobar 2019/11.jpg", "oktobar 2019/12.jpg","oktobar 2019/1.jpg"];
let i3 = image3.length;
let slider_content3 = [<img key={i} src= {image3[i3-1]} alt='project' />];

class EkofUPokretu_middle extends React.Component {

    componentDidMount() {
        this.setState({brojac:i});
        this.setState({brojac1:i1});
        this.setState({brojac2:i2});
    }

    nextImage() {
        if (i < image.length) {
            i = i+1;
        } else {
            i = 1;
        }
        slider_content = [<img key={i} src= {image[i-1]} alt='project' />];
        this.setState({brojac:i});
    }

    nextImage1() {
        if (i1 < image1.length) {
            i1 = i1+1;
        } else {
            i1 = 1;
        }
        slider_content1 = [<img key={i} src= {image1[i1-1]} alt='project' />];
        this.setState({brojac1:i1});
    }

    nextImage2() {
        if(i2 < image2.length) {
            i2 = i2+1;
        } else {
            i2 = 1;
        }
        slider_content2 = [<img key={i} src= {image2[i2-1]} alt='project' />];
        this.setState({brojac2:i2});
    }

    nextImage3() {
        if (i3 < image3.length) {
            i3 = i3+1;
        } else {
            i3 = 1;
        }
        slider_content3 = [<img key={i} src= {image3[i3-1]} alt='project' />];
        this.setState({brojac3:i3});
    }

    prewImage() {
        if(i > 1) {
            i = i-1;
        } else {
            i = image.length;
        }
        slider_content = [<img key={i} src= {image[i-1]} alt='project' />];
        this.setState({brojac:i});
    }

    prewImage1() {
        if (i1 > 1) {
            i1 = i1-1;
        } else {
            i1 = image1.length;
        }
        slider_content1 = [<img key={i} src= {image1[i1-1]} alt='project' />];
        this.setState({brojac1:i1});
    }

    prewImage2() {
        if (i2 > 1) {
            i2 = i2-1;
        } else {
            i2 = image2.length;
        }
        slider_content2 = [<img key={i} src= {image2[i2-1]} alt='project' />];
        this.setState({brojac2:i2});
    }

    prewImage3() {
        if (i3 > 1) {
            i3 = i3-1;
        } else {
            i3 = image3.length;
        }
        slider_content3 = [<img key={i} src= {image3[i3-1]} alt='project' />];
        this.setState({brojac3:i3});
    }

  render() {
    return (
      <div className="middle_ekofUPokretu">
          
        <img src="/EKOF_u_pokretu_logo_bez_pozadine.png" className="naslov_eup" alt="ekofUPokretu"/>

        <div className="tekst"> 
            <b> <span id="repsusTekst">„Stručna ekskurzija”</span> </b>je projekat koji smo pokrenuli 
            2016. godine po prvi put na našem 
            fakultetu, poznat po imenu <b> <span id="repsusTekst">„Ekof u pokretu”</span> </b>. 
            Cilj ovog projekta je u upoznavanju sa 
            načinom studiranja u inostranstvu i master programima. Pored toga, upoznavanje sa 
            nekim novim kulturama, upoznavanje novih gradova i država, koje do sad nismo imali 
            priliku da upoznamo. Ili možda jesmo, ali uvek imamo želju da im se vratimo. 
            I poslednje, ali ne i manje vredno, druženje i upoznavanje sa kolegama. 
            Iza nas su 4 uspešne ekskurzije, preko 450 studenata, toliko novih prijateljstava, 
            novih ljubavi, prelepih uspomena za pamćenje... A gde idemo narednog oktobra? 
        </div>

        <div className="ikonice">
            <button> <a href="https://www.facebook.com/ekofupokretu.sefa/"><img src="/logo_facebook.png" alt="logo" /> </a></button>
            <button> <a href="https://www.instagram.com/ekof_u_pokretu/"><img src="/logo_instagram.png" alt="logo" /> </a></button>
        </div>

        <div className="destinacije">
            <div className="destinacija">
                <div> 
                    <p> MILANO VOL1 - OKTOBAR 2016. </p>
                    Naša prva destinacija, oktobra 2016. bio je 
                    <b> <span id="repsusTekst">Milano</span></b>, grad umetnosti i mode. 
                    Preko 100 studenata imalo je priliku da se upozna sa Univerzitetom 
                    Bocconi u Milanu i Univerzitetom u Trstu. Pored Milana, 
                    obišli smo i Veneciju, Moncu, Trst i jezero Komo. 
                </div>
                <div className="destinacija_slider">
                    <div id="box">
                        {slider_content}
                    </div>
                    <button className="prew" onClick={this.prewImage.bind(this)}> {"<"} </button>
                    <button className="next" onClick={this.nextImage.bind(this)}> > </button>
                </div>
            </div>
            <div className="aftermovie"> <button> <a href="https://www.youtube.com/watch?v=pAb2nLoswXU"><img src="/logo_youtube.png" alt="logo" /></a></button> 
                AFTERMOVIE 
            </div>

            <div className="destinacija">
                <div> 
                    <p> RIM VOL2 - OKTOBAR 2017. </p>
                    Nakon prve ekskurzije, studenti su prepoznali kvalitet i ukazali nam svoje 
                    poverenje i naredne godine, kada smo se ponovo vratili u Italiju. 
                    Ovog puta, svi putevi su vodili u večni grad,
                    <b> <span id="repsusTekst">Rim</span></b>. Bili smo gosti Univerziteta Sapienza 
                    u Rimu, a pored glavnog grada Italije, posetili smo i Bolonju, Napulj i Firencu. 
                </div>
                <div className="destinacija_slider">
                    <div id="box">
                        {slider_content1}
                    </div>
                    <button className="prew" onClick={this.prewImage1.bind(this)}> {"<"} </button>
                    <button className="next" onClick={this.nextImage1.bind(this)}> > </button>
                </div>
            </div>

            <div className="destinacija">
                <div> 
                    <p> ISTANBUL VOL3 - OKTOBAR 2018. </p>
                    Treća, i najveća ekskurzija do sada, sa preko 160 studenata Ekonomskog fakulteta, 
                    odvela nas je na istok, u posetu jedinom gradu na dva kontinenta, u 
                    <b> <span id="repsusTekst">Istanbul</span></b>. 
                    Jedan od najvećih i kroz istoriju najvažnijih svetskih gradova. Upoznali smo se 
                    sa neverovatnom kulturom i tradicijom grada od hiljadu i jedne noći.
                </div>
                <div className="destinacija_slider">
                    <div id="box">
                        {slider_content2}
                    </div>
                    <button className="prew" onClick={this.prewImage2.bind(this)}> {"<"} </button>
                    <button className="next" onClick={this.nextImage2.bind(this)}> > </button>
                </div>
            </div>

            <div className="destinacija">
                <div> 
                    <p> PRAG VOL4 - OKTOBAR 2019. </p>
                    Nakon grada mode, večnog grada i grada koji je nekad nosio imena Konstantinopolj 
                    i Carigrad, na red je došao i grad stotinu tornjeva. Grad u kome smo uživali i 
                    osetili njegov gotički duh, prošetali pored Vltave i ispijali piva uz kolenice - 
                    prelepi <b> <span id="repsusTekst">Prag</span></b>. 
                    Uz njega, posetili smo i Beč, grad valcera, umetnosti i kulture, 
                    gde smo bili gosti jednog od najvećih Ekonomskih fakulteta u Evropi, poznatijeg kao WU, 
                    kao i Drezden.
                </div>
                <div className="destinacija_slider">
                    <div id="box">
                        {slider_content3}
                    </div>
                    <button className="prew" onClick={this.prewImage3.bind(this)}> {"<"} </button>
                    <button className="next" onClick={this.nextImage3.bind(this)}> > </button>
                </div>
            </div>
            <div className="aftermovie"> <button> <a href="https://www.youtube.com/watch?v=H48wlet9XKw&t=7s"><img src="/logo_youtube.png" alt="logo" /></a></button> 
                AFTERMOVIE 
            </div>
        </div>
        <div className="pravaStvar_baner">
            <img src="/pokreniSe1.png" alt="baner" />
        </div>
      </div>
      );
  }

}

export default EkofUPokretu_middle;