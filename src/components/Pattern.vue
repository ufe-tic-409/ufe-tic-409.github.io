<template>
    <div class="space-y-5">
        <H3><slot name="title" /></H3>
        <div>
            <H4>Intent</H4>
            <blockquote>
                <slot name="intent" />
            </blockquote>
        </div>
        <div>
            <H4>Diagram</H4>
            <slot name="diagrams" />
        </div>
        <div>
            <H4>Example</H4>
            <slot name="example" />
            <StartCodeLink>
                <slot name="start-code-link" />
            </StartCodeLink>
            <H5>Questions</H5>
            <slot name="questions" />
        </div>
    </div>
</template>

<script lang="ts">
import H3 from "./H3.vue";
import {defineComponent} from "vue";
import H4 from "./H4.vue";
import StartCodeLink from "./StartCodeLink.vue";
import H5 from "./H5.vue";

export default defineComponent({
    name: "Pattern",
    components: {H5, StartCodeLink, H4, H3}
})
</script>

<style scoped>

</style>