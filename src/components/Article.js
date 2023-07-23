import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const renderEmojis = (count, emoji) => {
    const emojis = [];
    for (let i = 0; i < count; i++) {
      emojis.push(emoji);
    }
    return emojis;
  };
  const emojisDisplayed =
    minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const emojis = renderEmojis(emojisDisplayed, emoji);
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emojisDisplayed > 0 && emojis}</p>
    </article>
  );
};
export default Article;
