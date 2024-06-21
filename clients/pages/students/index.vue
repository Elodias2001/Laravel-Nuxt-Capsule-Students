<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Student List
          <nuxt-link to="/students/create" class="btn btn-success float-end"
            >Add Student</nuxt-link
          >
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
          <Loading :title="isLoadingTitle" />
        </div>
        <div v-else>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Course</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in students" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.course }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.created_at }}</td>
                <td>
                  <NuxtLink
                    :to="`/students/${item.id}`"
                    class="btn btn-info btn-sm mx-2"
                    >Edit</NuxtLink
                  >
                  <Button
                    type="button"
                    @click.prevent="deleteItem($event, item.id)"
                    class="btn btn-danger btn-sm mx-2"
                    >Delete</Button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStudentStore } from "~/stores/students";

// Créer une instance du magasin
const studentStore = useUserStore();

// Utiliser la fonction `onMounted` pour récupérer les étudiants lorsque le composant est monté
onMounted(async () => {
  await studentStore.getAllStudents();
});

// Accéder aux étudiants depuis le magasin
const students = computed(() => studentStore.items);
const isLoading = computed(() => studentStore.isLoading);
const isLoadingTitle = computed(() => studentStore.isLoadingTitle);
const errors = computed(() => studentStore.errors);
</script>
