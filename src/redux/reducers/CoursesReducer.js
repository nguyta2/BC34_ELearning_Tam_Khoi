//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allCourses: [],
  coursesType: [],
  coursesBasedOnCourseType: [],
};

const CoursesReducer = createSlice({
  name: "CoursesReducer",
  initialState,
  reducers: {
    getAllCourses: (state, { type, payload }) => {
      state.allCourses = payload;
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
    getCoursesBasedOnCourseType: (state, { type, payload }) => {
      state.coursesBasedOnCourseType = payload;
    },
    setCoursesBasedOnCourseType: (state, { type, payload }) => {
      state.coursesBasedOnCourseType = payload;
    },
  },
});

//quản lý actions
export const {
  getAllCourses,
  getCoursesType,
  getCoursesBasedOnCourseType,
  setCoursesBasedOnCourseType,
} = CoursesReducer.actions;

export default CoursesReducer.reducer;

// QuanLyKhoaHoc/LayDanhMucKhoaHoc
export const callApiCourseType = async (dispatch) => {
  try {
    const apiSessionType = await axios({
      method: "GET",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      headers: {
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
      },
    });

    dispatch(getCoursesType(apiSessionType.data));
  } catch (err) {
    console.log(err);
  }
};

// QuanLyKhoaHoc/LayDanhSachKhoaHoc
export const callApiAllCourses = async (dispatch) => {
  try {
    const apiSessionList = await axios({
      method: "GET",
      url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
      headers: {
        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
      },
    });
    dispatch(getAllCourses(apiSessionList.data));
  } catch (err) {
    console.log(err);
  }
};

// QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc
export const callApiCourseListBasedOnCourseType =
  (keyword) => async (dispatch) => {
    try {
      const apiSessionListBasedOnSessionType = await axios({
        method: "GET",
        url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${keyword}&MaNhom=GP01`,
        headers: {
          TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNCIsIkhldEhhblN0cmluZyI6IjI3LzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MjU1MzYwMDAwMCIsIm5iZiI6MTY1MzU4NDQwMCwiZXhwIjoxNjgyNzAxMjAwfQ.WXYIKeb4x0tXpYflgrnKFbivOnuUdLmKcgl7Xr0MD3I`,
        },
      });
      dispatch(
        getCoursesBasedOnCourseType(apiSessionListBasedOnSessionType.data)
      );
    } catch (err) {
      dispatch(setCoursesBasedOnCourseType([]));
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
