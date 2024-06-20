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
          <Loading :title="isLoadingTitle"/>
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
              <tr v-for="(item, index) in items" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.course }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.created_at }}</td>
                <td>
                  <NuxtLink :to="`/students/${item.id}`" class="btn btn-info btn-sm mx-2">Edit</NuxtLink>
                  <Button type="button" @click.prevent="deleteItem($event, item.id)" class="btn btn-danger btn-sm mx-2">Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useStudentService from '~/services/studentService';
export default {
  name: "StudentList",
  setup(props) {
    const { items, getItems, isLoading, destroyItem, isLoadingTitle, } = useStudentService();

    const deleteItem = async (event, item_id) =>{
      if (confirm('Are you sure, you want delete this data ?')) {
          event.target.innerText = 'Deleting'
          await destroyItem(item_id)
          event.target.innerText = 'Delete';
          await getItems()
      }
    }
    
    onMounted(async () => {
      await getItems()
    });

    return {
      items,
      isLoading,
      isLoadingTitle,
      deleteItem,
    }
  },
};
</script>

<style scoped></style>
