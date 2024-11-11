/* eslint-disable no-unused-vars */
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Timetable = () => {
  return (
    <>
      <table className="table table-bordered timetable">
        <thead>
          <tr>
            <th rowSpan={2}>Period</th>
            <th>I</th>
            <th>II</th>
            <th>III</th>
            <th className="lunch-break" rowSpan="6"></th>
            <th>IV</th>
            <th>V</th>
            <th>VI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Day/Time</th>
            <th>(9:10 to 10:10 AM)</th>
            <th>(10:10 to 11:10 AM)</th>
            <th>(11:15 to 12:15 PM)</th>
            <th className="lunch-break" rowSpan="6">
              <span style={{ color: "red" }}>Lunch Break </span>
              (12:15 to 1:00 PM)
            </th>
            <th>(1:00 to 2:00 PM)</th>
            <th>(2:00 to 3:00 PM)</th>
            <th>(3:05 to 4:05 PM)</th>
          </tr>
          <tr>
            <th>Monday</th>
            <td colSpan={2}>CT Lab (B1) / ML Lab (B2)</td>
            <td>PE-2</td>
            <td>CN</td>
            <td>EAD</td>
            <td>SE</td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td colSpan={2}>CN Lab (B1) / EAD Lab (B2)</td>
            <td>PE-2</td>
            <td>ML</td>
            <td>EAD</td>
            <td>SE</td>
            <td>Library (B2)</td>
            <td>CC Lab (B1)</td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td>CN</td>
            <td>EAD</td>
            <td>FLAT</td>
            <td>ML</td>
            <td>FLAT</td>
            <td>Sports (B2)</td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td>ML</td>
            <td>CN</td>
            <td>CT Lab (B2) / ML Lab (B1)</td>
            <td>FLAT</td>
            <td>Library (B1)</td>
            <td>CC Lab (B2)</td>
          </tr>
          <tr>
            <th>Friday</th>
            <td>CN Lab (B2) / EAD Lab (B1)</td>
            <td>PE-2</td>
            <td>FLAT</td>
            <td>SE</td>
            <td>Library (B1)</td>
            <td>Sports (B1)</td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td>MENTORING</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Timetable;
