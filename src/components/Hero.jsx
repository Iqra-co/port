import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledExample() {
  return (
    <Carousel
     fade interval={3000}
      pause={true}
     >
      {[
        {
          src: "https://m.media-amazon.com/images/I/81GjiKaX0sL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Kindle",
          desc: "Discover amazing stories and timeless classics."
        },
        {
          src: "https://m.media-amazon.com/images/I/81u1OUcs84L._AC_UL480_FMwebp_QL65_.jpg",
          title: "Julia Whelan",
          desc: "Books that inspire, teach, and entertain."
        },
        {
          src: "https://m.media-amazon.com/images/I/91eKgBQ+MzL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Clare Leslie Hall",
          desc: "Every page takes you on a new journey."
        },
        {
          src: "https://m.media-amazon.com/images/I/81gy9cu7FLL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Knockemout",
          desc: "Find your next favorite book today."
        },
        {
          src: "https://m.media-amazon.com/images/I/715tCKb71jL._AC_UL480_FMwebp_QL65_.jpg",
          title: "Ray Porter",
          desc: "Dive into worlds of imagination and wisdom."
        }
      ].map((item, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 rounded shadow-lg"
            src={item.src}
            alt={`${item.title}`}
            style={{
              height: "450px",
              objectFit: "contain",
              backgroundColor: "#000"
            }}
          />
          <Carousel.Caption>
            <div className="caption-bg p-3 rounded">
              <h3 className="fw-bold">{item.title}</h3>
              <p className="mb-0">{item.desc}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

      {/* Extra Styling */}
      <style>{`
        .carousel-caption {
          bottom: 20px;
        }
        .caption-bg {
          background: rgba(0, 0, 0, 0.6);
          display: inline-block;
          animation: fadeInUp 1s ease;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Carousel>
  );
}

export default UncontrolledExample;
