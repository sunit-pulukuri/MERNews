import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import News from "./components/News.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default class App extends Component {
  pages = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News key="/" pageSize={this.pages} country="in" category="" />
              }
            />
            <Route
              exact
              path="#"
              element={
                <News
                  key="#"
                  pageSize={this.pages}
                  country="in"
                  category="general"
                />
              }
            />
            {/* <Route
              exact
              path="/home"
              element={
                <News
                  key="general"
                  pageSize={this.pages}
                  country="in"
                  category="general"
                />
              }
            /> */}
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pages}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pages}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pages}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pages}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pages}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pages}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pages}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
