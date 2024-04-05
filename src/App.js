import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import News from "./components/News.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pages = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="/" pageSize={this.pages} country="in" category="" />
              }
            />
            <Route
              exact
              path="#"
              element={
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
                <News setProgress = {this.setProgress} apiKey = {this.apiKey}
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
