const About = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__headingBox">
            <h1>Обо мне</h1>
            </div>
            <div className="hero__headingBox2">
              <h6 style={{ width: "84px" }}>May 10,2024 {"\u{00B7}"}</h6>
              <p
                style={{
                  fontWeight: "700",
                  lineHeight: "120%",
                  fontSize: "13px",
                  color: "$dark-blue",
                }}
              >
                Ежедневная рубрика
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
