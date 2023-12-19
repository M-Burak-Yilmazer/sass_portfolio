import "./_about.scss";

const About = () => {
  return (
    <div class="about-bgImg-container">
      <div className="about__bio-image">
        <h2>BIOGRAPHY</h2>
        <p>
          Sami Süleyman Gündoğdu Demirel (1 November 1924 – 17 June 2015 ) was a
          Turkish politician, engineer, and statesman who served as the 9th
          President of Turkey from 1993 to 2000. He previously served as the
          Prime Minister of Turkey seven times between the years 1965 and 1993.
          He was the leader of the Justice Party (AP) from 1964 to 1980 and the
          leader of the True Path Party (DYP) from 1987 to 1993.
        </p>
      </div>
      {/* ABOUT MAIN */}
      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">1993-2000</h2>
            <h3>PRESIDENCY OF THE REPUBLIC OF TURKIYE</h3>
            <h4>9th President of Türkiye </h4>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "1.2",
                marginTop: ".5rem",
              }}
            >
              After the sudden death of Özal, Demirel was elected the ninth
              President of Turkey in 1993 by the Grand National Assembly.
              Demirel was elected as the ninth President of Türkiye by the TBMM
              on 16 May 1993 and left the Office after his seven year term on 16
              May 2000.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">1964-1993</h2>
            <h3>Leader of the True Path Party</h3>
            <h4> Prime Minister and Deputy Prime Minister</h4>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "1.2",
                marginTop: ".5rem",
              }}
            >
              Having been identified as a potential future Prime Minister by
              Adnan Menderes, Demirel was elected leader of the Justice Party in
              1964 and managed to bring down the government of İsmet İnönü in
              1965 despite not being a Member of Parliament. After than He
              previously served as the Prime Minister of Turkey seven times
              between the years 1965 and 1993.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">1949 - 1960</h2>
            <h3>State Department </h3>
            <h4>Engineering career</h4>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "1.2",
                marginTop: ".5rem",
              }}
            >
              He served as Director General of the State Hydraulic Works (DSİ).
              As such, Demirel supervised the construction of a various power
              plants, dams and irrigation facilities.Eisenhower Fellowships
              selected Süleyman Demirel in 1954 to represent Turkey.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
