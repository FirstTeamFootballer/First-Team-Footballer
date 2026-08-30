import { useState, useEffect } from "react";
import "./index.css";
import fourCornerGraphic from "./assets/four-corner-development.png";
import whiteLogo from "./assets/White Logo.png";
import roarer from "./assets/Roarer.png";
import togetherFamily from "./assets/together-family.jpeg";
import togetherFriends from "./assets/together-friends.jpeg";
import togetherFootball from "./assets/together-football.jpeg";
import giftPhoto from "./assets/gift-football-fan.jpeg";
import whatsInBox from "./assets/whats-in-box.jpg";
import technicalIcon from "./assets/technical-icon.png";
import tacticalIcon from "./assets/tactical-icon.png";
import physicalIcon from "./assets/physical-icon.png";
import psychologicalIcon from "./assets/psychological-icon.png";
import socialIcon from "./assets/social-icon.png";
import restDayIcon from "./assets/rest-day-icon.png";
import promoVideo from "./assets/FTFPromo.mp4";

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");
  const enquiryType = params.get("type");


  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

const testimonials = [
  {
    type: "Parent",
    quote:
      "I have two football-mad kids and, away from training, it's so difficult to get them off their screens. This game has managed to do that. They really enjoy playing against each other.",
    person: "Parent of Two Young Players",
  },
  {
    type: "Coach",
    quote:
      "This game helps build young players' knowledge around the Four Corner Model — something we don't always get enough time to explore on the pitch. They're learning while they're having fun.",
    person: "Grassroots Football Coach",
  },
  {
    type: "Player",
    quote:
      "Scoring penalties and the challenges are my favourite part because I get to beat my friends! The game is so much fun — I really like it.",
    person: "Young Player",
  },
];

const [activeTestimonial, setActiveTestimonial] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, 6500);

  return () => clearInterval(interval);
}, []);

  const questions = {
    1: {
      level: "Level 1",
      category: "Psychological",
      categoryClass: "psychological-accent",
      question: "Why should we encourage our teammates?",
      options: [
        "So they pass to us",
        "To help them feel confident",
        "So the coach notices us"
      ],
      answer: 1
    },

    2: {
      level: "Level 2",
      category: "Social",
      categoryClass: "social-accent",
      question: "What’s a good way to resolve a disagreement with a teammate?",
      options: [
        "Talk calmly and listen to each other",
        "Complain to the coach",
        "Argue with them until you get your way"
      ],
      answer: 0
    },

    3: {
      level: "Level 3",
      category: "Tactical",
      categoryClass: "tactical-accent",
      question: "When should a centre-back step into midfield?",
      options: [
        "When they want to score a goal",
        "When they can break lines and join the attack",
        "After taking a goal kick"
      ],
      answer: 1
    },

    4: {
      level: "Level 4",
      category: "Technical",
      categoryClass: "technical-accent",
      question:
        "When under high pressure, how can a midfielder retain possession most effectively?",
      options: [
        "Turn into pressure to draw fouls",
        "Use quick combinations and third man runs",
        "Play the ball long every time"
      ],
      answer: 1
    }
  };

  const trainingSquares = [
    {
      name: "Technical",
      className: "training-card technical-card",
      icon: technicalIcon,
      copy: "Football technique, execution and skill."
    },
    {
      name: "Tactical",
      className: "training-card tactical-card",
      icon: tacticalIcon,
      copy: "Read the game, understand situations and make decisions."
    },
    {
      name: "Physical",
      className: "training-card physical-card",
      icon: physicalIcon,
      copy: "Movement, strength, balance and physical ability."
    },
    {
      name: "Psychological",
      className: "training-card psychological-card",
      icon: psychologicalIcon,
      copy: "Confidence, mindset, resilience and attitude."
    },
    {
      name: "Social",
      className: "training-card social-card",
      icon: socialIcon,
      copy: "Teamwork, communication and relationships."
    },
    {
     name: "Rest Day",
      className: "training-card rest-card-square",
      icon: restDayIcon,
      copy: "Expect the unexpected. A Rest Day can change everything."
    }
  ];
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestion = questions[selectedLevel];
  const chooseLevel = (level) => {
    setSelectedLevel(level);
    setSelectedAnswer(null);
  };

const handleEnquirySubmit = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formspree.io/f/mwlkpdqb",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      window.location.href = "/?page=enquiry-success";
    } else {
      alert(
        "Sorry, your enquiry could not be sent. Please try again or email info@firstteamfootballer.com."
      );
    }
  } catch (error) {
    alert(
      "Sorry, your enquiry could not be sent. Please try again or email info@firstteamfootballer.com."
    );
  }
};

if (page === "enquiry") {
  return (
    <main className="enquiry-page">
      <div className="enquiry-topbar">
        <a href="/" className="enquiry-logo">
          <img src={whiteLogo} alt="First Team Footballer" />
        </a>

       
      </div>

      <div className="enquiry-layout">
        <section className="enquiry-intro">
          <p className="enquiry-kicker">
            Clubs • Academies • Schools
          </p>

          <h1>
            START A
            <span>CONVERSATION.</span>
          </h1>

          <p className="enquiry-copy">
            Whether you're interested in a bulk order or joining the First Team
            Footballer Club Partner Programme, send us a few details and we'll
            get back to you.
          </p>

          <p className="enquiry-contact">
            Prefer email? You can also contact us directly at{" "}
            <strong>info@firstteamfootballer.com</strong>.
          </p>
        </section>

       <section className="enquiry-form-card">
 <form onSubmit={handleEnquirySubmit}>

       <div className="enquiry-field">
              <label htmlFor="enquiry-type">
                What are you interested in?
              </label>

              <select
                id="enquiry-type"
                name="enquiry_type"
                defaultValue={
                  enquiryType === "partner"
                    ? "Club Partner Programme"
                    : enquiryType === "bulk"
                    ? "Bulk Order"
                    : ""
                }
                required
              >
                <option value="">Select an option</option>
                <option value="Bulk Order">Bulk Order</option>
                <option value="Club Partner Programme">
                  Club Partner Programme
                </option>
              </select>
            </div>

            <div className="enquiry-field-row">
              <div className="enquiry-field">
                <label htmlFor="enquiry-name">Your Name</label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-organisation">
                  Club / School / Organisation
                </label>
                <input
                  id="enquiry-organisation"
                  name="organisation"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="enquiry-field-row">
              <div className="enquiry-field">
                <label htmlFor="enquiry-email">Email Address</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="enquiry-field">
                <label htmlFor="enquiry-phone">Phone Number</label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="enquiry-field">
              <label htmlFor="organisation-type">Organisation Type</label>

              <select
                id="organisation-type"
                name="organisation_type"
                required
              >
                <option value="">Select an option</option>
                <option value="Grassroots Football Club">
                  Grassroots Football Club
                </option>
                <option value="Football Academy">Football Academy</option>
                <option value="Primary School">Primary School</option>
                <option value="Secondary School">Secondary School</option>
                <option value="Community Organisation">
                  Community Organisation
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {enquiryType === "bulk" && (
              <div className="enquiry-field">
                <label htmlFor="enquiry-quantity">
                  Approximate Number Of Games
                </label>

                <select id="enquiry-quantity" name="quantity">
                  <option value="">Select an option</option>
                  <option value="10 Games">10 Games</option>
                  <option value="20 Games">20 Games</option>
                  <option value="50+ Games">50+ Games</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
            )}

            {enquiryType === "partner" && (
              <div className="enquiry-field">
                <label htmlFor="club-size">
                  Approximate Number Of Players / Members
                </label>

                <input
                  id="club-size"
                  name="club_size"
                  type="text"
                  placeholder="e.g. 250"
                />
              </div>
            )}

            <div className="enquiry-field">
              <label htmlFor="enquiry-message">
                Anything Else You'd Like Us To Know?
              </label>

              <textarea
                id="enquiry-message"
                name="message"
                placeholder="Tell us a little about your club, school or enquiry..."
              />
            </div>

            <button type="submit" className="enquiry-submit">
              Send Enquiry
            </button>

            <p className="enquiry-privacy">
              We'll only use the details you provide to respond to your enquiry.
            </p>

          </form>
        </section>
      </div>
    </main>
  );
}



if (page === "enquiry-success") {
  return (
    <main className="enquiry-page">
      <div className="enquiry-topbar">
        <a href="/" className="enquiry-logo">
          <img src={whiteLogo} alt="First Team Footballer" />
        </a>
      </div>

      <div className="enquiry-success-wrap">
        <section className="enquiry-success-card">
          <p className="enquiry-kicker">Enquiry Sent</p>

          <h1>
            THANK YOU.
            <span>WE'LL BE IN TOUCH.</span>
          </h1>

          <p>
            Your enquiry has been sent to First Team Footballer.
            We'll get back to you as soon as we can.
          </p>

          <a href="/" className="enquiry-success-btn">
            Back To First Team Footballer
          </a>
        </section>
      </div>
    </main>
  );
}

  return (
    <div className="site">

      {/* ================= HEADER ================= */}

      <header className="site-header">

        <a href="#home" className="brand">
          <img src={whiteLogo} alt="First Team Footballer" />
        </a>

        <nav className="main-nav">
          <a href="#game">The Game</a>
          <a href="#how">How To Play</a>
          <a href="#levels">Levels</a>
	  <a href="#about">Our Philosophy</a>
          <a href="/clubs-schools.html" target="_blank" rel="noopener noreferrer">
  Clubs & Schools
</a>
          
        </nav>

<a
  href="/clubs-schools.html"
  className="mobile-clubs-button"
>
  Clubs & Schools
</a>

     <a
  href="https://buy.stripe.com/bJedR84Nh8YYdQs2L8dby09"
  className="header-cta"
  target="_blank"
  rel="noopener noreferrer"
>
  Get The Game
</a>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={promoVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-kicker">
            The Ultimate Football Board Game
          </p>

          <h1>
            Have You Got
            <span>What It Takes?</span>
          </h1>

          <p className="hero-sub">
            Take on the football year. Test your knowledge.
            Face the challenges. Outplay your opponents.
           
          </p>

          <p className="hero-tagline">
            Think Like A Player. Play Like A Pro. Make The First Team.
          </p>

         <div className="hero-buttons">

  <a href="#game" className="btn btn-secondary">
    Discover The Game
  </a>

</div>

        </div>

        <a href="#football-year" className="scroll-link">
          Begin Your Journey
          <span>↓</span>
        </a>

      </section>


      {/* ================= FOOTBALL YEAR ================= */}

      <section className="football-year" id="football-year">

        <div className="football-year-heading">

          <p className="section-kicker">
            The Football Year
          </p>

          <h2>
            12 Months.
            <span>One Goal.</span>
          </h2>

          <p className="football-year-intro">
            Start your season in January and race through the football year.
            Complete a full lap of the board to move one month closer
            to becoming the First Team Footballer.
          </p>

        </div>


        <div className="season-track">

          <div className="season-line"></div>

          {months.map((month, index) => (
            <div
              className={`month ${
                index === 0
                  ? "month-start"
                  : index === 11
                  ? "month-finish"
                  : ""
              }`}
              key={month}
            >
              <div className="month-marker">
                {index + 1}
              </div>

              <span className="month-name">
                {month}
              </span>
            </div>
          ))}

        </div>


        <div className="season-labels">

          <div className="season-start-label">
            <span>January</span>
            <strong>Your Season Begins</strong>
          </div>

          <div className="season-finish-label">
            <span>December</span>
            <strong>The First Team</strong>
          </div>

        </div>


        <div className="season-steps">

          <div className="season-step">

            <span className="season-step-number">
              01
            </span>

            <p className="season-step-kicker">
              Matchday
            </p>

            <h3>
              Score.
            </h3>

            <p>
              Every Matchday starts with a penalty.
              Score against your opponent to roll the dice
              and continue your journey. Miss, and your turn is over.
            </p>

          </div>


          <div className="season-step">

            <span className="season-step-number">
              02
            </span>

            <p className="season-step-kicker">
              Around The Board
            </p>

            <h3>
              Play.
            </h3>

            <p>
              Roll the dice, land on Training Squares,
              answer questions, take on challenges
              and compete against your opponents.
            </p>

          </div>


          <div className="season-step season-step-final">

            <span className="season-step-number">
              03
            </span>

            <p className="season-step-kicker">
              Through The Year
            </p>

            <h3>
              Progress.
            </h3>

            <p>
              Complete a full lap of the board and advance
              your player one month through the football year.
            </p>

          </div>

        </div>


        <div className="season-win">

          <p className="season-win-kicker">
            The Ultimate Goal
          </p>

          <h3>
            Be The First
            <span>To Reach December.</span>
          </h3>

          <div className="season-win-line"></div>

          <p className="season-congratulations">
            Congratulations
          </p>

          <p className="season-winner">
            You Are The
            <strong> First Team Footballer.</strong>
          </p>

        </div>

      </section>


      {/* ================= THE GAME ================= */}

      <section className="game-intro" id="game">

        <div className="game-intro-copy">

          <p className="section-kicker">
            More Than Football Knowledge
          </p>

          <h2>
            Know It.
            <span>Prove It.</span>
            <span>Play It.</span>
          </h2>

          <p>
            First Team Footballer puts your football knowledge,
            decision-making, physical skills and competitive spirit
            to the test. Every turn can bring a different challenge.
          </p>

        </div>


        <div className="game-features">

          <div className="game-feature">
            <span>01</span>
            <h3>Answer</h3>
            <p>
              Put your football knowledge to the test
              with questions throughout the game.
            </p>
          </div>

          <div className="game-feature">
            <span>02</span>
            <h3>Challenge</h3>
            <p>
              Take on individual and head-to-head
              football and physical challenges.
            </p>
          </div>

          <div className="game-feature">
            <span>03</span>
            <h3>Compete</h3>
            <p>
              Score penalties, challenge your rivals
              and fight to stay ahead.
            </p>
          </div>

          <div className="game-feature">
            <span>04</span>
            <h3>Progress</h3>
            <p>
              Complete each lap, advance through the months
              and race towards December.
            </p>
          </div>

        </div>

      </section>


      {/* ================= TRAINING SQUARES ================= */}

      <section className="training-section" id="how">

        <div className="training-heading">

          <p className="section-kicker">
            Six Training Squares
          </p>

          <h2>
            Every Part Of
            <span>The Player Matters.</span>
          </h2>

          <p className="training-intro">
            Land on a Training Square and draw a card from the matching
            category. Each part of the game tests something different.
          </p>

        </div>


        <div className="training-card-grid">

          {trainingSquares.map((item) => (
            <article
              className={item.className}
              key={item.name}
            >

              <div className="training-card-shell">

                <h3 className="training-card-title">
                  {item.name}
                </h3>

                <div className="training-icon-wrap">
                  <img
                    src={item.icon}
                    alt={`${item.name} symbol`}
                  />
                </div>

                <div className="training-description">
                  <p>
                    {item.copy}
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* ================= LEVEL QUIZ ================= */}

      <section className="quiz-section" id="levels">

        <div className="quiz-heading">

          <p className="section-kicker">
            How Good Is Your Football Knowledge?
          </p>

          <h2>
            Choose
            <span>Your Level.</span>
          </h2>

          <p>
            Start with Level 1 and work your way up.
            Think you know football? Prove it.
          </p>

        </div>


        <div className="level-selector">

          {[1, 2, 3, 4].map((level) => (
            <button
              key={level}
              type="button"
              className={`level-select-button ${
                selectedLevel === level ? "active" : ""
              }`}
              onClick={() => chooseLevel(level)}
            >
              <span>Level</span>
              <strong>0{level}</strong>
            </button>
          ))}

        </div>


        <div
          className={`quiz-card ${currentQuestion.categoryClass}`}
        >

          <div className="quiz-category-strip"></div>

          <div className="quiz-inner">

            <div className="quiz-meta">

              <span>
                {currentQuestion.level}
              </span>

              <strong>
                {currentQuestion.category}
              </strong>

            </div>

            <h3>
              {currentQuestion.question}
            </h3>


            <div className="quiz-options">

              {currentQuestion.options.map((option, index) => {

                let optionClass = "quiz-option";

                if (selectedAnswer !== null) {

                  if (index === currentQuestion.answer) {
                    optionClass += " correct";
                  }

                  else if (index === selectedAnswer) {
                    optionClass += " incorrect";
                  }

                }

                return (
                  <button
                    type="button"
                    className={optionClass}
                    key={option}
                    onClick={() => setSelectedAnswer(index)}
                  >

                    <span>
                      {String.fromCharCode(65 + index)}
                    </span>

                    {option}

                  </button>
                );

              })}

            </div>


            {selectedAnswer !== null && (

              <div className="quiz-result">

                {selectedAnswer === currentQuestion.answer
                  ? "Correct — you've got it."
                  : "Not quite — the correct answer is highlighted."}

              </div>

            )}

          </div>

        </div>


        <div className="levels-message">

          <strong>
            Level 1 included with the game.
          </strong>

          <span>
            Levels 2–4 available separately.
          </span>

        </div>

      </section>



      {/* ================= CHALLENGE CARDS ================= */}

      <section className="challenge-section">

        <div className="challenge-heading">

          <p className="section-kicker">
            Knowledge Is Only The Beginning
          </p>

          <h2>
            Now
            <span>Prove It.</span>
          </h2>

          <p className="challenge-intro">
            Land on a Challenge Card and it's time to put your skills
            to the test. Here are just two examples of the challenges
            you could face.
          </p>

        </div>


        <div className="challenge-grid">

          <article className="example-challenge-card">

            <div className="challenge-shell technical-challenge">

              <div className="challenge-category">

                <img
                  src={technicalIcon}
                  alt="Technical symbol"
                />

                <span>
                  Technical Challenge
                </span>

              </div>

              <h3>
                Kick-Ups
              </h3>

              <p>
                Select an opponent. Whoever performs the most
                kick-ups advances to their next month.
              </p>

              <div className="challenge-consequence">
                The runner-up must return to their previous month.
              </div>

            </div>

          </article>


          <article className="example-challenge-card">

            <div className="challenge-shell physical-challenge">

              <div className="challenge-category">

                <img
                  src={physicalIcon}
                  alt="Physical symbol"
                />

                <span>
                  Physical Challenge
                </span>

              </div>

              <h3>
                Plank
              </h3>

              <p>
                Select an opponent. Whoever holds the plank position
                the longest advances to their next month.
              </p>

              <div className="challenge-consequence">
                The runner-up must return to their previous month.
              </div>

            </div>

          </article>

        </div>


        <p className="more-challenges">
          And That's Just The Start.
        </p>

      </section>


      {/* ================= REST DAY ================= */}

      <section className="rest-day-showcase">

        <div className="rest-day-showcase-inner">

          <p className="section-kicker">
            The Game Can Change In An Instant
          </p>

          <h2>
            Rest Day.
          </h2>

          <p className="rest-day-intro">
            Not every card is a question or challenge.
            Rest Day cards can change your journey through the football year.
            Here are two examples of what could happen.
          </p>


          <div className="rest-day-grid">

            <article className="rest-day-example">

              <div className="rest-day-card">

                <div className="rest-day-category">

                  <img
                    src={restDayIcon}
                    alt="Rest Day symbol"
                  />

                  <span>
                    Rest Day
                  </span>

                </div>


                <h3>
                  You've Been Named Captain
                </h3>


                <p>
                  Congratulations. You have been selected as captain.
                </p>


                <div className="rest-day-effect">
                  You may advance to your next month and return one player
                  to their previous month.
                </div>

              </div>

            </article>


            <article className="rest-day-example">

              <div className="rest-day-card">

                <div className="rest-day-category">

                  <img
                    src={restDayIcon}
                    alt="Rest Day symbol"
                  />

                  <span>
                    Rest Day
                  </span>

                </div>


                <h3>
                  Poor Attitude
                </h3>


                <p>
                  Your attitude on and off the pitch has been very poor.
                  This is not acceptable behaviour.
                </p>


                <div className="rest-day-effect">
                  Return to your previous month.
                </div>

              </div>

            </article>

          </div>


          <p className="rest-day-closing">
            Fortunes Can Change With One Card.
          </p>

        </div>

      </section>

{/* ================= PLAYER DEVELOPMENT ================= */}

<section
  id="development"
  style={{
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    background: "#050505",
    padding: "70px 20px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>

  <div
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto"
    }}
  >

    <img
      src={fourCornerGraphic}
      alt="Developing the Complete Player"
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        margin: "0 auto"
      }}
    />

  </div>

</section>

{/* ================= PHILOSOPHY ================= */}

<section id="about" className="philosophy-section">

  <div className="philosophy-inner">

    <div className="philosophy-heading">

      <p className="section-kicker">
        Our Philosophy
      </p>

      <h2>
        Football Is About
        <span>More Than Football.</span>
      </h2>

    </div>


    <div className="philosophy-content">

      <div className="philosophy-copy">

        <p>
          Young players should be encouraged to develop their skills,
          understand the game and challenge themselves — but football
          offers so much more.
        </p>

        <p>
          It's where friendships are made. Confidence grows. Players
          learn to work together, compete, deal with setbacks, show
          respect and keep going.
        </p>

        <p>
          First Team Footballer grew from more than 20 years
          of coaching young people across grassroots, community and
          academy football — and seeing first-hand that the best
          development goes far beyond what happens with the ball on the pitch.
        </p>

      </div>


      <div className="philosophy-values">

        <span>Friendship</span>
        <span>Character</span>
        <span>Competition</span>
        <span>Resilience</span>

      </div>

    </div>


    <div className="philosophy-finale">

      <p>
        And Somewhere Amongst All That Development,
        There's Something We Should Never Forget.
      </p>

      <h3>
        Football Should
        <span>Be Fun.</span>
      </h3>

    </div>


    <div className="philosophy-credentials">

      <span>20+ Years In Coaching</span>
      <i></i>
      <span>UEFA Qualified Coach</span>
      <i></i>
      <span>FA Coach Developer</span>

    </div>

  </div>

</section>

      {/* ================= ROARER ================= */}

      <section className="roarer-section" id="about">

        <div className="roarer-image">

          <img
            src={roarer}
            alt="Roarer, the First Team Footballer lion mascot"
          />

        </div>


        <div className="roarer-copy">

          <p className="section-kicker">
            Meet Roarer
          </p>

          <h2>
            The Heart Of
            <span>The First Team.</span>
          </h2>

          <p className="roarer-intro">
            Roarer represents what it takes to become more than just a good footballer — confidence, resilience, teamwork, respect and the courage to keep going.
          </p>


          <div className="roarer-quote">

            <p className="roarer-says">
              Roarer Says
            </p>

           <p className="roarer-quote-text">
  <span className="quote-line">
    “Talent Gets You Noticed.
  </span>

  <span className="quote-line">
    Character Gets You In
  </span>

  <span className="quote-line quote-finish">
    The First Team.”
  </span>
</p>

          </div>

        </div>

      </section>
{/* ================= TOGETHER ================= */}

<section className="together-section">

  <div className="together-inner">

    <div className="together-heading">

      <p className="section-kicker">
        Football Brings Us Together
      </p>

      <h2>
        Play Together.
        <span>Compete Together.</span>
        <span>Remember It Together.</span>
      </h2>

    </div>


   <div className="together-copy">

  <p>
    First Team Footballer brings people together around the game — the laughs, the rivalries, the conversations and the moments you remember.
  </p>

  <p className="together-statement">
    Because some of the best football memories aren't made on the pitch.
  </p>

</div>

<div className="together-gallery">

  <div className="together-photo">
    <img
      src={togetherFamily}
      alt="Family with First Team Footballer"
    />
    <span>Family</span>
  </div>

  <div className="together-photo">
    <img
      src={togetherFriends}
      alt="Friends with First Team Footballer"
    />
    <span>Friends</span>
  </div>

  <div className="together-photo">
    <img
      src={togetherFootball}
      alt="Young football fan with First Team Footballer"
    />
    <span>Football</span>
  </div>

</div>

    <div className="together-values">

      <span>Family.</span>
      <span>Friends.</span>
      <span>Teammates.</span>
      <strong>One Game.</strong>

    </div>

  </div>

</section>

{/* ================= PERFECT GIFT ================= */}

<section className="gift-section" id="gift">

  <div className="gift-inner">

    <div className="gift-copy">

      <p className="section-kicker">
        For Those Who Never Stop Thinking About Football
      </p>

      <h2>
        The Perfect Gift
        <span>For Football Fans</span>
      </h2>

      <p className="gift-intro">
        Give the football fan in your life something different —
        a game that puts them at the heart of their own football journey
      </p>

      <div className="gift-features">
        <span>Knowledge.</span>
        <span>Challenges.</span>
        <span>Competition.</span>
        <span>Fun.</span>
      </div>

      <div className="gift-buy">

        <div className="gift-product-info">
          <strong>First Team Footballer</strong>
          <span>£29.95</span>
        </div>

      <a
  href="https://buy.stripe.com/bJedR84Nh8YYdQs2L8dby09"
  className="gift-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Get The Game
</a>

      </div>

    </div>


    <div className="gift-image">

      <img
        src={giftPhoto}
        alt="First Team Footballer — the perfect gift for football fans"
      />

    </div>

  </div>

</section>

{/* ================= WHAT'S IN THE BOX ================= */}

<section className="box-section">

  <div className="box-inner">

    <div className="box-heading">

      <p className="section-kicker">
        Everything You Need To Play
      </p>

      <h2>
        What's In
        <span>The Box?</span>
      </h2>

    </div>


    <div className="box-layout">

      <div className="box-image">

        <img
          src={whatsInBox}
          alt="First Team Footballer board game and contents"
        />

      </div>


      <div className="box-contents">

        <div className="box-item">
          <span>01</span>

          <div>
            <h3>The Game Board</h3>
            <p>
              Your journey through the football year.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>02</span>

          <div>
            <h3>Player Pieces & Football Markers</h3>
            <p>
              Choose your player and begin your journey.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>03</span>

          <div>
            <h3>Question Cards</h3>
            <p>
              Technical. Tactical. Physical. Psychological. Social.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>04</span>

          <div>
            <h3>Challenge Cards</h3>
            <p>
              Take on challenges that can change the game.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>05</span>

          <div>
            <h3>Rest Day Cards</h3>
            <p>
              Expect the unexpected as your football year unfolds.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>06</span>

          <div>
            <h3>Penalty Cards</h3>
            <p>
              Step up from the spot and test your nerve.
            </p>
          </div>
        </div>


        <div className="box-item">
          <span>07</span>

          <div>
            <h3>Dice & Rule Book</h3>
            <p>
              Everything you need to get the game underway.
            </p>
          </div>
        </div>

      </div>

    </div>


    <div className="box-finale">

      <p>
        Everything's Ready.
      </p>

      <h3>
        Open The Box.
        <span>Start Your Journey.</span>
      </h3>

    </div>

  </div>

</section>

{/* ================= TESTIMONIALS ================= */}

<section className="testimonials-section">

  <div className="testimonials-inner">

    <div className="testimonials-heading">

      <p className="section-kicker">
        What People Are Saying
      </p>

      <h2>
        Don't Just Take
        <span>Our Word For It.</span>
      </h2>

    </div>


    {/* Confirm testimonial wording with contributors before launch */}

    <div className="testimonial-stage">

      <div
        className="testimonial-slide"
        key={activeTestimonial}
      >

        <span className="testimonial-type">
          {testimonials[activeTestimonial].type}
        </span>

        <div className="testimonial-mark">
          “
        </div>

        <blockquote>
          {testimonials[activeTestimonial].quote}
        </blockquote>

        <p className="testimonial-person">
          {testimonials[activeTestimonial].person}
        </p>

      </div>

    </div>


    <div className="testimonial-controls">

      {testimonials.map((testimonial, index) => (

        <button
          key={index}
          className={
            activeTestimonial === index
              ? "testimonial-dot active"
              : "testimonial-dot"
          }
          onClick={() => setActiveTestimonial(index)}
          aria-label={`Show ${testimonial.type} testimonial`}
        />

      ))}

    </div>

  </div>

</section>

      {/* ================= FINAL CTA ================= */}

      <section className="final-cta" id="buy">

        <img
          src={whiteLogo}
          alt="First Team Footballer"
          className="final-logo"
        />

        <p className="section-kicker">
          Your Journey Starts Here
        </p>

        <h2>
          Have You Got
          <span>What It Takes?</span>
        </h2>

        <p className="product-name">
          First Team Footballer
        </p>

        <div className="price">
          £29.95
        </div>

      <a
  href="https://buy.stripe.com/bJedR84Nh8YYdQs2L8dby09"
  className="btn btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Buy Now
</a>
<p className="final-signoff">
  Think Like A Player. Play Like A Pro. Make The First Team.
</p>
       

      </section>


     {/* ================= FOOTER ================= */}

<footer id="footer" className="site-footer">

 <div className="footer-socials">
  <a
    href="https://www.instagram.com/firstteamfootballer/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <span>•</span>

  <a href="#facebook">
    Facebook
  </a>

  <span>•</span>

  <a
    href="https://x.com/1teamfootballer"
    target="_blank"
    rel="noopener noreferrer"
  >
    X
  </a>
</div>

  <div className="footer-links">
    <a href="mailto:info@firstteamfootballer.com">
  Contact
</a>
    <span>•</span>
    <a href="/delivery.html">Delivery</a>
    <span>•</span>
    <a href="/returns.html">Returns</a>
    <span>•</span>
    <a href="/privacy.html">Privacy</a>
    <span>•</span>
    <a href="/terms.html">Terms</a>
  </div>

  <p className="footer-copyright">
    © 2026 First Team Footballer. All rights reserved.
  </p>

</footer>

    </div>
  );
}

export default App;