import React from 'react';
import Terminal from "./terminal";
import { useDisclosure } from '@mantine/hooks';
import { TextInput, Modal, Table } from '@mantine/core';

function Skills() {
    const TAGS = ['Python', 'C#', 'C++', 'HTML', 'CSS', 'React', 'JavaScript'];
    const DURATION = 15000;
    const ROWS = 3;
    const TAGS_PER_ROW = 7;

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

    const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
        return (
            <div className='loop-slider' style={{
                '--duration': `${duration}ms`,
                '--direction': reverse ? 'reverse' : 'normal'
            }}>
                <div className='inner'>
                    {children}
                    {children}
                </div>
            </div>
        );
    };

    const Tag = ({text, color}) => (
        <div className='tag' style={{ '--color': color}}>{text}</div>
    );

    const [opened, { open, close }] = useDisclosure(false);

    const courses = [
        { code: 'CPSC 110', institution: 'UBC', Progress: 'Completed', name: 'Computation, Programs, and Programming' },
        { code: 'CPSC 121', institution: 'UBC', Progress: 'Completed', name: 'Models of Computation' },
        { code: 'CPSC 210', institution: 'UBC', Progress: 'Completed', name: 'Software Construction' },
        { code: 'CPSC 221', institution: 'UBC', Progress: 'Current', name: 'Basic Algorithm and Data Structures'},
        { code: 'CPSC 213', institution: 'UBC', Progress: 'Current', name: 'Introduction to Computer Systems'},
        { code: 'MATH 200', institution: 'UBC', Progress: 'Completed', name: 'Calculus III' },
        { code: 'MATH 221', institution: 'UBC', Progress: 'Completed', name: 'Matrix Algebra' },
        { code: 'MATH 302', institution: 'UBC', Progress: 'Completed', name: 'Introduction to Probability'},
        { code: 'DSCI 100', institution: 'UBC', Progress: 'Completed', name: 'Introduction to Data Science'},
    ];

    const rows = courses.map((course) => (
        <tr key={course.name}>
            <td>{course.code}</td>
            <td>{course.name}</td>
            <td>{course.Progress}</td>
            <td>{course.institution}</td>
        </tr>
    ));

    return (
        <div id="skills" className="skills">
            <div className="left-side-skill">
                <header>
                    <h1 className="bn5">Skills & Courses</h1>
                    <p>I am always striving to improve and expand my skill set, and I am committed to staying up-to-date with the latest developments in my industry.</p>
                </header>
                <div className='tag-list '>
                    {[...new Array(ROWS)].map((_, i) => (
                        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
                                <Tag text={tag} key={tag}/>
                            ))}
                        </InfiniteLoopSlider>
                    ))}
                    <div className='fade'/>
                </div>
            </div>
            <Modal size="xl" opened={opened} onClose={close} title="Skills & Coursework" centered>
                <div className="skillsContainer">
                    <div className="skills-left">
                        <h4>Languages</h4>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>R</li>

                        <h4>Web Development</h4>
                        <li>Django</li>
                        <li>React</li>
                        <li>HTML, CSS, JavaScript</li>

                        <h4>Database</h4>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>Oracle Apex</li>
                        <li>MS Access</li>

                        <h4>Tools</h4>
                        <li>Unity</li>
                        <li>Git, GitHub</li>
                        <li>JUnit</li>
                    </div>
                    <div className="skills-right">
                        <h4>Relevant Coursework</h4>
                        <TextInput
                            placeholder="Type here to search by any field"
                            mb="md"
                            // value={search}
                            // onChange={handleSearchChange}
                        />
                        <Table>
                            <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Title</th>
                                <th>Progress</th>
                                <th>University</th>
                            </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </Table>
                    </div>
                </div>
            </Modal>
            <div className="right-side-skill" onClick={open}>
                <p style={{textAlign: "center"}}>view skills and course</p>
                <Terminal title={"Skills | C L I C K - M E |"}
                          input={"skills"}
                          body={"CLICK HERE to view skills and relevant coursework..."}
                          skillVisibility={"flex"}
                          projectVisibility={"none"}/>
            </div>

        </div>
    );
}

export default Skills;