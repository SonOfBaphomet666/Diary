import Card from "../../card/card";

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__box">
                    <div className="hero__headingBox">
                        <h1 className="hero__heading">Тут начинаются мысли!</h1>
                    </div>
                    <div className="hero__headingBox2">
                        <h2 className="hero__heading2">Хочу поделиться с вами своим досугом.</h2>
                    </div>
                </div>
            </section>
            <main className="main">
                   <Card />
            </main>
        </>
    )
};

export default Home;