<script>
export default {
  data() {
    return {
      // Stato per mostrare o nascondere il popup
      showVideo: false,
    };
  },
  methods: {
    openVideo() {
      this.showVideo = true;
    },
    closeVideo() {
      this.showVideo = false;
    },
  },
};
</script>

<template>
  <section id="video">
    <img src="../assets/img/Video.jpg" alt="Anteprima video" />
    <div>
      <!-- Aggiungi l'evento click direttamente sull'elemento SVG -->
      <svg @click="openVideo" viewBox="0 0 512 512" id="player">
        <path
          fill="currentColor"
          d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
        ></path>
      </svg>
      <h2>NEW MUSIC VIDEO</h2>
    </div>

    <div v-if="showVideo" class="video-popup">
      <div class="popup-content">
        <!-- Pulsante per chiudere il popup -->
        <button class="close-btn" @click="closeVideo">x</button>
        <iframe
          width="1124"
          height="482"
          src="https://www.youtube.com/embed/lTZLlzLJ68o"
          title="Auto Service Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  height: 70vh;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #f2870c;
  font-size: 15rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#player {
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    scale: 1.1;
  }
}

.video-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  text-align: center;
  top: 100%;
  left: 100%;
}

iframe {
  width: 85%;
  height: 450px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-51%, -40%);
}

.close-btn {
  position: absolute;
  top: 0%;
  right: 60px;
  background-color: transparent;
  border: none;
  font-size: 60px;
  color: red;
  transform: rotate(90deg);
  cursor: pointer;
  &:hover {
    scale: 1.2;
    &:active {
      scale: 1;
    }
  }
}
</style>
