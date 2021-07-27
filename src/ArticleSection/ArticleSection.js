import React    from "react";
import ArticleItems from "./ArticleItems";

class ArticleSection extends React.Component {
 state = {};
 apiKey = "RKdGysmU5jRe9ENZX9sglVTaRDWSkFj5";
 period = 7;
  componentDidMount() {
    fetch(`http://api.nytimes.com/svc/mostpopular/v2/viewed/${this.period}.json?api-key=
      ${this.apiKey}`).then(response => {
                        return response.json();
                      }).then(data => {
                        console.log(data);
                        this.setState ({'articles' : data.results})
                      }).catch(error => {
                          console.log(error);
                      });
  }
  render() {
    return <ArticleItems articles={this.state.articles} {...this.props} />
  }
}

export default ArticleSection;
