import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  const blogName = "Austine Were's Blog";
  const aboutImage = "https://via.placeholder.com/215";
  const aboutText = "This is a personal blog by Austine Jack Were. I code and write!";
  return (
    <div className="App">
      <Header blogName={blogName}/>
      <About aboutImage={aboutImage} aboutText={aboutText}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
