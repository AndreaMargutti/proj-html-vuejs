<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="box">
        <h3>TITOLO</h3>
        <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.box {
    margin: 1rem;

    h3 {
        padding-bottom: 1rem;
    }
}

ul {
    list-style-type: none;

    &>* {
        padding-bottom: 1rem;
    }
}
</style>