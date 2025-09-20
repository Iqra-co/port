import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample() {
  const books = [
    {
      title: "The Frozen River",
      img: "https://m.media-amazon.com/images/I/91ulu+khYLL._AC_UL480_FMwebp_QL65_.jpg",
      link: "/book/frozen-river",
    },
    {
      title: "When the Jessamine Grows",
      img: "https://m.media-amazon.com/images/I/916hVyQHXVL._AC_UL480_FMwebp_QL65_.jpg",
      link: "/book/jessamine",
    },
    {
      title: "A Court of Thorns and Roses",
      img: "https://m.media-amazon.com/images/I/81A-T+X6ukL._AC_UL480_FMwebp_QL65_.jpg",
      link: "/book/thorns-roses",
    },
    {
      title: "The Lost Bookshop",
      img: "https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg",
      link: "/about",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 my-5">
      {books.map((book, i) => (
        <Card
          key={i}
          className="custom-card"
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            style={{ height: "280px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              {book.title}
            </Card.Title>
            <Card.Text className="text-muted text-center">
              Dive into this amazing book full of stories and imagination.
            </Card.Text>
            <Link to={book.link}>
              <Button
                variant="primary"
                className="w-100 custom-btn"
              >
                View
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ))}

      {/* Extra Styling */}
      <style>{`
        .custom-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }
        .custom-btn {
          border-radius: 8px;
          background: linear-gradient(90deg, #007bff, #00c6ff);
          border: none;
          font-weight: 500;
          transition: background 0.3s ease;
        }
        .custom-btn:hover {
          background: linear-gradient(90deg, #0056b3, #0096c7);
        }
      `}</style>
    </div>
  );
}

export default BasicExample;
