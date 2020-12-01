<script>
export default {
  name: 'navbar',
  data: function () {
    return {
    }
  }
}

</script>
<template>
    <div>
        <div id="contentNavbar">
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
    </div>
</template>
<style>
#contentNavbar {
    width: 70%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.logoWeb{
    height: 13vh;
    width: 15vw;

}
.IconsNavbar{
    height: 1.2rem;
    cursor: pointer;
}
.spaceNavbar{
    display: flex;
    justify-content: space-between;

}
.navbarSpace{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5%;
    align-items: center;
}
.navbar{
    cursor: pointer;
    background-color: #E8F4F8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5%;
    align-items: center;
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

</style>
