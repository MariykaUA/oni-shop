<template>
    <div class="home">
        <img class="hero-img" src="~/assets/error.png" alt="https://www.flaticon.com/free-stickers/error"/>
        <h1>My On projects live here</h1>
        <p>*Feedbacks are welcome*</p>
    </div>
</template>


<script setup>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Noto+Serif+Old+Uyghur&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
    $mobile-screen: 375px;
    $desktop-screen: 1440px;

    .home {
        margin: 0;
        padding-top: 13rem;
        display: block;
        text-align: center;
        align-items: center;
        background-image: url('~/assets/6017056.jpg');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;        
        height: 100vh; 

        h1 {
            font-family: "Noto Serif Old Uyghur", serif;
            margin: 0.5rem;
            font-size: 3rem;
            font-weight: 600;
            color:hsl(243, 19%, 23%);

            @media (max-width: $mobile-screen) {
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 1.2rem;
            color: hsl(243, 23%, 39%);
            margin: 0.8rem;
        }

        img {
            width: 120px;
            height: 120px;
            margin-bottom: 0.2rem;
        }
    }
</style>