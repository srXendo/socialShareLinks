<script>
export default {
  name: 'root',
  data: function () {
    return {
    }
  }
}

</script>
<template>
<div>
    <div class="spaceNavbar">
        <div>
            <img class="IconsNavbar" src="../../views/icons/facebook.png" alt="">
            <img class="IconsNavbar" src="../../views/icons/twiter.png" alt="">
        </div>
        <span class="marginNavbar">name-empresa@gmail.com</span>
        <span class="marginNavbar">Idioma</span>
        <span class="marginNavbar">654226236</span>
        <div>
            <img class="IconsNavbar" src="../../views/icons/whatsapIcon.png" alt="">
            <img class="IconsNavbar" src="../../views/icons/instagram.png" alt="">
        </div>
    </div>
    <div class="navbarSpace">
        <router-link to="/signIn">Registrar Jugador</router-link>
        <router-link to="/signUp">Login Jugador</router-link>
        <img src="../../views/icons/Logo-BTS.png" alt="" class="logoWeb">
        <router-link to="/signIn">Registrar Club</router-link>
        <router-link to="/signUp">Login Club</router-link>
    </div>
    <div class="navbar">
        <span class="textHover">Foro</span> |
        <span class="textHover">Streaming y videos populares de la comunidad</span> |
        <span class="textHover">Noticias Rugby</span> |
        <span class="textHover">Nustros Clubs</span> |
        <span class="textHover">Nuestros Jugadores</span> |
        <span class="textHover">Enfoca tu carrera como entrenador</span>
    </div>
</div>
</template>

<style>
.logoWeb{
   height: 13vh;
    width: 15vw;
    margin-top: -33px;
}
.IconsNavbar{
    height: 1.2rem;
    cursor: pointer;
}
.spaceNavbar{
    grid-template-columns: 20% 20% 20% 20% 20%;
    display: grid;
    padding: 0px 1rem 0px 0rem;
}
.navbarSpace{
    margin-top: 4%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    padding: 0px 140px 0px 138px;
    display: grid;
}
.navbar{
    cursor: pointer;
    margin-top: 3%;
    background-color: #E8F4F8;
    padding: 0rem 5rem 0rem 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.textHover{
    color: black;
}
.textHover:hover{
    color: blueviolet;
}
.imgBackground{
    width: 100%;
}
.marginNavbar{
    color: black;
    cursor: pointer;
}
.marginNavbar:hover{
    color: blueviolet;
}

@media screen and (min-width: 1px) and (max-width: 767px) {
.spaceNavbar{
    grid-template-columns: 10% 10% 10% 10% 10%;
    display: grid;
    padding: 0px 1rem 0px 0rem;
}
}

@media screen and (min-width: 768px) and (max-width: 991px) {

}

@media screen and (min-width: 992px) and (max-width: 1199px) {

}

@media screen and (min-width: 1200px) {

}
</style>
