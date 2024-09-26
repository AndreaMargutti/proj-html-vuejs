<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="search-bar d-flex">
        <input type="text" class="form-control" placeholder="Cerca...">
        <img src="../assets/img/image (8).svg" alt="Search">
    </div>
</template>

<style lang="scss" scoped>
.search-bar {
    width: 60%;
    height: 70px;
    gap: 2rem;
    border: 1px solid white;
    box-shadow: 5px 5px white;

    align-items: center;

    input {
        color: white;
        background-color: transparent;
        border: none;

        &::placeholder {
            color: gray;
        }
    }
}


img {
    filter: invert(1);
    height: 30%;
    padding-right: 2rem;
    cursor: pointer;
}
</style>