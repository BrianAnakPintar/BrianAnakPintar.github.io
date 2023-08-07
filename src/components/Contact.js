import React, {useEffect, useRef} from 'react';
import {motion, useAnimation, useInView} from "framer-motion";

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideAnim = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideAnim.start("visible")
        }
    }, [isInView]);

    return (
        <div id="contact" className="contacts">
            <motion.div className="big-text"
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.75}}>
                <h1>Let<span className="blue">'</span>s <span className="blue">Talk</span>.</h1>
                <motion.div variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"} }}
                            initial="hidden"
                            animate={slideAnim}
                            transition={{duration: 0.75, ease: "easeIn"}}
                            style={{
                                position: "absolute",
                                top: 4,
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#0087ca",
                                zIndex: 10,
                            }}
                >
                </motion.div>
            </motion.div>
            <motion.div className="smol-text"
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100},
                            visible: { opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.75, delay:0.5}}>
                <p>If you have a request, question or just want to say hi, please don't hesitate to contact me.
                    I will do my best to respond to your message as soon as possible.</p>
                <motion.div variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"} }}
                            initial="hidden"
                            animate={slideAnim}
                            transition={{duration: 0.75, delay:0.5, ease: "easeIn"}}
                            style={{
                                position: "absolute",
                                top: 4,
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#0087ca",
                                zIndex: 10,
                            }}
                >
                </motion.div>
            </motion.div>
            <motion.a href="mailto:brianfransis.moniaga@gmail.com" className="btn41-43 btn-43"
                      ref={ref}
                      variants={{
                          hidden: { opacity: 0, y: 0},
                          visible: { opacity: 1, y: 0},
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{duration: 0.5, delay:1.5}}>Contact Me!</motion.a>

        </div>
    );
}

export default Contact;