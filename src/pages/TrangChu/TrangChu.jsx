import React, { useEffect } from "react";
import Banner from "../../templates/users/Banner";
import { useSelector, useDispatch } from "react-redux";
import { getApiSessionsList } from "../../redux/reducers/CoursesReducer";
import CourseList from "../../components/CourseItem/CourseList";

export default function TrangChu() {
  return (
    <div>
      <Banner />
      <CourseList />
    </div>
  );
}
