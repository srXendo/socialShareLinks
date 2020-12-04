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
                <span style="padding-right: 11%;" class="marginNavbar">Idioma</span>
                <span class="marginNavbar">654226236</span>
                <div>
                    <img class="IconsNavbar" src="../../views/icons/whatsap.png" alt="">
                    <img class="IconsNavbar" src="../../views/icons/instagram.png" alt="">
                </div>
            </div>
            <div class="navbarSpace">
                <button class="buttonsNavbar">
                    <router-link class="refactoryLink" to="/signIn">Registrar Jugador</router-link>
                </button>
                <button class="buttonsNavbar">
                    <router-link class="refactoryLink" to="/signUp">Login Jugador</router-link>
                </button>
                <img src="../../views/icons/Logobts.png" alt="" class="logoWeb">
                <button class="buttonsNavbar">
                    <router-link class="refactoryLink" to="/signIn">Registrar Club</router-link>
                </button>
                <button class="buttonsNavbar">
                    <router-link class="refactoryLink" to="/signUp">Login Club</router-link>
                </button>
            </div>
            <div class="navbar">
                <span class="textHover">Foro</span> |
                <span class="textHover">Streaming y videos populares de la comunidad</span> |
                <span class="textHover">Noticias Rugby</span> |
                <span class="textHover">Nuestros Clubs</span> |
                <span class="textHover">Nuestros Jugadores</span> |
                <span class="textHover">Enfoca tu carrera como entrenador</span>
            </div>
        </div>
    </div>
</template>
<style>
#contentNavbar {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
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
    color: black;
}
.navbar{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1.5%;
    align-items: center;
    height: 4vh;
    border-top-left-radius: 1% 33%;
    border-top-right-radius:  1% 33%;
    background-color: #E4FF3D;
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
.buttonsNavbar {
    width: 15%;
    height: 4vh;
    border: none;
    background-color: #E4FF3D;
    border-top-left-radius: 4% 21%;
    border-top-right-radius: 4% 21%;
    border-bottom-left-radius: 4% 21%;
    border-bottom-right-radius: 4% 21%;
    margin: auto;
    cursor: pointer;
}
.buttonsNavbar:hover{
    color: blueviolet;
}
.refactoryLink {
    text-decoration: none;
    color: black;
}
.refactoryLink:hover{
    color: blueviolet;
}
</style>
