const TodosPage = () => import('@/modules/Todos/Todos.vue')

export const publicRoutes = [
  {
    path: '/',
    name: "Todo",
    component: TodosPage
  }
]