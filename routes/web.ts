import { route } from '../.stacks/core/router/src/index.ts'
import { request } from '../.stacks/core/router/src/request.ts'

route.group(() => {
  route.get('/get/:id', getUsers)
  route.get('/delete', getBlogs)
}).middleware('auth').prefix('/users')

route.group(() => {
  route.get('/get/:id', getUsers)
  route.get('/delete', getBlogs)
}, {
  middleware: ['auth'],
  prefix: '/users'
})

// TODO: Add a way to register a view.
route.redirect('/user', '/welcome')
route.get('/welcome', 'hello world')
route.get('/users', 'hello users')

function getUsers() {
  return request.getParams('id')
}

function getBlogs() {
  return 'hello blogs function'
}
