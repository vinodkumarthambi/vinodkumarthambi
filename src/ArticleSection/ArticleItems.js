import "./ArticleSection.css";
import React from "react";
import { Card } from "react-bootstrap";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleItems = props => {
  const { articles } = { ...props };
  return (
    <div className="article-section">
      {articles && articles.length > 0 && articles.map(function (article, index) {
        return <Card key={index}>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.byline}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faCalendar}/>  {article.published_date}
            </Card.Text>
          </Card.Body>
        </Card>})}
    </div>
  );
};

export default ArticleItems;
