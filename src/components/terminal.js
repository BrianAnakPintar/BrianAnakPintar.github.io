import React from 'react';
import {Skeleton} from "@mantine/core";

function Terminal(props) {
    const title = props.title;
    const input = props.input;
    const body = props.body;
    const skillVisibility = props.skillVisibility;

    return (
        <div className="container">
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
                    <span className="terminal_bling">{body}</span>
                    <span className="terminal_cursor"></span>
                </div>
                <div className="project-terminal" style={{display: props.projectVisibility, padding: "1rem"}}>
                    <Skeleton height={8} width="70%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="50%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="75%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="35%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="25%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="42%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="15%" radius="xl" animate={false}/>

                </div>
                <div className="project-terminal" style={{display: skillVisibility, padding: "1rem"}}>
                    <Skeleton height={8} width="70%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="50%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="75%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="35%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="25%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="42%" radius="xl" animate={false}/>
                    <Skeleton height={8} width="15%" radius="xl" animate={false}/>
                </div>
            </div>
        </div>
    );
}

export default Terminal;