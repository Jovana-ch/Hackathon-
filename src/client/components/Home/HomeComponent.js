import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAll } from "../../actions/especies";

/*
const items = [
  {
    src: "https://media.metrolatam.com/2018/10/09/totoabafj-87fe96ee04e6c5db02e246cd39929f11.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://www.atrapalo.com/houdinis/wp-content/uploads/2019/06/@zmachacek.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  }
];*/

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, items: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.getImages = this.getImages.bind(this);
  }

    componentDidMount(){
        getAll().then(res=>this.getImages(res));
    }

    getImages(response){
        const newItems = [];
        response.map((especie)=>{
            newItems.push({
                src: especie.url,
                altText: especie.name,
                caption: especie.name
            })
        })

        this.setState({items: newItems});
    }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
      const {items} = this.state;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
      const {items} = this.state;
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, items } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className='carruselImg' src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <div>
            <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel><br/>
            <div className='row info'>
                <h3>¿Sabías que...?</h3>
                <h6>
                    Al momento existen 2,606 especies listadas en la Norma Oficial Mexicana NOM 059-SEMARNAT-2010 
                    en alguna situación de riesgo, de las cuales 1,573 son animales (anfibios, aves, invertebrados, 
                    mamíferos, peces y reptiles), 987 plantas y 46 distintas especies de hongos.
                </h6>
                <h6>Son 15 las especies marinas clasificadas en peligro de extinción, entre las que se encuentran 
                    7 especies de tortugas,  siendo éstas, la tortuga caguama  (Caretta caretta); la tortuga verde 
                    del Pacífico o prieta (Chelonia agassizi); la tortuga verde del Atlántico o tortuga blanca 
                    (Chelonia mydas).</h6>
                <h6>También la carey (Eretmochelys imbricata); la lora (Lepidochelys kempii); la golfina (Lepidochelys 
                    olivácea) y la laúd (Dermochelys coriácea). Asimismo, en la lista de especies marinas en peligro 
                    de extinción están la totoaba (Totoaba macdonaldi); el manatí del Caribe (Trichechus manatus); 
                    el lobo fino de Guadalupe (Arctocephalus townsendi); la vaquita marina (Phocoena sinus); la ballena 
                    franca (Eubalaena japónica); la nutria marina (Enhydra lutris); la cacerolita de mar (Limulus 
                    polyphemus); y el cangrejo (Typhlopseudothelphusa mocinoi)</h6>
            </div>

            <div className='row info'>
                <h3>Pero, ¿por qué pasa esto?</h3>
                <h6>
                Entre los problemas que se han detectado se encuentran los siguientes: desarrollo turístico desordenado; 
                crecimiento demográfico sin contar con planes de desarrollo urbano y ordenamientos ecológicos locales 
                adecuados; así como impacto de las descargas urbanas, agrícolas e industriales en los ríos, arroyos y 
                ecosistemas costeros-marinos.
                </h6>
                <h6>De igual forma, la extracción ilegal de conchas y corales para uso artesanal; contaminación por buques 
                    tanque y detergentes tóxicos; saqueo de nidos de tortugas marinas; aumento de basura orgánica e inorgánica; 
                    y reducción de arrecifes por diversas fuentes de impacto (contaminación, accidentes y deterioro incontrolado, 
                    entre otras).</h6>
            </div>

            <div className='row info'>
                <h3>¿Alguien está haciendo algo?</h3>
                <h6>
                Para atender la problemática mencionada, la PROFEPA mantiene en operación permanente las siguientes líneas de acción:
                <ul>
                    <li>Programa de Inspección de Áreas Naturales Protegidas Marinas y Litorales.</li>
                    <li>Programa de vigilancia en sitios de anidación de Tortugas Marinas.</li>
                    <li>Plan de Verificación de Dispositivos Excluidores de Tortuga marina.</li>
                    <li>Programa permanente de protección a la Vaquita Marina.</li>
                    <li>Programa de vigilancia para la protección de especies en riesgo “Ballenas y Tiburón Ballena”.</li>
                    <li>Programa de atención para la inspección a campamentos tortugueros.</li>
                    <li>Programa de atención para la inspección a delfines y delfinarios.</li>
                    <li>Atención a contingencias en Recursos Marinos.</li>
                </ul>
                </h6>
                
            </div>

            <div className='row info'>
                <h3>¿Qué podemos hacer nosotros?</h3>
                <h6>
                <ul>
                    <li>Denuncia la cacería ilegal.</li>
                    <li>Denuncia el mercadeo de especies en el mercado negro</li>
                    <li>Sigue las indicaciones de los responsables de cuidar especies y ecosistemas, si ellos dicen que no te puedes llevar ni siquiera arena, NO LO HAGAS.</li>
                </ul>
                </h6>
                <h4>Recuerda que el planeta es nuestro hogar, y tenemos que compartirlo con muchísimas especies, cuídalos también.</h4>
            </div>
        <br/><br/><br/></div>

    );
  }
}


export default Example;