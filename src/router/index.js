import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import AllPosts from '@/views/AllPosts';
import AddPost from '@/views/AddPost';
import PostItem from '@/views/PostItem';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/all-posts',
    name: 'Posts',
    component: Home,
  },
  {
    path: '/add-post',
    name: 'Add',
    component: AddPost,
  },
  {
    path: '/posts/:id',
    name: 'PostItem',
    component: PostItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
