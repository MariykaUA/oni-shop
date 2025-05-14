import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const searchQuery = ref('')

export function useSearch() {
  const route = useRoute()

  watch(
    () => route.query.search,
    (newSearch) => {
      searchQuery.value = typeof newSearch === 'string' ? newSearch : ''
    },
    { immediate: true }
  )

  const setSearch = (value: string) => {
    searchQuery.value = value
  }

  return {
    searchQuery,
    setSearch,
  }
}
