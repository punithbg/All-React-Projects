import React from "react";
import Header from "./Header";
import HomeImg from "../images/home.jpg";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={HomeImg} />
      <div className="home-row">
        <Product
          id="123456781"
          title="realme narzo 50 5G (Hyper Blue, 4GB RAM+64GB Storage) "
          price={15999}
          rating={5}
          image="https://m.media-amazon.com/images/I/91p5L+GitZL._SX679_.jpg"
        />
        <Product
          id="123456785"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={55557}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="123456783"
          title="Yogabar Crunchy Peanut Butter 400g"
          price={299}
          rating={4}
          image="https://m.media-amazon.com/images/I/71BZMnbUyuL._SX569_.jpg"
        />
        <Product
          id="123456784"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={9999}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="123456782"
          title="Mi 360° Home Security Camera 1080P"
          price={2890}
          rating={4}
          image="https://m.media-amazon.com/images/I/61JM7nC4OKL._SX569_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="123456786"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={109498}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
