import { createToaster } from "@meforma/vue-toaster"

const toaster = createToaster({ /* options */ })

export default function useAlertNotification() {
  const successMsg = msg => {
    toaster.success(msg,{
      position: 'top-right'
    })
  }

  const errorMsg = msg => {
    toaster.error(msg,{
      position: 'top-right'
    })
  }

  return {
    successMsg,
    errorMsg,
  }
}
