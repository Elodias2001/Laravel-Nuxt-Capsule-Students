import Api from "../components/apis/Api"
import { ref } from 'vue'
import useAlertNotification from './notifications/useNotification'

export default function useStudentService() {
  const { successMsg, errorMsg } = useAlertNotification()
  const items = ref([])
  const item = ref([])
  const errors = ref([])
  const isLoading = ref(true);
  const isLoadingTitle = ref('Loading');

  const getItems = async () => {
    isLoading.value = true
    await Api.get('/students')
      .then(response => {
        if (response.data.success === true){
            isLoading.value = false
            items.value = response.data.data.students  
        }
      })
      .catch(() => {
        //
      })
  }

  const storeItem = async data => {
    isLoading.value = true
    isLoadingTitle.value = 'Saving'
    errors.value = ''
    await Api.post('/students', data)
      .then(response=>{
        if(response.data.success === true){
            isLoading.value = false
            isLoadingTitle.value = 'Loading'
            errors.value = []
            successMsg(response.data.message)
        }
      })
      .catch(error=>{
        if (error.response.status === 403) {
          errorMsg(error.response.data.data.failed)
      
        } else if(error.response.status === 422){
          errors.value = error.response.data.errors
        }
        else {
          errorMsg('Oups! Erreur', error.response.data.message)
          errors.value = error.response.data.data
        }
        isLoading.value = false
      })
  }

  const getItem = async id => {
    isLoading.value = true
    let response = await Api.get(`/students/${id}`)
    if(response.data.success == true)
    {
      isLoading.value = false
      item.value = response.data.data
    }
  }

  const updateItem = async data => {    
    errors.value = ''
    isLoading.value = true
    isLoadingTitle.value = 'Updating'
    await Api.put(`/students/${data.id}`, data)
      .then(response => {
        if (response.data.success === true) {
          isLoading.value = false
          isLoadingTitle.value = 'Loading'
          errors.value = []
          successMsg(response.data.message)
        }
      })
      .catch(error => {
        if (error.response.status === 403) {
          errorMsg('403 Forbidden', "Vous n'êtes pas autorisé(e) à effectuer cette action")
        } else if (error.response.status === 422) {
          errors.value = error.response.data.errors
        } else {
          errorMsg('Oups! Erreur', error.response.data.message)
          errors.value = error.response.data.data
        }
        isLoading.value = false;
      })
  }

  const destroyItem = async id => {
    await Api.delete('/students/' + id)
      .then(response => {
        if (response.data.success === true) {
          successMsg(response.data.message)
        }
      })
      .catch(error => {
        if (error.response.status === 403) {
          errorMsg(error.response.data.data.failed, "Vous n'êtes pas autorisé(e) à effectuer cette action")
        } else {
          errorMsg('Oups! Erreur', error.response.data.message)
          errors.value = error.response.data.errors
        }
        isLoading.value = false
      })
  }

 
  return {
    items, item, getItems, errors, storeItem,destroyItem, updateItem, getItem, isLoading, isLoadingTitle,
  }
}
