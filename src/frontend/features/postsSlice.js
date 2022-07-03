import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  postsStatus: "idle",
  error: null,
  singlePost: null,
  singlePostStatus: "idle",
  bookmarks: [],
  bookmarksStatus: "idle",
};

const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await axios.get("/api/posts");
  return response.data.posts;
});

const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async (postId) => {
    const response = await axios.get(`/api/posts/${postId}`);
    return response.data.post;
  }
);

const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ postData, token }) => {
    const response = await axios.post(
      "/api/posts",
      { postData },
      { headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId, token }) => {
    const response = await axios.delete(`/api/posts/${postId}`, {
      Headers: { authorization: token },
    });
    return response.data.posts;
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postId, postData, token }) => {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }) => {
    const response = await axios.post(`/api/posts/like/${postId}`, {
      Headers: { authorization: token },
    });
    return response.data.posts;
  }
);

const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }) => {
    const response = await axios.post(`/api/posts/dislike/${postId}`, {
      Headers: { authorization: token },
    });
    return response.data.posts;
  }
);

const getAllComments = createAsyncThunk(
  "posts/getAllComments",
  async (postId) => {
    const response = await axios.get(`/api/comments/${postId}`);
    return response.data.posts;
  }
);

const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }) => {
    console.log(1);
    const response = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      { headers: { authorization: token } }
    );
    console.log(response.data);
    return response.data;
  }
);

const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, commentData, token }) => {
    const response = await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
      { commentData },
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token }) => {
    const response = await axios.delete(
      `/api/comments/delete/${postId}/${commentId}`,
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const upvoteComment = createAsyncThunk(
  "posts/upvoteComment",
  async ({ postId, commentId, token }) => {
    const response = await axios.post(
      `/api/comments/upvote/${postId}/${commentId}`,
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const downvoteComment = createAsyncThunk(
  "posts/downvoteComment",
  async ({ postId, commentId, token }) => {
    const response = await axios.post(
      `/api/comments/downvote/${postId}/${commentId}`,
      { Headers: { authorization: token } }
    );
    return response.data.posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.postsStatus = "loading";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.postsStatus = "failed";
      state.error = action.error;
    },

    [getSinglePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.singlePostStatus = "failed";
      state.error = action.error;
      console.log(state.error);
    },

    [addPost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [addPost.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
      console.log(state.error);
    },

    [deletePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [editPost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [likePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [likePost.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [dislikePost.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [dislikePost.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [getAllComments.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [getAllComments.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [addComment.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [addComment.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
      console.log(state.error);
    },

    [editComment.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [editComment.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [deleteComment.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [deleteComment.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [upvoteComment.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [upvoteComment.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },

    [downvoteComment.fulfilled]: (state, action) => {
      state.postsStatus = "success";
      state.posts = action.payload;
    },
    [downvoteComment.rejected]: (state, action) => {
      state.postsStatus = "failure";
      state.error = action.error;
    },
  },
});

export {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  addComment,
  editComment,
  deleteComment,
  upvoteComment,
  downvoteComment,
};
export const postsReducer = postsSlice.reducer;
