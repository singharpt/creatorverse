import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/AddCreators";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreators";
import ViewCreator from "./pages/ViewCreator";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/add" element={<Form />}></Route>
        <Route path="/show" element={<ShowCreators />}></Route>
        <Route path="/edit/:creatorName" element={<EditCreator />}></Route>
        <Route path="/view/:creatorName" element={<ViewCreator />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
