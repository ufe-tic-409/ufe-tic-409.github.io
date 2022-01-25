<template>
    <div class="container flex flex-col space-y-10 py-10">
        <Header />
        <div>
            <H3 class="text-primary">Softwares</H3>
            <ul>
                <li>StarUML (perpetual trial - Export watermarked)</li>
                <li>IntellijIdea Community Edition</li>
            </ul>
        </div>
        <div>
            <H3 class="mb-2 text-primary">Practical sessions</H3>
            <ul class="space-y-4">
                <li>
                    <a class="underline text-primary" target="_blank" href="/src/assets/uml.pdf">
                        UML Presentation
                    </a>
                    <div><small>22/11/2021</small></div>
                    <p>
                        Session 1 covers the basics of UML : Class diagram, Activity diagram, Sequence diagram & Use-case diagram
                    </p>
                </li>
                <hr>
                <li>
                    <router-link class="underline text-primary" to="/session/1">
                        Session 1
                    </router-link>
                    <div><small>06/12/2021</small></div>
                    <p>
                        Session 1 covers examples for multiple patterns : <strong>Singleton Pattern</strong>, <strong>Abstract Factory Pattern</strong>, <strong>Factory Method Pattern</strong> & <strong>Builder Pattern</strong>
                    </p>
                </li>
                <hr>
                <li>
                    <router-link class="underline text-primary" to="/session/2">
                        Session 2
                    </router-link>
                    <div><small>13/12/2021</small></div>
                    <p>
                        Session 2 covers examples for multiple patterns : <strong>Adapter Pattern</strong>, <strong>Proxy Pattern</strong>
                    </p>
                </li>
                <hr>
                <li>
                    <router-link class="underline text-primary" to="/session/3">
                        Session 3
                    </router-link>
                    <div><small>20/12/2021</small></div>
                    <p>
                        Session 3 covers examples for multiple patterns : <strong>Decorator Pattern</strong>, <strong>Composite Pattern</strong>
                    </p>
                </li>
                <hr>
                <li>
                    <router-link class="underline text-primary" to="/session/4">
                        Session 4
                    </router-link>
                    <div><small>03/01/2022</small></div>
                    <p>
                        Session 4 covers examples for multiple patterns : <strong>Bridge Pattern</strong>, <strong>Facade Pattern</strong>
                    </p>
                </li>
                <hr>
                <li>
                    <router-link class="underline text-primary" to="/session/5">
                        Session 5
                    </router-link>
                    <div><small>10/01/2022</small></div>
                    <p>
                        Session 5 covers examples for multiple patterns : <strong>Observer Pattern</strong>, <strong>State Pattern</strong> & <strong>Template Pattern</strong>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Header from "../components/Header.vue";
import H3 from "../components/H3.vue";

export default defineComponent({
    name: "Home",
    components: {H3, Header}
})
</script>

<style scoped>

</style>