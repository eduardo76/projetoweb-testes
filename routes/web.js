const express = require("express");
const router = express.Router();

const NavegacaoController = require("../app/controllers/NavegacaoController");
const TasksController = require("../app/controllers/TasksController");
const UsersController = require("../app/controllers/UsersController");
const BlogPostsController = require("../app/controllers/BlogPostsController");

// Rotas das Tarefas
router.get('/tasks', TasksController.list)
router.get('/tasks/create', TasksController.create)
router.post('/tasks/save', TasksController.save)
router.post('/tasks/remove/:id', TasksController.remove)
router.get('/tasks/edit/:id', TasksController.edit)
router.post('/tasks/update', TasksController.update)
router.post('/tasks/update-status/:id', TasksController.updateStatus)

router.get('/users', UsersController.list)
router.get('/users/create', UsersController.create)
router.post('/users/save', UsersController.save)
router.post('/users/remove/:id', UsersController.remove)
router.get('/users/edit/:id', UsersController.edit)
router.post('/users/update', UsersController.update)
router.post('/users/update-status/:id', UsersController.updateStatus)

router.get('/', NavegacaoController.index);
router.get('/sobre', NavegacaoController.sobre);


router.get('/admin/blog-posts/list', BlogPostsController.listAll)
router.get('/client/blog-posts/list', BlogPostsController.listWithPublishedAtEqualsOrLessThanToday)
router.get('/blog-posts/create', BlogPostsController.create)
router.get('/blog-posts/show/:id', BlogPostsController.findById)
router.post('/blog-posts/save', BlogPostsController.save)
router.post('/blog-posts/remove/:id', BlogPostsController.remove)



router.get('*', function notFound(request, response) {
    return response.render("404");
});


module.exports = router;