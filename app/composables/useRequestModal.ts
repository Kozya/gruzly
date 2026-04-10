type RequestModalSource = 'header' | 'services' | 'fleet' | 'other'

type RequestModalState = {
  isOpen: boolean
  source: RequestModalSource
}

export function useRequestModal() {
  const state = useState<RequestModalState>('request-modal', () => ({
    isOpen: false,
    source: 'other'
  }))

  function openRequestModal(source: RequestModalSource = 'other') {
    state.value.isOpen = true
    state.value.source = source
  }

  function closeRequestModal() {
    state.value.isOpen = false
  }

  return {
    state,
    openRequestModal,
    closeRequestModal
  }
}
