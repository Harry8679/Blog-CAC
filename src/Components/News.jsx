import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Weather from "./Weather";
import './News.css';
import userImg from '../assets/images/8888.jpg';
import techImg from '../assets/images/tech.jpg';
import sportsImg from '../assets/images/sports.jpg';
import scienceImg from '../assets/images/science.jpg';
import worldImg from '../assets/images/world.jpg';
import healthImg from '../assets/images/health.jpg';
import nationImg from '../assets/images/nation.jpg';
import axios from 'axios';

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async() => {
//         const url = 'https://gnews.io/api/v4/search?q=example&apikey=e2dd35ebd27a08f5e915cbf2c12b050e';

//         const response = await axios.get(url);
//         const fetchedNews = response.data.articles;

//         setHeadline(fetchedNews[0]);
//         setNews(fetchedNews.slice(1, 7));

//         console.log(news);
//     }

//     fetchNews();
//   }, []);
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
            <form>
                <input type="text" placeholder="Search News ..." />
                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
            <div className="user">
                <img src={userImg} alt="User Image" />
                <p>Harry MacCode</p>
            </div>
            <nav className="categories">
                <h1 className="nav-heading">Categories</h1>
                <div className="nav-links">
                    <a href="#" className="nav-link">General</a>
                    <a href="#" className="nav-link">World</a>
                    <a href="#" className="nav-link">Business</a>
                    <a href="#" className="nav-link">Technology</a>
                    <a href="#" className="nav-link">Entertainment</a>
                    <a href="#" className="nav-link">Sports</a>
                    <a href="#" className="nav-link">Science</a>
                    <a href="#" className="nav-link">Health</a>
                    <a href="#" className="nav-link">Nation</a>
                    <a href="#" className="nav-link">Bookmarks <i className="fa-regular fa-bookmark"></i></a>
                </div>
            </nav>
        </div>
        <div className="news-section">
            {headline && (
                <div className="headline">
                    <img src={headline.image} alt={headline.title} />
                    <h2 className="headline-title">{headline.title} <i className="fa-regular fa-bookmark bookmark"></i></h2>
                </div>
            )}
            <div className="news-grid">
                {news.map((article, index) => {
                    return (
                        <div key={index} className="news-grid-item">
                            <img src={article.image} alt={article.title} />
                            <h3>{article.title}<i className="fa-regular fa-bookmark bookmark"></i></h3>
                        </div>
                    );
                })}
                {/* <div className="news-grid-item">
                    <img src={techImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div>

                <div className="news-grid-item">
                    <img src={sportsImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div>

                <div className="news-grid-item">
                    <img src={scienceImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div>

                <div className="news-grid-item">
                    <img src={worldImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div>

                <div className="news-grid-item">
                    <img src={healthImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div>

                <div className="news-grid-item">
                    <img src={nationImg} alt="Sports Image" />
                    <h3>Amoung all sons of Yehoshoua<i className="fa-regular fa-bookmark bookmark"></i></h3>
                </div> */}
            </div>
        </div>
        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
            <Weather />
            <Calendar />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  )
}

export default News;
