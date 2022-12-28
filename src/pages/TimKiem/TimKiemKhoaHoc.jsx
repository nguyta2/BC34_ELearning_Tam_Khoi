import React from "react";
import { useState } from "react";
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
  const coursesFromRedux = useSelector(
    (state) => state.CoursesReducer.coursesBasedOnCourseType
  );
  const keyWord = searchParams.has("tenkhoahoc")
    ? searchParams.get("tenkhoahoc")
    : "";

  const [courses, setCourses] = useState([]);

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

  console.log(coursesFromRedux);
  return (
    <div className="container mt-4">
      {coursesFromRedux ? (
        <div>
          <h1 className="text-xl font-bold">
            Tìm thấy {coursesFromRedux.length} khoá học {keyWord}
          </h1>
          <table className="w-full mt-4">
            <tbody>
              {coursesFromRedux &&
                coursesFromRedux.map((course, index) => {
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
                        <div className="flex justify-end">
                          <button
                            onClick={() => cancelCourseRegistration(course)}
                            type="button"
                            className="text-sm mr-20 border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                          >
                            Huỷ
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-xl font-bold">
          Tìm thấy {coursesFromRedux.length} khoá học {keyWord}
        </h1>
      )}
    </div>
  );
}
