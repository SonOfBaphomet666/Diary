
const Card = () => {
    return (
        <>
            <section className="cards">
                <div className="cards__dailyBox">
                    <h2 className="cards__daily">Ежедневная рубрика</h2>
                </div>


                <div className="card">
                    <div className="card__box">
                        <div className="card__dataBox">
                            <h6 className="card__data">May 10, 2024</h6>
                        </div>
                        <div className="card__box2">
                            <div className="card__titleBox">
                                <h3 className="card__title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Mollitia excepturi quo iure similique</h3>
                            </div>
                            <div className="card__textBox">
                                <p className="card__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae dolores fuga eius quia nobis? Tempora minima culpa officiis illum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
};

export default Card;