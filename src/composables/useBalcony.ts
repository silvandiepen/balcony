import { computed, reactive } from "vue";


const balconyState = reactive<{
    windows: number,
    color: string,
    wall: string,
}>({
    windows: 4,
    color: '#46a058',
    wall: '#ddd3b1',
})

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
        }),  wall: computed({
            get() {
                return balconyState.wall
            },
            set(value: string) {
                balconyState.wall = value
            }
        })
    }
}