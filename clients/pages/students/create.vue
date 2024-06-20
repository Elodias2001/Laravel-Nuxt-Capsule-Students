<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          ADD STUDENT
          <nuxt-link to="/students" class="btn btn-danger float-end">Back</nuxt-link>
        </h4>
      </div>
      <div class="card-body">
        <div v-if="isLoading">
            <Loading :title="isLoadingTitle" />
        </div>
        <div v-else>
            <form @submit.prevent="storeStudent">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Elodias ADIMOU"/>
                  <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="course" class="form-label">Course</label>
                  <input type="text" v-model="form.course" class="form-control" id="course" placeholder="History"/>
                  <span class="text-danger" v-if="errors.course">{{ errors.course[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="form.email" class="form-control" id="email" placeholder="name@gmail.com"/>
                  <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Téléphone</label>
                  <input type="number" v-model="form.phone" class="form-control" id="phone" placeholder="67 77 01 15"/>
                  <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import useStudentService from '~/services/studentService';
export default {
  name: "StudentCreate",
  setup(props) {
    const { storeItem, isLoading, isLoadingTitle, errors } = useStudentService();

    const form = reactive({
        name: '',
        course: '',
        email: '',
        phone: '',
    });
    
    const resetForm = () =>{
      form.name = ''
      form.course = ''
      form.email = ''
      form.phone = ''
    }

    const storeStudent = async () =>{
      await storeItem({...form});
      resetForm();
    } 

    onMounted(() => {
      isLoading.value = false
    });

    return {
      form,
      errors,
      isLoading,
      isLoadingTitle,
      storeStudent,
    }
  },
};
</script>

<style lang="scss" scoped></style>
