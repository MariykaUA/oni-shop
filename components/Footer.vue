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
                <h4 class="headlines">FOLLOW US</h4>
                <ul class="social-links">
                    <li>
                        <a class="media-link" href="https://www.facebook.com/On/" target="_blank" rel="noopener noreferrer" aria-label="Follow On on Facebook">
                        <Facebook /></a>
                    </li>
                    <li>
                        <a class="media-link" href="https://www.instagram.com/on/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Follow On on Facebook">
                        <Instagram /></a>
                    </li>
                </ul>
            </div>

            <div class="information">
                <h4 class="headlines">INFORMATION</h4>
                <ul class="info-links">
                    <li><NuxtLink class="navlink" >About Us</NuxtLink></li>
                    <li><NuxtLink class="navlink" >Privacy Policy</NuxtLink></li>
                    <li><NuxtLink class="navlink" >Terms of Service</NuxtLink></li>
                </ul>
            </div>

            <div class="contact">
                <h4 class="headlines">CONTACT US</h4>
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
    gap: 2rem;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 3rem 5rem 1rem 5rem;
}

.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4.8rem;
    width: 100%;
    margin: 0 auto;
}

.copyright {
    width: 100%;    
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
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}

.social-links {
    list-style: none;
    text-decoration: none;
    color: $white;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 1rem;
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

.address, .mission {
    font-weight: $weight-light;
    width: 85%;
}

.logo-img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
}

.media-link {
    color: $white;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: $secondary-color;
    }

    &:visited {
        color: $white; 
    }
}

@include until("small") {
    footer {
        padding: 2rem;
        margin: 0;
        justify-content: flex-start;
    }

    .social-links {
        flex-direction: row;

    }

    .content {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
    }

    .brand, .social, .information, .contact {
        display: inline-flex;
        flex-direction: row;
        width: 100%;
    }

    .headlines, .address, .mission {
        display: none;
    }

    .brand {
       gap: 1rem;
       align-items: center;
    }

    .copyright {
        font-size: 0.875rem;
        justify-content: center;
        width: 100%;
        padding: 0;
    }
}
</style>