<template>
     <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          EDIT STUDENT
          <nuxt-link to="/students" class="btn btn-danger float-end">Back</nuxt-link>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
            <Loading :title="isLoadingTitle" />
        </div>
        <div v-else>
            <form @submit.prevent="updateStudent">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="item.name" class="form-control" id="name" placeholder="Elodias ADIMOU"/>
                  <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="course" class="form-label">Course</label>
                  <input type="text" v-model="item.course" class="form-control" id="course" placeholder="History"/>
                  <span class="text-danger" v-if="errors.course">{{ errors.course[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="item.email" class="form-control" id="email" placeholder="name@gmail.com"/>
                  <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Téléphone</label>
                  <input type="number" v-model="item.phone" class="form-control" id="phone" placeholder="67 77 01 15"/>
                  <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import useStudentService from '~/services/studentService';
import { useRoute, useRouter } from 'vue-router'
export default {
  name: "StudentEdit",
  setup(props) {
    const route = useRoute()
    const { getItem, item, updateItem, isLoading, isLoadingTitle, errors } = useStudentService();
    const item_id = ref('');

    const updateStudent = async () =>{
        await updateItem({...item.value});
    }

    onMounted(async () => {
        isLoading.value = false // Par défaut le loading est false sur cette page
        item_id.value = route.params.id //  On récupère l'id passer au travers de l'url
        await getItem(item_id.value); // On passe l'id a cette fonction pour recuperer toutes les infos
    });

    return {
        item,
        isLoading,
        isLoadingTitle,
        errors,
        updateStudent,
    }
  },
};
</script>

<style lang="scss" scoped>

</style>