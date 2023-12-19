<template>
    <section class="container accordion accordion--radio">
        <h1 class="text-center">Frequently Asked Questions</h1>
        <br />
        <br />
        <div class="tab">
            <input type="radio" name="accordion-2" id="rd1">
            <label for="rd1" class="tab__label">1. Lorem ipsum dolor sit amet.</label>
            <div class="tab__content">
                <p>If you want to have only one tab open, you can use <code>&lt;input type="checkbox"&gt;</code>.</p>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="accordion-2" id="rd2">
            <label for="rd2" class="tab__label">2. Lorem ipsum dolor sit amet.</label>
            <div class="tab__content">
                <p>But if you wanna close the opened tab, you must add a "close" button somewhere, like the one below,
                    that is just another styled radio input.</p>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="accordion-2" id="rd3">
            <label for="rd3" class="tab__label">3. Lorem ipsum dolor sit amet.</label>
            <div class="tab__content">
                <p>But if you wanna close the opened tab, you must add a "close" button somewhere, like the one below,
                    that is just another styled radio input.</p>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="accordion-2" id="rd4">
            <label for="rd4" class="tab__label">4. Lorem ipsum dolor sit amet.</label>
            <div class="tab__content">
                <p>But if you wanna close the opened tab, you must add a "close" button somewhere, like the one below,
                    that is just another styled radio input.</p>
            </div>
        </div>
        <div class="tab">
            <input type="radio" name="accordion-2" id="rd5">
            <label for="rd5" class="tab__label">5. Lorem ipsum dolor sit amet.</label>
            <div class="tab__content">
                <p>But if you wanna close the opened tab, you must add a "close" button somewhere, like the one below,
                    that is just another styled radio input.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s;
}

.tab input:checked~.tab__content {
    max-height: 10rem;
}

/* Visual styles */
.accordion {
    overflow: hidden;
    height: 70vh;
}

.tab__label,
.tab__close {
    display: flex;
    background: #ffffff;
    cursor: pointer;
    border-bottom: 1px solid #eeeeee;
    font-family: NunitoBold;
}

.tab__label {
    justify-content: space-between;
    padding: 1rem;
}

.tab__label::after {
    content: "\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    transform: rotate(90deg);
    transition: all 0.35s;
}

.tab input:checked+.tab__label::after {
    transform: rotate(270deg);
}

.tab__content p {
    margin: 0;
    padding: 1rem;
}

.tab__close {
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
}

.accordion--radio {
    --theme: var(--secondary);
}

/* Arrow animation */
.tab input:not(:checked)+.tab__label:hover::after {
    animation: bounce .5s infinite;
}

@keyframes bounce {
    25% {
        transform: rotate(90deg) translate(.25rem);
    }

    75% {
        transform: rotate(90deg) translate(-.25rem);
    }
}
</style>