<template>
    <footer>
        <div class="content">
            <div class="brand">
                <NuxtLink class="navlink" to="/">
                    <nuxt-img 
                        :src="'/logo.svg'" 
                        alt="On Labs logo" 
                        class="logo-img" />
                </NuxtLink>
                <p class="mission">Ignite the human spirit through movement.</p> 
            </div>

            <div class="social">
                <h4>FOLLOW US</h4>
                <ul class="social-links">
                    <li><Facebook /></li>
                    <li><Instagram /></li>
                </ul>
            </div>

            <div class="information">
                <h4>INFORMATION</h4>
                <ul class="info-links">
                    <li><NuxtLink class="navlink" to="/about">About Us</NuxtLink></li>
                    <li><NuxtLink class="navlink" to="/privacy">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink class="navlink" to="/terms">Terms of Service</NuxtLink></li>
                </ul>
            </div>

            <div class="contact">
                <h4>CONTACT US</h4>
                <p class="address">On AG, 8005 Zürich, Switzerland</p>
            </div>
        </div>

        <div class="bottom">
            <p class="copyright">&copy; All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Facebook from '~/components/icons/Facebook.vue';
import Instagram from '~/components/icons/Instagram.vue';
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 4rem;
    padding: 2rem 5rem;
    width: 100%;
}

.copyright {
    width: 100%;
    text-align: center;
    padding: 0 2.5rem;
    font-size: 1rem;
    font-weight: $weight-light;

}

.brand, .social, .information, .contact {
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 0.75rem;
    font-size: 1.25rem;
    font-weight: $weight-light;
    line-height: 160%;
}

.social-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: $weight-light;
}

.info-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: $weight-light;
}

.navlink {
    color: $white;
    text-decoration: none;
}

.address {
    font-weight: $weight-light;
}

.logo-img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
}
</style>