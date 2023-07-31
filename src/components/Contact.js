import React from 'react';

function Contact(props) {
    return (
        <div id="contact" className="contacts">
            <div className="big-text">
                <h1>Let<span className="blue">'</span>s <span className="blue">Talk</span>.</h1>
            </div>
            <div className="smol-text">
                <p>If you have a request, question or just want to say hi, please don't hesitate to contact me.
                    I will do my best to respond to your message as soon as possible.</p>
            </div>
            <a href="mailto:brianfransis.moniaga@gmail.com" className="btn41-43 btn-43">Contact Me!</a>

        </div>
    );
}

export default Contact;