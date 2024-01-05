<template>
    <div id="app" class="copy_container">
        <input class="input" v-on:focus="$event.target.select()" ref="clone" readonly :value="text" />
        <button class="black_button" @click="copy">Copy</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            text: "info@damdamglobal.com"
        };
    },
    methods: {
        copy() {
            this.$refs.clone.focus();
            this.$toasted.success("Email copied", {
                theme: "toasted-primary",
                position: "top-center",
                duration: 1000
            })
            document.execCommand('copy');

        }
    }
};
</script>
<style scoped>
.input {
    border: none;
    background-color: none;
    height: 50px;
    padding: 0 20px;
    border-radius: 5px 0 0 5px;
    text-align: center;
    width: 225px;
    outline: none;
}

.copy_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

@media only screen and (max-width: 239px) {
    .copy_container {
        display: flex;
        flex-wrap: wrap;

    }

}
</style>