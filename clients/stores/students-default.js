// stores/students.js
import { useFetch } from "nuxt/app";
import { defineStore } from "pinia";

export const useUserStore = defineStore("students", {
  state: () => ({
    students: [],
  }),
  actions: {
    // Récupérer tous les étudiants
    async getAllStudents() {
      try {
        const { data, error } = await useFetch(
          "http://localhost:8000/api/students"
        );

        if (error.value) {
          throw new Error("Failed to fetch students");
        }

        this.students = data.value.data.students;
        return this.students;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    // Ajouter un étudiant
    async addStudent(student) {
      try {
        const { data, error } = await useFetch(
          "http://localhost:8000/api/students",
          {
            method: "POST",
            body: JSON.stringify(student),
          }
        );

        if (error.value) {
          throw new Error("Failed to add student");
        }

        this.students.push(data.value.data.student);
      } catch (error) {
        console.error(error);
      }
    },
    // Modifier un étudiant
    async updateStudent(updatedStudent) {
      try {
        const { data, error } = await useFetch(
          `http://localhost:8000/api/students/${updatedStudent.id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedStudent),
          }
        );

        if (error.value) {
          throw new Error("Failed to update student");
        }

        const index = this.students.findIndex(
          (student) => student.id === updatedStudent.id
        );
        if (index !== -1) {
          this.students.splice(index, 1, data.value.data.student);
        }
      } catch (error) {
        console.error(error);
      }
    },
    // Voir un seul étudiant
    async getStudent(id) {
      try {
        const { data, error } = await useFetch(
          `http://localhost:8000/api/students/${id}`
        );

        if (error.value) {
          throw new Error("Failed to fetch student");
        }

        return data.value.data.student;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    // Supprimer un étudiant
    async removeStudent(id) {
      try {
        const { error } = await useFetch(
          `http://localhost:8000/api/students/${id}`,
          {
            method: "DELETE",
          }
        );

        if (error.value) {
          throw new Error("Failed to delete student");
        }

        this.students = this.students.filter((student) => student.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
