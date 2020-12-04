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
      <img src="../../assets/imagess.png" id="imglanding">
    <h1 id="spaceTop">Principales ventajas de (Empresa) Para Clubs</h1>
    <div id="landingventajas">
      <div class="cardVentajas">
        <div class="wraperIcon">
          <img src="../../assets/jugadorderugby.png" class="iconlanding">
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
        <h2>200.000</h2>
        <h4>Jugadores</h4>
        <p>Buscando un club</p>
        <h2>120+</h2>
        <h4>Oportunidades</h4>
        <p>Y aumentando</p>
      </div>
       <img src="../../views/icons/Logo-BTS.png" alt="" class="logoWeb">
      <div class="contadorRigth">
        <h2>220+</h2>
        <h4>Clubs</h4>
        <p>Buscando jugadores</p>
        <h2>2</h2>
        <h4>Pises</h4>
        <p>y mas pronto</p>
      </div>
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
    font-family: 'Open Sans', sans-serif;
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
  flex-direction: row;
  align-items: baseline;
}

.contadorLeft {
  width: 20%;
  display: flex;
  flex-direction: column;
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

</style>
