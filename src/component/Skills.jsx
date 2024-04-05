import React, { Component, useState, useEffect } from 'react'

function Skills() {
    const [css, setCss] = useState(0);
    const [ htm, setHtm] = useState(0);
    const [ jsc, setJsc] = useState(0);
    const [ laravel, setLaravel] = useState(0);
    const [ jaj, setJaj] = useState(0);
    const [ nodeex, setNoneex] = useState(0);
    const [ git, setGit] = useState(0);
    const [ sql, setSql] = useState(0);
    const [ reactjs, setReactjs] = useState(0);
    const [ ci, setCi] = useState(0);
    const [ mongo, setMongo] = useState(0);
    const [ photoshop, setPhotoshop] = useState(0);
    const [ docker, setDocker] = useState(0);
    const [ ubuntu, setUbuntu] = useState(0);
    const [ postman, setPostman] = useState(0);
    const [ issabel, setIssabel] = useState(0);
    const [ php, setPhp] = useState(0);
    useEffect(() => {
        
        let timer = setTimeout(() => {
                css==90 ? '' : setCss(timer);
                htm==100 ?  ''  : setHtm(timer)
                jsc==95 ?  ''  : setJsc(timer)
                laravel==80 ?  ''  : setLaravel(timer)
                jaj==100 ?  ''  : setJaj(timer)
                nodeex==75 ?  ''  : setNoneex(timer)
                git==80 ?  ''  : setGit(timer)
                sql==90 ?  ''  : setSql(timer)
                reactjs==85 ?  ''  : setReactjs(timer)
                ci==75 ?  ''  : setCi(timer)
                mongo==80 ?  ''  : setMongo(timer)
                photoshop==76 ?  ''  : setPhotoshop(timer)
                docker==70 ?  ''  : setDocker(timer)
                ubuntu==75 ?  ''  : setUbuntu(timer)
                postman==85 ?  ''  : setPostman(timer)
                issabel==85 ?  ''  : setIssabel(timer)
                php==95 ?  ''  : setPhp(timer)
        }, 40);
        timer==101 ? clearTimeout(timer) :null;
        
      });
    
   
    return (
        <>
            <div className="skills container mb-3 ">
                <div className="section-title text-white mt-3 ">
                    <h2>SKILLS</h2>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill"> PHP<i className="val">{php}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: php + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">HTML <i className="val">{htm}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: htm + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS | BOOTSTRAP <i className="val">{css}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: css + "%"}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">{jsc}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: jsc + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JQuery | Ajax | JSON <i className="val">{jaj}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: jaj + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                    
                        <div className="progress">
                            <span className="skill">ReactJS <i className="val">{reactjs}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: reactjs + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">NodeJS | ExpressJS | RestAPI <i className="val">{nodeex}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: nodeex + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">Laravel | Vue | RestAPI <i className="val">{laravel}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: laravel + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CodeIgniter <i className="val">{ci}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: ci + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Git | Github <i className="val">{git}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: git + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> MySQL | MariaDB | MSSQL<i className="val">{sql}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: sql + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> MongoDB<i className="val">{mongo}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" style={{width: mongo + "%"}} role="progressbar"  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="skills container mb-3 ">
                <div className="section-title text-white mt-3 ">
                    <h2>APPLICATIONS</h2>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">Photoshop <i className="photoshop float-right">{photoshop}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar2" style={{width: photoshop + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Ubuntu <i className="photoshop float-right">{ubuntu}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar2" style={{width: ubuntu + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Issabel PBX Modules <i className="photoshop float-right">{issabel}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar2" style={{width: issabel + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">Docker <i className="photoshop float-right">{docker}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar2" style={{width: docker + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Postman <i className="photoshop float-right">{postman}%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar2" style={{width: postman + "%"}} role="progressbar" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Skills



