<template>
    <div :class="bemm()" :style="`--balcony-color: ${color}`">
        <div :class="bemm('roof')">
            <div :class="bemm('roof-top')"></div>
            <div :class="bemm('roof-bottom')"></div>
        </div>
        <div :class="bemm('windows')">

            <div :class="bemm('window')" v-for="(_, idw) in windows" :key="idw">
                <div :class="[bemm('frame'), bemm('frame', 'small')]">
                    <div :class="bemm('glass')"></div>
                </div>

                <div :class="[bemm('frame'), bemm('frame', 'large')]">
                    <div :class="bemm('glass')"></div>
                </div>
            </div>

        </div>
        <div :class="bemm('separator')">
            <div :class="bemm('separator-top')"></div>
            <div :class="bemm('separator-bottom')"></div>
        </div>
        <div :class="bemm('panels')">
            <div :class="bemm('panel-frame')" v-for="(_, idp) in windows" :key="idp">
                <div :class="bemm('panel')"></div>
            </div>
        </div>
        <div :class="bemm('bottom')">
            <div :class="bemm('bottom-top')"></div>
            <div :class="bemm('bottom-bottom')"></div>
        </div>
        <div :class="bemm('footer')">
            <div :class="bemm('block')">
                <div :class="bemm('block-top')"></div>
                <div :class="bemm('block-bottom')"></div>
            </div>
            <div :class="bemm('holders')">
                <div :class="bemm('holder')" v-for="(_, idh) in holders" :key="idh">
                    <div :class="bemm('holder-block')"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useBemm } from 'bemm';
const bemm = useBemm('balcony');

import { useBalcony } from '../composables/useBalcony';

const { windows, color } = useBalcony()

const holders = computed(() => {
    if (windows.value == 1) return 1;
    if (windows.value == 2) return 2;
    return windows.value - 1;
});

</script>

<style lang="scss">
// .windows-move, /* apply transition to moving elements */
// .windows-enter-active,
// .windows-leave-active {
//   transition: all 0.5s ease;
// }

// .windows-enter-from,
// .windows-leave-to {
//   opacity: 0;
//   transform: scale(0);
// }

// /* ensure leaving items are taken out of layout flow so that moving
//    animations can be calculated correctly. */
// .windows-leave-active {
//   position: absolute;
// }

.balcony {


    --dark-rgb: 0, 0, 0;
    --light-rgb: 255, 255, 255;
    --dark: rgba(var(--dark-rgb), 0.25);
    --dark-half: rgba(var(--dark-rgb), 0.125);
    --light: rgba(var(--light-rgb), 0.25);

    --limestone: rgba(236, 221, 166, 1);

    --shadow-size: .075em;
    --shadow-size-minus: calc(var(--shadow-size) * -1);

    font-size: 1.5vmin;

    &__roof {
        width: calc(100% + 4em);
        margin-left: -2em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &-top {
            width: 100%;
            height: 2em;
            background-color: var(--balcony-color);
            border-radius: var(--shadow-size);
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.05));
        }

        &-bottom {
            height: 1em;
            width: calc(100% - 2em);
            border-radius: 0 0 var(--shadow-size) var(--shadow-size);
            background-color: var(--balcony-color);
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
        }
    }

    &__windows {
        display: flex;
        justify-content: space-between;
        padding: .5em;
        gap: .5em;
        background-color: var(--balcony-color);
        // background-image: linear-gradient(to bottom, var(--dark) transparent 1em), linear-gradient(to bottom, var(--dark) transparent 10%), linear-gradient(to right bottom, var(--dark), var(--light), var(--dark));
        background-image: linear-gradient(to bottom, var(--dark-half), transparent 1em), linear-gradient(to top, var(--dark-half), transparent 1em), linear-gradient(to right bottom, var(--dark-half), transparent);

    }

    &__window {
        display: flex;
        flex-direction: column;
        gap: .5em;

    }

    &__frame {
        padding: 1em;
        width: 6em;
        box-shadow: var(--shadow-size-minus) var(--shadow-size-minus) 0 var(--shadow-size) var(--dark) inset, var(--shadow-size) var(--shadow-size) 0 var(--shadow-size) var(--light) inset;


        &--small {
            height: 3em;
        }

        &--large {
            height: 10em;
        }

    }

    &__glass {
        width: 100%;
        height: 100%;
        background-color: var(--wall);
        position: relative;
        box-shadow: var(--shadow-size-minus) var(--shadow-size-minus) 0 var(--shadow-size) var(--dark), var(--shadow-size) var(--shadow-size) 0 var(--shadow-size) var(--light);

        &::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background-image: linear-gradient(-65deg, var(--dark) 0%, var(--light) 50%, var(--dark) 100%);

        }
    }


    &__separator {
        width: calc(100% + 2em);
        margin-left: -1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &-top {
            width: 100%;
            height: .5em;
            background-color: var(--balcony-color);
            border-radius: 0 0 .25em .25em;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.05));

        }

        &-bottom {
            height: .5em;
            width: calc(100% - 1em);
            border-radius: 0 0 .25em .25em;
            background-color: var(--balcony-color);
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1));
        }
    }

    &__panels {
        display: flex;
        justify-content: space-between;
        padding: .5em;
        gap: .5em;
        background-color: var(--balcony-color);
        background-image: linear-gradient(to bottom, var(--dark-half), transparent 1em), linear-gradient(to top, var(--dark-half), transparent 1em), linear-gradient(to right bottom, var(--dark-half), transparent);
    }


    &__panel-frame {
        padding: 1em;
        width: 6em;
        height: 5em;
        box-shadow: var(--shadow-size-minus) var(--shadow-size-minus) 0 var(--shadow-size) var(--light) inset, var(--shadow-size) var(--shadow-size) 0 var(--shadow-size) var(--dark) inset;
        background-image: linear-gradient(to right bottom, var(--dark-half), transparent);
    }

    &__panel {
        width: 100%;
        height: 100%;
        box-shadow: var(--shadow-size-minus) var(--shadow-size-minus) 0 var(--shadow-size) var(--dark) inset, var(--shadow-size) var(--shadow-size) 0 var(--shadow-size) var(--light) inset;

    }



    &__bottom {
        width: calc(100% + 1em);
        margin-left: -.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 10;

        &-top {
            height: .5em;
            width: calc(100% - .5em);
            border-radius: 0 0 .25em .25em;

            background-color: var(--balcony-color);
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.2));


        }

        &-bottom {
            width: 100%;
            height: 1.5em;
            background-color: var(--balcony-color);
            border-radius: 0 0 .25em .25em;
            background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
        }


    }

    &__footer {
        display: flex;
        flex-direction: column;
        width: calc(100% + 1em);
        margin-left: -.5em;
        position: relative;
        z-index: 10;
    }

    &__block {
        width: 100%;
        border-radius: 0 0 .25em .25em;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 12;
        position: relative;

        &-top {

            width: 100%;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1));

            height: 1em;
            background-color: var(--limestone);
            position: relative;
            z-index: 1;
        }

        &-bottom {

            width: calc(100% - 1em);
            height: 1em;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1));
            background-color: var(--limestone);
            position: relative;
            z-index: 1;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--dark-wall);
            transform: translateY(1em) scaleX(.85);
            z-index: -2;
            filter: blur(.25em);
            border-radius: 0 0 2em 2em;
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 100%;
            width: calc(100% + 2em);
            margin-left: -1em;
            height: 4em;
            background-image: radial-gradient(ellipse at 50% 0%, var(--dark-wall) 0%, rgba(0, 0, 0, 0) 66.66%);
            transform: scaleX(.85);
            z-index: -2;
        }


    }


    &__holder {
        position: relative;
        z-index: 12;

        &-block {
            width: 2em;
            height: 4em;
            background-color: var(--balcony-color);
            border-radius: var(--shadow-size);
            background-color: var(--limestone);
            background-image: linear-gradient(to bottom, var(--light), transparent), linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, var(--dark), transparent, var(--light));
            background-size: 100% 1em, 100% 100%, 100% calc(100% - 2em);
            background-position: bottom, 0 0, 0 calc(100% - 1em);
            background-repeat: no-repeat;
            position: relative;
            z-index: 10;
        }

        &::before,
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: var(--dark-wall);
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            opacity: .5;
            z-index: -1;
            filter: blur(.25em);
        }

        &::before {
            transform: skewX(15deg) translateX(-.75em) translateY(-0em);
        }

        &::after {
            transform: skewX(-15deg) translateX(.75em) translateY(-0em);
        }
    }

    &__holders {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>