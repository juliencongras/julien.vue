<template>
<div class="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-base-100 text-base-content">
    <div class="not-found">
        <div class="error">404</div>
        <br /><br />
        <span class="info">File not found</span>
        <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
        <router-link to="/" class="btn btn-primary">Retour à l'accueil</router-link>
    </div>
</div>    
</template>

<script setup lang='js'>
</script>

<style scoped lang="css">
@import url(https://fonts.googleapis.com/css?family=Gilda+Display);

.static {
    opacity: 0.05;
    z-index: 230;
    user-select: none;
}

.error {
    text-align: center;
    font-family: 'Gilda Display', serif;
    font-size: 95px;
    font-style: italic;
    text-align: center;
    animation: noise 2s linear infinite;
    overflow: default;
}

.error:after {
    content: '404';
    font-family: 'Gilda Display', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: blue;
    animation: noise-1 .2s linear infinite;
}

.info {
    /* text-align: center; */
    font-family: 'Gilda Display', serif;
    font-size: 15px;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: noise-3 1s linear infinite;
}

.error:before {
    content: '404';
    font-family: 'Gilda Display', serif;
    font-size: 100px;
    font-style: italic;
    text-align: center;
    width: 100px;
    height: 60px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    color: red;
    animation: noise-2 .2s linear infinite;
}

@keyframes noise-1 {

    0%,
    20%,
    40%,
    60%,
    70%,
    90% {
        opacity: 0;
    }

    10% {
        opacity: .1;
    }

    50% {
        opacity: .5;
        left: -6px;
    }

    80% {
        opacity: .3;
    }

    100% {
        opacity: .6;
        left: 2px;
    }
}

@keyframes noise-2 {

    0%,
    20%,
    40%,
    60%,
    70%,
    90% {
        opacity: 0;
    }

    10% {
        opacity: .1;
    }

    50% {
        opacity: .5;
        left: 6px;
    }

    80% {
        opacity: .3;
    }

    100% {
        opacity: .6;
        left: -2px;
    }
}

@keyframes noise {

    0%,
    3%,
    5%,
    42%,
    44%,
    100% {
        opacity: 1;
        transform: scaleY(1);
    }

    4.3% {
        opacity: 1;
        transform: scaleY(1.7);
    }

    43% {
        opacity: 1;
        transform: scaleX(1.5);
    }
}

@keyframes noise-3 {

    0%,
    3%,
    5%,
    42%,
    44%,
    100% {
        opacity: 1;
        transform: scaleY(1);
    }

    4.3% {
        opacity: 1;
        transform: scaleY(4);
    }

    43% {
        opacity: 1;
        transform: scaleX(10) rotate(60deg);
    }
}
</style>