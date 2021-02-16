const adminRoot = 'admin'
const contact = 'contato'
const login = 'login'
const register = 'cadastro'
const about = 'sobre'
const publishers = '/editoras'
const authors = '/autores'
const books = '/livros'

export const routes = {
  contact,
  login,
  register,
  about,
  admin: {
    root: adminRoot
  },
  publisher: {
    root: `${adminRoot}${publishers}`
  },
  authors: {
    root: `${adminRoot}${authors}`
  },
  books: {
    root: `${adminRoot}${books}`
  }
}
