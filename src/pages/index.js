import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "dannyrosen.net"
        const siteDescription = "Personal Home Page of Danny Rosen"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Career<br /></h2>
                        </header>
                        <p>I started my career breaking products as a test engineer, then thought it might be more fun to create them and became a product manager. <br/> I now work as a member of Google's Core Systems team as a technical program manager and can be found scooting through Google NYC coming up with ideas and helping others execute their own.</p>
                    </section>

                    <section id="two">
                        <header className="major">
                          <h2>Books</h2>
          </header>
                          <ul>
                            <a href="https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557">Thinking in Systems: A Primer</a><br/>
                            <a href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469">Zen and the Art of Motorcycle Maintenance</a><br/>
                            <a href="https://www.amazon.com/Time-Enough-Love-Robert-Heinlein-ebook/dp/B004IYITXE">Time Enough for Love</a><br/>
                            <a href="https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers-ebook/dp/B077NRB36N">INSPIRED: How to Create Tech Products Customers Love</a><br/>
                            <a href="https://www.amazon.com/Planning-Extreme-Programming-Kent-Beck/dp/0201710919">Planning Extreme Programming</a>
                          </ul>
                    </section>

                    <section id="three">
                        <header className="major">
                          <h2>Setup</h2>
                        </header>
                    <p>For the last 6 years I've been a fanatical desktop linux fan. I currently run <a href="https://manjaro.org">Manjaro Linux</a> as my day-to-day driver and prefer the <a href="https://en.wikipedia.org/wiki/Cinnamon_(software)">cinnamon desktop</a> environment. I've been known to use mechanical keyboards and currently sport several <a href="https://www.amazon.com/Topre-Type-Heaven-104-key-Keyboard/dp/B00DGJALYW">Topre Type Heavens</a> and a <a href="https://www.massdrop.com/buy/massdrop-ctrl-mechanical-keyboard">Massdrop CTRL</a>. <a href="https://github.com/dannyzen/dotfiles">My dotfiles</a> are well documented and contain several ZSH plugins distributed by the wonderful <a href="https://github.com/andsens/homeshick">homeshick</a> dotfiles package manager. 
          I love talking tech and drinking ['coffee', 'tea', 'whiskey', 'beer']. If you're in the NYC area feel free to reach out over <a href="https://twitter.com/dannyzen">Twitter</a>.
          </p>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
