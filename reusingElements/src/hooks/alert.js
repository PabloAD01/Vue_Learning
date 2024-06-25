import { ref } from 'vue';

function useAlert() {
  const alertIsVisible = ref(false);
  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }
  return [alertIsVisible, showAlert, hideAlert];
}
export default useAlert;
