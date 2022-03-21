import { defineStore } from "pinia"

const useTest = defineStore("test", {
  state: () => {
    return { foo: "bar" }
  },
})

export default useTest
