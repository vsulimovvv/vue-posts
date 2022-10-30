import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    posts: [],
    newPost: {
      title: '',
      text: '',
    },

    // newPost: {},
  },

  getters: {
    posts(state) {
      return state.posts;
    },

    title(state) {
      return state.title;
    },

    text(state) {
      return state.text;
    },

    getId: (state) => (id) => {
      return state.posts.find((item) => item.id === id);
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },

    // setDataNewPost(state, title, text) {
    //   state.title = title;
    //   state.text = text;
    // },

    // createNewPost(state, post) {
    //   state.title = title;
    //   state.text = text;
    // },

    createPost(state) {
      if (state.newPost.title && state.newPost.text) {
        let post = {
          title: state.newPost.title,
          text: state.newPost.text,
          id: Date.now(),
        };
        state.posts.unshift(post);

        alert('Post successfully created!');

        state.newPost.title = '';
        state.newPost.text = '';

        return this.$router.push('/');
      } else {
        alert('Enter fields!');
      }
    },
  },

  actions: {
    async getPostsFromApi({ commit }) {
      await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          commit('setPosts', res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
  },
});
