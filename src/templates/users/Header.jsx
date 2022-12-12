import React, { useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { getApiSessionsType } from "../../redux/reducers/CoursesReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const items = useSelector((state) => state.CoursesReducer.coursesType);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getApiSessionsType);
  }, []);

  const handleMenuClick = (e) => {
    return navigate(`/DanhMucKhoaHoc?word=${e.key}`);
  };

  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between items-center h-16 ">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="max-h-12"
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            alt="CyberSoft.edu.vn logo"
          />
        </a>

        <ul className="hidden lg:flex mb-0">
          <li className="flex items-center">
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick,
              }}
            >
              <a
                className="text-white font-bold"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  DANH MỤC KHOÁ HỌC
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li className="flex mx-20">
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Tìm khoá học"
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                />
              </div>
            </fieldset>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button
            onClick={() => {
              return navigate(`/dangky`);
            }}
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Sign up
          </button>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
