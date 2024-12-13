import { useState } from "react";
import data from "./Data.json";

export function Table() {
  const [sorteddata, setsorteddata] = useState([data]);

  const handleSortbydate = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setsorteddata(sorted);
  };
  const handlesortbyviews = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return b.date - a.date;
      } else {
        return b.views - a.views;
      }
    });
    setsorteddata(sorted);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortbydate}>Sort by Date</button>
      <button onClick={handlesortbyviews}>Sort by Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        <tbody>
          {sorteddata.map((items) => (
            <tr>
              <td>{items.date}</td>
              <td>{items.views}</td>
              <td>{items.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
