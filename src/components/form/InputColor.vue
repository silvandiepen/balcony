<template>
    <div :class="bemm()">
        <label :class="bemm('label')" v-if="label">
            {{ label }}
        </label>
        <div :class="bemm('control-container')">
            <input :class="[bemm('control'), bemm('control', 'color')]" :placeholder="placeholder" type="color"
                v-model="value" />
            <input :class="[bemm('control'), bemm('control', 'value')]" :placeholder="placeholder" type="text"
                v-model="value" />
        </div>

        <div :class="bemm('suggestions')" v-if="suggestions">
            <ul :class="bemm('suggestion-list')">
                <li @click="value = color" v-for="color in suggestions" :class="[bemm('suggestion-item'), bemm('color')]"
                    :style="`--color: ${color}`"></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { useBemm } from 'bemm';
const bemm = useBemm('input-color');

defineProps({
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    suggestions: {
        type: Array as PropType<string[]>,
        default: () => []
    }
})
const value = defineModel()
</script>


<style lang="scss" src="./Form.scss"></style>