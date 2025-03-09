import { h, render, Teleport, Transition, ref, type App } from 'vue'
import AppToast from '@/components/app/AppToast.vue'

const ToastPlugin = {
  install(app: App) {
    const showToast = (options: {
      message: string
      variant?: 'success' | 'error' | 'info'
      duration?: number
    }) => {
      const duration = options.duration || 3000
      const isShowToast = ref(false)

      const toastNode = h(Teleport, { to: 'body' }, [
        h(
          Transition,
          {
            name: 'slide-toast',
            onVnodeMounted: () => {
              isShowToast.value = true
            },
            onAfterLeave: () => {
              render(null, document.body)
            },
          },
          () =>
            isShowToast.value &&
            h(AppToast, {
              message: options.message,
              variant: options.variant || 'success',
            }),
        ),
      ])

      render(toastNode, document.body)

      setTimeout(() => {
        isShowToast.value = false
      }, duration)
    }

    app.config.globalProperties.$toast = showToast

    app.provide('toast', showToast)
  },
}

export default ToastPlugin
