import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/dannyzen" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/dannyzen" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://linkedin.com/dannyrosen" className="icon fa-linkedin"><span className="label">linkedin</span></a></li>
                        <li><a href="https://soundcloud.com/dannyrosen" className="icon fa-soundcloud"><span className="label">soundcloud</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
