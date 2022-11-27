//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  courses: [],
  coursesType: [],
};

const CoursesReducer = createSlice({
  name: "CoursesReducer",
  initialState,
  reducers: {
    getCourses: (state, { type, payload }) => {
      state.courses = payload;
    },
    getCoursesType: (state, { type, payload }) => {
      state.coursesType = payload;
      state.coursesType = state.coursesType.map((coursesType) => {
        coursesType.label = coursesType.tenDanhMuc;
        coursesType.key = coursesType.maDanhMuc;
        delete coursesType.maDanhMuc;
        delete coursesType.tenDanhMuc;
        return coursesType;
      });
    },
  },
});

//quản lý actions
export const { getCourses, getCoursesType } = CoursesReducer.actions;

export default CoursesReducer.reducer;

export const getApiSessionsType = async (dispatch) => {
  try {
    const apiSessionType = await axios({
      method: "GET",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      headers: {
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
      },
    });
    console.log(apiSessionType.data);
    dispatch(getCoursesType(apiSessionType.data));
  } catch (err) {
    console.log(err);
  }
};

export const getApiSessionsList = async (dispatch) => {
  try {
    const apiSessionList = await axios({
      method: "GET",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      headers: {
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
      },
    });
    dispatch(getCourses(apiSessionList.data));
  } catch (err) {
    console.log(err);
  }
};

//setup redux thunk

//rxreducer
// const initialState = 10;

// export const DemoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "CHANGE_NUMBER": {
//       state += payload;
//       return state;
//     }
//     default:
//       return state
//   }
// }
