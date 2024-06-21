// stores/students.js
import Api from "@/utils/api";
import { defineStore } from "pinia";

export const useStudentStore = defineStore("students", {
  state: () => ({
    items: [],
    errors: [],
    isLoading: true,
    isLoadingTitle: "Loading",
  }),
  actions: {
    // Récupérer tous les étudiants
    async getAllStudents() {
      this.isLoading = true;
      try {
        const data = await Api.get("/students");
        this.isLoading = false;
        this.items = data.data.students;
        return this.items;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
});
