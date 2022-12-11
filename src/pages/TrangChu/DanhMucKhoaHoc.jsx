import React, { useEffect } from "react";
import CourseItem from "../../components/CourseItem/CourseItem";
import useRoute from "../../hooks/useRoute";
import { useDispatch, useSelector } from "react-redux";
import { getApiSessionListBasedOnSessionType } from "../../redux/reducers/CoursesReducer";

export default function DanhMucKhoaHoc() {
  const item = {};
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.CoursesReducer.coursesBasedOnCourseType
  );

  const {
    params,
    navigate,
    searchParams: [searchParams, setSearchParams],
  } = useRoute();
  const keyWord = searchParams.has("word") ? searchParams.get("word") : "";

  const getApiCourses = async () => {
    try {
      dispatch(getApiSessionListBasedOnSessionType(keyWord));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiCourses();
  }, [keyWord]);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 mt-4">
        <div className="container">
          <h1 className="py-4 text-white text-2xl">LẬP TRÌNH FRONT-END</h1>
        </div>
      </div>

      <div className="container">
        <h1 className="text-xl">Các khoá học phổ biến</h1>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((item, index) => {
            return (
              <div key={index}>
                <CourseItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
