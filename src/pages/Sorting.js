import React, { useState } from "react";
import Header from "../components/Header";
import classes from "./sorting.module.css";
import { user } from "../data/user-data";

const Sorting = () => {
  const [data, setData] = useState(user);
  const [order, setOrder] = useState("asc");

  // sorting id (number)
  const sortId = () => {
    // ascending order
    if (order === "asc") {
      const sorted = data.sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      });
      setData(sorted);
      setOrder("desc");
    }

    // descending order
    if (order === "desc") {
      const sorted = data.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });
      setData(sorted);
      setOrder("asc");
    }
  };

  // sorting name (string)
  const sortName = () => {
    // ascending order
    if (order === "asc") {
      const sorted = data.sort((a, b) => {
        console.log(a.name.toUpperCase());
        return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("desc");
    }

    // descending order
    if (order === "desc") {
      const sorted = data.sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("asc");
    }
  };

  // sorting dob (date)
  const sortDob = () => {
    // ascending order
    if (order === "asc") {
      const sorted = data.sort((a, b) => {
        return new Date(a.dob) > new Date(b.dob) ? 1 : -1;
      });
      setData(sorted);
      setOrder("desc");
    }

    // descending order
    if (order === "desc") {
      const sorted = data.sort((a, b) => {
        return new Date(a.dob) < new Date(b.dob) ? 1 : -1;
      });
      setData(sorted);
      setOrder("asc");
    }
  };

  return (
    <div className={classes.sorting}>
      <Header />
      <div className={classes.sortingContainer}>
        <table>
          <thead>
            <tr>
              <th>
                ID <span onClick={sortId}>@</span>
              </th>
              <th>
                NAME <span onClick={sortName}>@</span>
              </th>
              <th>
                DOB <span onClick={sortDob}>@</span>
              </th>
            </tr>
          </thead>
          {data.map((u) => {
            return (
              <tbody key={u.id}>
                <tr>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.dob}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Sorting;
