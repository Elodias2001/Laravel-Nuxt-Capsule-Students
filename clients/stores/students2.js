// stores/students.js
import { fetchApi } from "@/utils/api";
import { defineStore } from "pinia";

export const useUserStore = defineStore("students", {
  state: () => ({
    students: [],
  }),
  actions: {
    // Récupérer tous les étudiants
    async getAllStudents() {
      try {
        const data = await fetchApi("/students");
        this.students = data.data.students;
        return this.students;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    // Ajouter un étudiant
    async addStudent(student) {
      try {
        const data = await fetchApi("/students", {
          method: "POST",
          body: JSON.stringify(student),
        });
        this.students.push(data.data.student);
      } catch (error) {
        console.error(error);
      }
    },
    // Modifier un étudiant
    async updateStudent(updatedStudent) {
      try {
        const data = await fetchApi(`/students/${updatedStudent.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedStudent),
        });
        const index = this.students.findIndex(
          (student) => student.id === updatedStudent.id
        );
        if (index !== -1) {
          this.students.splice(index, 1, data.data.student);
        }
      } catch (error) {
        console.error(error);
      }
    },
    // Voir un seul étudiant
    async getStudent(id) {
      try {
        const data = await fetchApi(`/students/${id}`);
        return data.data.student;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    // Supprimer un étudiant
    async removeStudent(id) {
      try {
        await fetchApi(`/students/${id}`, {
          method: "DELETE",
        });
        this.students = this.students.filter((student) => student.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
