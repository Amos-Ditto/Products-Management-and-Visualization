import { defineStore } from "pinia";


interface State {
    counter: number;
    showauth: boolean;
}

const conditionSate: State = {
    counter: 1,
    showauth: false
}

const conditionGetter = {
    'doubleCount' (state: State): number {
        return state.counter * 2;
    },
}

const conditionAction = {
    increment (state: State): void {
        state.counter ++;
    },
    toggleAuth (state: State, payload: boolean): void {
        state.showauth = payload;
    }
}

const useConditionStore = defineStore({
  id: "conditions",
  state: () => (conditionSate),
  getters: conditionGetter,
  actions: conditionAction,
});

export default useConditionStore;