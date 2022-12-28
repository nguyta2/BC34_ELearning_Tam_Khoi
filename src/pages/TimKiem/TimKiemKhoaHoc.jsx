import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRoute from "../../hooks/useRoute";
import { callApiCourseListBasedOnCourseType } from "../../redux/reducers/CoursesReducer";

export default function TimKiem() {
  const {
    params,
    navigate,
    searchParams: [searchParams, setSearchParams],
  } = useRoute();
  const dispatch = useDispatch();
  const courses = useSelector(
    (state) => state.CoursesReducer.coursesBasedOnCourseType
  );
  const keyWord = searchParams.has("tenkhoahoc")
    ? searchParams.get("tenkhoahoc")
    : "";

  // console.log(keyWord);
  const getApiCourseListBasedOnCourseType = async () => {
    try {
      dispatch(callApiCourseListBasedOnCourseType(keyWord));
    } catch (err) {
      console.log(err);
    }
  };

  const cancelCourseRegistration = () => {};
  useEffect(() => {
    getApiCourseListBasedOnCourseType();
  }, [keyWord]);

  console.log(courses);
  return (
    <div className="container mt-4">
      {courses ? (
        <div>
          <h1 className="text-xl font-bold">
            Tìm thấy {courses.length} khoá học {keyWord}
          </h1>
          <table className="w-full mt-4">
            <tbody>
              {courses &&
                courses.map((course, index) => {
                  return (
                    <tr key={index} className="border-t-2 border-slate-400">
                      <td className="w-64">
                        <img
                          style={{ height: "180px", width: "100%" }}
                          src={course.hinhAnh}
                          alt="#"
                        />
                      </td>
                      <td className="bg-slate-200 p-3 align-top">
                        <h1 className="text-2xl whitespace-nowrap">
                          {course.tenKhoaHoc}
                        </h1>
                        <p>{course.moTa}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-xl font-bold">
          Tìm thấy {courses.length} khoá học {keyWord}
        </h1>
      )}
    </div>
  );
}
