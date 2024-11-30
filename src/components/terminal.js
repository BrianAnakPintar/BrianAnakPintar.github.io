import React from 'react';

function Terminal(props) {
    const title = props.title;
    const input = props.input;

    return (
        <div className="terminal-container">
            <div className="container_terminal"></div>
            <div className="terminal_toolbar">
                <div className="butt">
                    <button className="btn btn-color"></button>
                    <button className="btn"></button>
                    <button className="btn"></button>
                </div>
                <p className="user">{title}</p>
            </div>
            <div className="terminal_body">
                <div className="terminal_promt">
                    <span className="terminal_user">{input}</span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">cat fun_facts.txt</span>
                </div>
                <ul>
                    <li> I like teaching.</li>
                    <li> I like to cook.</li>
                    <li> I use neovim, btw.</li>
                </ul>
                    <div className="terminal_promt">
                    <span className="terminal_user">{input}</span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">{}</span>
                    <span className="terminal_cursor"></span>
                </div>
            </div>
        </div>
    );
}

export default Terminal;