<template>
    <div class="contact-page">
      <h1 class="contact-title">Visit Our Shop!</h1>
  
      <p class="contact-description">We are always happy to see you! Find us at our location below:</p>
  
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.213038765865!2d8.507808616540178!3d47.39274745007582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bb62d4bb669%3A0xd9014a876e703170!2sOn%20Labs%20Zurich!5e0!3m2!1sen!2sch!4v1749212176153!5m2!1sen!2sch" 
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map showing the location of On Labs Zurich">
        </iframe>
      </div>
  
      <div class="contact-info">
        <p class="text-contacts">Förrlibuckstrasse 190, 8005 Zürich</p>
        <p class="text-contacts">+41 79 001 00 00</p>
        <p class="text-contacts">on-labs@running.com</p>
      </div>
    </div>
  </template>

  <style lang="scss" scoped>
  .contact-page {
    padding: 1rem;
    text-align: center;
    max-width: 900px;
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  
  .contact-title {
    color: $primary-color;
    margin-bottom: 1rem;
    font-family: $font-secondary;
    font-size: 2.25rem;
    font-weight: $weight-medium;
    letter-spacing: 0.5px;
  }
  
  .contact-description {
    color: $primary-color;
    line-height: 1.6;
    font-weight: $weight-light;
    letter-spacing: 0.5px;
  }
  
  .map-container {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    border: 1px solid $accent-color;
    box-shadow: 0 2px 5px rgba(4, 9, 55, 0.1);
    overflow: hidden; 
    display: flex; 
    justify-content: center;
  }
  
  .map-container iframe {
    width: 100%; /* Make iframe responsive within its container */
    height: 450px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: $accent-color;
    border-left: 4px solid $accent-dark-color;
    padding: 1rem;
    text-align: left;
  }
  
  .text-contacts {
    color: $black;
    font-size: 1.2rem;
    font-weight: $weight-normal;
    letter-spacing: 0.5px;
}
</style>