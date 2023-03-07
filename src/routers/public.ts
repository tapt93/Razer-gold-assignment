const TodoPage = () => import('@/pages/todo/TodoPage.vue')

export const publicRoutes = [
  {
    path: '/',
    name: "Todo",
    component: TodoPage
  }
]