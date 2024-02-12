import { computed, reactive } from "vue";
import { retrieveState, watchState } from "@sil/storage";

const balconyState = reactive<{
    windows: number,
    color: string,
    wall: string,
}>(await retrieveState({
    windows: 4,
    color: '#46a058',
    wall: '#ddd3b1',
}, 'balcony'))

watchState(balconyState, 'balcony');

export const useBalcony = () => {

    return {
        balcony: balconyState,
        windows: computed({
            get() {
                return balconyState.windows
            },
            set(value: number) {
                balconyState.windows = value
            }
        }),
        color: computed({
            get() {
                return balconyState.color
            },
            set(value: string) {
                balconyState.color = value
            }
        }), wall: computed({
            get() {
                return balconyState.wall
            },
            set(value: string) {
                balconyState.wall = value
            }
        })
    }
}