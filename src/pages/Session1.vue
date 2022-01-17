<template>
    <div class="container flex flex-col space-y-10">
        <Header>
            Creational patterns
        </Header>
        <div>
            <Pattern>
                <template #title>
                    🏭 Abstract factory pattern (aka. Kit)
                </template>
                <template #intent>
                    Provide an interface for creating families of related or dependent objects without specifying their concrete classes
                </template>
                <template #diagrams>
                    <img src="../assets/abstract-factory.png" alt="Abstract factory diagram">
                </template>
                <template #example>
                    <p>
                        Let's say you are creating a simple game. In the game, the player can do 3 actions: <strong>attack</strong>, <strong>travel</strong>, <strong>visit a friend</strong>. The game can have multiple different settings : <strong>Medieval</strong>, <strong>Futuristic</strong> and depending on the style chosen, different classes are used.
                    </p>
                    <small>
                        <i>For example: When traveling, if you are using the medieval setting, you will be using a horse, however, if you are using the Futuristic setting, you will use a spaceship. Same when attacking, if you attack in medieval, you attack with a sword, however, if you are using the Futuristic setting, you will use a Laser Sabre.</i>
                    </small>
                </template>
                <template #start-code-link>
                    <a href="https://github.com/kagawish/design-patterns-examples/tree/0.2/src/main/java/io/gawish/abstractfactory">Starter code</a>
                </template>
                <template #questions>
                    <ol class="list-decimal">
                        <li>Start by copying the start code and reading it. What do you think about the code structure ?</li>
                        <li>Let's assume we wanted to add a new setting : <strong>Modern (Car, MachineGun)</strong>. Start by adding the necessary classes.</li>
                        <li>Do the necessary changes have a working program. How hard was it to integrate a new setting ? <a href="https://github.com/kagawish/design-patterns-examples/tree/0.3/src/main/java/io/gawish/abstractfactory">[code]</a></li>
                        <li>Refactor the code by using the Abstract Factory pattern to remove redundancies and improve code flexibility <a href="https://github.com/kagawish/design-patterns-examples/tree/0.4/src/main/java/io/gawish/abstractfactory">[code]</a></li>
                        <li>
                            <strong class="text-primary">[Optional - Concrete fallback variation]</strong> How to make it so that you don't have to implement all the methods in the abstract factory ?
                        </li>
                    </ol>
                </template>
            </Pattern>
        </div>
    </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Pattern from "../components/Pattern.vue";
import {defineComponent} from "vue";

export default defineComponent({
    name: "Session1",
    components: {Pattern, Header}
})
</script>

<style scoped>

</style>