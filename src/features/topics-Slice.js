import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      topic:
        "The Importance of Establishing a strong Online presence for Small Businesses",
      category: "custom",
      keywords: ["online presence", "small businesses", " branding"],
    },
    {
        topic:
          "The Importance of Establishing a strong Online presence for Small Businesses",
        category: "custom",
        keywords: ["online presence", "small businesses", " branding"],
      },
      {
        topic:
          "The Importance of Establishing a strong Online presence for Small Businesses",
        category: "custom",
        keywords: ["online presence", "small businesses", " branding"],
      },
  ],
};

const topicSlice = createSlice({
  name: "topic",
  initialState: initialState,
  reducers: {
    addTopics: (state, action) => {
      state.blogs = [action.payload, ...state.blogs];
    },
  },
});

export const { addTopics } = topicSlice.actions;
export default topicSlice.reducer;
