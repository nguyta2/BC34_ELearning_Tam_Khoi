import React, { useState, useEffect } from "react";
import CourseItem from "../../components/CourseItem/CourseItem";
import Banner from "../../templates/users/Banner";
import { useSelector, useDispatch } from "react-redux";
import { getApiSessionsList } from "../../redux/reducers/CoursesReducer";

export default function TrangChu() {
  const courses = useSelector((state) => state.CoursesReducer.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiSessionsList);
  }, []);

  return (
    <div>
      <Banner />
      <div className="container mt-4">
        <h1 className="text-xl">Các khoá học mới nhất</h1>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((item, index) => {
            if(index < 8) {
              return (
                <div key={index}>
                  <CourseItem item={item} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
