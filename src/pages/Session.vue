<template>
    <div class="container flex flex-col space-y-10 py-10">
        <Header>
            Session {{ id }}
        </Header>
        <div class="space-y-32">
            <Pattern v-for="pattern in patterns">
                <template #title>
                    {{ pattern.title }}
                </template>
                <template #intent>
                    {{ pattern.intent }}
                </template>
                <template #diagrams>
                    <img class="max-h-96" :src="pattern.diagram_link">
                </template>
                <template #example>
                    <p v-html="pattern.body" />
                    <small v-html="pattern.body_subtext" />
                </template>
                <template #start-code-link>
                    <a target="_blank" :href="pattern.starter_code_link">Starter code</a>
                </template>
                <template #questions>
                    <ol class="list-decimal">
                        <li v-for="question in pattern.questions" class="mb-3">
                            <Disclosure as="div"
                                :class="`bg-gray-100 rounded-md p-2`"
                            >
                                <DisclosureButton class="text-left">
                                    <div class="flex flex-row justify-start items-center space-x-4">
                                        <div class="bg-yellow-500 rounded-md px-2 py-1" v-if="question.is_optional">Optional</div>
                                        <div class="bg-green-500 rounded-md px-2 py-1 hover:bg-green-600 cursor-pointer" v-if="question.code_link">
                                            <a target="_blank" :href="question.code_link">Code</a>
                                        </div>
                                        <div class="font-semibold " v-if="question.variant_name">{{ question.variant_name }}</div>
                                    </div>
                                    <div class="text-left mt-2" v-html="question.body" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-4">
                                    <div class="p-2 bg-white rounded-md">
                                        <div v-if="question.answer">
                                            {{ question.answer }}
                                        </div>
                                        <div class="text-gray-700" v-else>
                                            No answer specified
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
import {useRoute} from "vue-router";

export default defineComponent({
    name: "Session",
    components: {Pattern, Header, Disclosure, DisclosurePanel, DisclosureButton},
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const patterns = Object.values(data).filter(function (pattern) {
            return pattern.session === id;
        });
        return {
            patterns,
            id
        }
    }
})
</script>

<style scoped>

</style>