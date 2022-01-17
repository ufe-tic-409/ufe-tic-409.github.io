<template>
    <div class="container flex flex-col space-y-10 py-10">
        <Header>
            Creational patterns
        </Header>
        <div>
            <Pattern v-for="pattern in patterns">
                <template #title>
                    {{ pattern.title }}
                </template>
                <template #intent>
                    {{ pattern.intent }}
                </template>
                <template #diagrams>
                    <img :src="pattern.diagram_link" alt="Abstract factory diagram">
                </template>
                <template #example>
                    <p v-html="pattern.body" />
                    <small v-html="pattern.body_subtext" />
                </template>
                <template #start-code-link>
                    <a href="https://github.com/kagawish/design-patterns-examples/tree/0.2/src/main/java/io/gawish/abstractfactory">Starter code</a>
                </template>
                <template #questions>
                    <ol class="list-decimal">
                        <li v-for="question in pattern.questions" class="mb-3">
                            <Disclosure v-slot="{ open }" as="div"
                                :class="`bg-gray-100 rounded-md p-2 ${open ? 'shadow-lg' : ''}`"
                            >
                                <DisclosureButton class="text-left">
                                    <div class="flex flex-row justify-start space-x-4">
                                        <div v-if="question.is_optional">Optional</div>
                                        <div v-if="question.variant_name">{{ question.variant_name }}</div>
                                    </div>
                                    <div class="text-left" v-html="question.body" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-4">
                                    <div class="p-2 bg-white rounded-md">
                                        <div v-if="question.code_link">
                                            <a :href="question.code_link">Code</a>
                                        </div>
                                        <div v-if="question.answer">
                                            {{ question.answer }}
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
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
import data from "../data/patterns";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";

export default defineComponent({
    name: "Session",
    components: {Pattern, Header, Disclosure, DisclosurePanel, DisclosureButton},
    setup() {
        const patterns = [
            data["abstract-factory"]
        ]
        return {
            patterns
        }
    }
})
</script>

<style scoped>

</style>