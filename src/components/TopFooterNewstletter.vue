<script>
import ReadMoreBtn from "./ReadMoreBtn.vue";

export default {
  data() {
    return {
      buttonText: "SEND MESSAGE",
    };
  },
  components: {
    ReadMoreBtn,
  },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-4">NEWSLETTER</h2>
    <div class="mb-3">
      <input
        type="email"
        class="form-control"
        id="email-input"
        placeholder="Email"
      />
    </div>
    <div class="mb-3">
      <textarea
        class="form-control"
        id="message-input"
        placeholder="Message"
        rows="3"
      ></textarea>
    </div>
    <div class="button">
      <ReadMoreBtn :text="buttonText" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  .btn {
    align-self: flex-start;
  }

  .form-control {
    border-radius: 0;
    border-color: gray;
    background-color: transparent;
    padding: 1rem;
    color: white; 

    &::placeholder {
      color: gray;
      opacity: 1; 
    }
  }
}
</style>
