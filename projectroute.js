import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // ✅ FIXED

import ReactApp from "./ReactApp";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Pagenotfound from "./Pagenotfound";
import Counter from "./Counter";
import Showuser from "./Showuser";
import Adduser from "./Adduser";
// ❌ You DO NOT HAVE THESE FILES → REMOVED
// import Getdept from "./Getdept";
// import AddRecord from "./Addrecord";
// import Showrec from "./Showrec";

import Comp10 from "./Comp10";
import Compo21 from "./Compo21";            // ✅ Your actual file
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import SingleMovie from "./Singlemovie";    // ✅ Correct filename
import SearchMovie from "./SearchMovie";

const ProjectRoute = () => (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<ReactApp />}>

        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="newuser" element={<Register />} />

        <Route path="Counter" element={<Counter p1="100" p2="200" />} />
        <Route path="Showuser" element={<Showuser />} />
        <Route path="Adduser" element={<Adduser />} />

        {/* ❌ Removed because the files DO NOT EXIST */}
        {/* <Route path="Getdept" element={<Getdept />} /> */}
        {/* <Route path="AddRecord" element={<AddRecord />} /> */}
        {/* <Route path="Show-rec" element={<Showrec />} /> */}

        <Route path="Comp10" element={<Comp10 />} />
        <Route path="Comp21" element={<Compo21 />} />  {/* FIXED */}

        <Route path="Popular" element={<Popular />} />
        <Route path="TopRated" element={<TopRated />} />
        <Route path="Upcoming" element={<Upcoming />} />

        <Route path="singlemovie/:movieid" element={<SingleMovie />} />
        <Route path="searchMovie" element={<SearchMovie />} />

        <Route path="*" element={<Pagenotfound />} />

      </Route>

    </Routes>
  </BrowserRouter>
);

export default ProjectRoute;
