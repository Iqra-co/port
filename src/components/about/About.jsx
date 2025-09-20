import React from 'react';

function About() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <h4 className="text-center fw-bold mb-4 text-uppercase">
        The Lost Bookshop
      </h4>

      <div className="row g-4 align-items-start">
        {/* Image Column */}
        <div className="col-md-4 text-center">
          <img
            src="https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg"
            className="img-fluid rounded shadow"
            alt="The Lost Bookshop"
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-8">
          <p
            className="text-muted"
            style={{
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}
          >
            <span className="fw-bold">NEW YORK TIMES BESTSELLER</span> • GMA BOOK CLUB PICK • 
            AN NPR BOOK OF THE YEAR — From the New York Times bestselling author of{" "}
            <em>I Was Anastasia</em> and <em>Code Name Hélène</em> comes a gripping historical
            mystery inspired by the life and diary of Martha Ballard, a renowned 18th-century
            midwife who defied the legal system and wrote herself into American history.
          </p>

          <blockquote className="blockquote border-start ps-3 my-3">
            <p className="mb-1 fst-italic">
              “Fans of Outlander’s Claire Fraser will enjoy Lawhon’s Martha, who is brave and outspoken when it comes to protecting the innocent… impressive.”
            </p>
            <footer className="blockquote-footer">The Washington Post</footer>
          </blockquote>

          <blockquote className="blockquote border-start ps-3 my-3">
            <p className="mb-1 fst-italic">
              “Once again, Lawhon works storytelling magic with a real-life heroine.”
            </p>
            <footer className="blockquote-footer">People Magazine</footer>
          </blockquote>

          <p
            className="text-muted"
            style={{
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}
          >
            Maine, 1789: When the Kennebec River freezes, entombing a man in the ice, Martha
            Ballard is summoned to examine the body and determine cause of death. As a midwife
            and healer, she is privy to much of what goes on behind closed doors in Hallowell…
          </p>

          <p
            className="text-muted"
            style={{
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}
          >
            Over the course of one winter, as the trial nears, and whispers and prejudices mount,
            Martha doggedly pursues the truth. Her diary soon lands at the center of the scandal,
            implicating those she loves, and compelling Martha to decide where her own loyalties
            lie.
          </p>

          <p
            className="text-muted"
            style={{
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}
          >
            Clever, layered, and subversive, Ariel Lawhon’s newest offering introduces an unsung
            heroine who refused to accept anything less than justice at a time when women were
            considered best seen and not heard. <strong>The Frozen River</strong> is a thrilling,
            tense, and tender story about a remarkable woman who left an unparalleled legacy yet
            remains nearly forgotten to this day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
