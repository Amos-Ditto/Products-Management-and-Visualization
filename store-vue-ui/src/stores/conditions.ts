import { defineStore } from "pinia";


interface State {
    showauth: boolean;
}

const conditionSate: State = {
    showauth: false
}

const conditionGetter = {
    // 'doubleCount' (state: State): number {
    //     return state.counter * 2;
    // },
}

const conditionAction = {
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