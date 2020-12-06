<script>
import navbar from '../../components/navbar/navbar'
export default {
  name: 'root',
  components: {
    navbar
  },
  data: function () {
    return {
    }
  }
}

</script>
<template>
<div id="wraperimg">
    <navbar></navbar>
      <img src="../../assets/fondo.png" id="imglanding">
    <h1 id="spaceTop">Principales ventajas de (Empresa) Para Clubs</h1>
    <div id="landingventajas">
      <div class="cardVentajas">
        <div class="wraperIcon">
          <img src="../../assets/jugador.png" class="iconlanding">
        </div>
          <span class="stlyeTitle"><b>ENCUENTRA JUGADORES RELEVANTES</b></span>
        <p>Al utilizar nuestra solución "Smart Matching", podrá encontrar rápida y fácilmente los jugadores adecuados para su club.</p>
      </div>
      <div>
        <div class="wraperIcon">
          <img src="../../assets/reloj.png" class="iconlanding">
        </div>
        <span class="stlyeTitle">AHORRE TIEMPO Y DINERO</span>
        <p>Nuestra solución le permitirá buscar jugadores relevantes mucho más rápido. Por lo tanto, ahorrará mucho tiempo y dinero.</p>
      </div>
      <div>
        <div class="wraperIcon">
          <img src="../../assets/estadisticas.png" class="iconlanding">
        </div>
        <span class="stlyeTitle">GESTIONE CON FACILIDAD</span>
        <p>Con solo unos pocos clics, podrá controlar a todos sus jugadores preseleccionados; mientras que puede contactarlos e invitarlos a capacitaciones de prueba en cualquier momento.</p>
      </div>
      <div>
        <div class="wraperIcon">
          <img src="../../assets/sello.png" class="iconlanding">
        </div>
        <span class="stlyeTitle">AUMENTA LA PROMINENCIA DE TUS CLUBS</span>
        <p>Aumente la conciencia de su club creando un excelente perfil de club con imágenes asombrosas de sus instalaciones y equipos. ¡Comunícate con tu comunidad de Rugby ahora!</p>
      </div>
    </div>
     <button class="buttonsNavbar">Prueba Gratis</button>
    <div id="sobreNosotros">
      <div id="wrapperNosotros">
        <h2>Sobre Nosotros (NAME EMPRESA)</h2>
        <p>(Empresa) es una revolucionaria plataforma profesional en línea para la industria del Rugby. Con nuestro algoritmo "Smart Matching" completamente nuevo, conectamos a jugadores y clubes de manera muy eficiente, rápida y sencilla.
            Ayudamos a los jugadores a encontrar fácilmente un nuevo club y, al mismo tiempo, ayudamos a los clubes de Rugby a ahorrar energía, tiempo y dinero. Los jugadores y los clubes pueden concentrarse en lo que es más importante para ellos su carrera DEPORTIVA!
        </p>
      </div>
      <div class="imgNostros">
        <img src="../../assets/empresa.png" class="imgNostros">
      </div>
    </div>
    <div id="contador">
      <div class="contadorLeft">
        <div>
          <h2>200.000</h2>
          <h4>Jugadores</h4>
          <p style="padding-bottom: 75%;">Buscando un club</p>
        </div>
        <div>
          <h2>120+</h2>
          <h4>Oportunidades</h4>
          <p>Y aumentando</p>
        </div>
      </div>
      <div id="logoContador">
        <img src="../../views/icons/logobts.png" alt="" class="logoWeb">
      </div>
      <div class="contadorRigth">
        <div>
          <h2>220+</h2>
          <h4>Clubs</h4>
          <p style="padding-bottom: 75%;">Buscando jugadores</p>
        </div>
        <div>
          <h2>2</h2>
          <h4>Pises</h4>
          <p>y mas pronto</p>
        </div>
      </div>
    </div>
     <div id="titleNews">
        <h4>Noticias ultima hora</h4>
        <h5>Ver todas</h5>
      </div>
    <div id="news">
      <div class="textAlignNews">
        <img src="../../assets/leonas.jpeg" class="wrapernewsImg" alt="">
        <h6>Liga DH: Alcobendas se afianza en el liderato y el VRAC se lleva el...</h6>
        <p>30 septiembre 2020 | 62 Lecturas</p>
        <p>La tercera jornada de la Liga de División de Honor arrancó el sábado con dos partidazos, en los que el Lexus Alcobendas...</p>
      </div>
      <div class="textAlignNews">
        <img src="../../assets/getxo.jpg" class="wrapernewsImg" alt="">
        <h6>Joma presenta las revolucionarias equipaciones de Leones7s y Leonas7s</h6>
        <p>30 septiembre 2020 | 56 Lecturas</p>
        <p>Siguiendo con la reciente campaña #PonteEnNuestraPiel, Joma y la Federación Española de Rugby (FER) presentan las camisetas de sus selecciones masculina y...</p>
      </div>
      <div class="textAlignNews">
        <img src="../../assets/salvador.jpg" class="wrapernewsImg" alt="">
        <h6>Campaña #YoSeréLeona: 90 clubes ya tienen una internacional como madrina</h6>
        <p>30 septiembre 2020 | 72 Lecturas</p>
        <p>¡Esto no para! Poco más de una semana después de poner en marcha la campaña #YoSeréLeona, con la que la Federación Española...</p>
      </div>
    </div>
    <h2 id="spaceColaboradores">Colaboradores</h2>
    <div id="carouselColaboradores">
        <img class="colaboradoresImg" src="../../views/icons/iberdrola.png" alt="">
        <img class="colaboradoresImg" src="../../views/icons/fercatalana.png" alt="">
        <img class="colaboradoresImg" src="../../views/icons/canterbury.png" alt="">
        <img class="colaboradoresImg" src="../../views/icons/fervalenciana.png" alt="">
        <img class="colaboradoresImg" src="../../views/icons/fermadrid.png" alt="">
        <img class="colaboradoresImg" src="../../views/icons/ferrugby.png" alt="">
    </div>
</div>
</template>
<style>
#wraperimg {
    width: 78%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
}

#imglanding {
    width: 100%;
    height: 60%;
}

#landingventajas {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 8%;
    margin-top: 2%;
    cursor: pointer;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
}

.iconlanding {
  width: 73%;
  height: 100%;
}

.wraperIcon {
     width: 42%;
    padding-left: 30%;
}

#wrapperNosotros {
  width: 50%;
  display: flex;
  flex-direction: column;
}

#imgEmpresa {
    width: 50%;
}

.imgNostros {
  width: 50%;
}

#sobreNosotros {
    display: flex;
    flex-direction: row;
    margin-top: 6%;
  }

#spaceTop {
  margin-top: 4%;
}

.cardVentajas {
}

#contador {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 12%;
  padding-left: 12%;
}

.contadorLeft {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.contadorRigth {
  width: 20%;
  display: flex;
  flex-direction: column;
}

.stlyeTitle {
  font-size: 11px;
  font-weight: bold;
}

#logoContador {
  align-self: center;
}

#news {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.wrapernewsImg {
  border-radius: 7%;
}

#titleNews {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 6%;
  margin-top: 6%;
}

.textAlignNews {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 18em
}

#carouselColaboradores {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.colaboradoresImg {
    width: 15%;
    height: 50%;
}

#spaceColaboradores {
  margin-top: 10%;
  margin-bottom: 6%;
}

</style>
