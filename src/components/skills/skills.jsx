import React from 'react';
import { makeStyles } from '@mui/styles';
import "../../style/skills.scss"
import { ReactSVG } from 'react-svg'
import AngularLogo from '../../media/icons/angularjs-plain.svg'
import JavaLogo from '../../media/icons/java-plain.svg'
import JavascriptLogo from '../../media/icons/javascript-plain.svg'
import CSharpLogo from '../../media/icons/csharp-plain.svg'
import CLogo from '../../media/icons/c-plain.svg'
import ReactLogo from '../../media/icons/react-original.svg'
import DjangoLogo from '../../media/icons/django-plain.svg'
import TypeScriptLogo from '../../media/icons/typescript-plain.svg'
import PythonLogo from '../../media/icons/python-original.svg'
import SymfonyLogo from '../../media/icons/symfony-original.svg'
import RubyLogo from '../../media/icons/ruby-plain.svg'

const useStyles = makeStyles((theme) => ({
    skill_box:{
        width: '30px',
        height: '30px',
    }

}));

const skillSet = [
    {name: 'React', icon: ReactLogo},
    {name: 'Angular', icon: AngularLogo},
    {name: 'Typescript', icon: TypeScriptLogo},
    {name: 'Javascript', icon: JavascriptLogo},
    {name: 'Python', icon: PythonLogo},
    {name: 'Django', icon: DjangoLogo},
    {name: 'Symfony', icon: SymfonyLogo},
    {name: 'Ruby', icon: RubyLogo},
    {name: 'C', icon: CLogo},
    {name: 'C#', icon: CSharpLogo},
    {name: 'Java', icon: JavaLogo},
]


function Skills() {
    const classes = useStyles();

    return (
                <div className="slider">
                    <div className="slide-track">
                        {skillSet.map((skill) => {
                            return <div className="slide">
                                <ReactSVG className={classes.skill_box} src={skill.icon} />
                            </div>
                        })}
                        {skillSet.map((skill) => {
                            return <div className="slide">
                                <ReactSVG className={classes.skill_box} src={skill.icon} />
                            </div>
                        })}
                    </div>
                </div>


    );
}

export default Skills;


/*
*
                    <div className={classes.container}>
                        <div className={classes.list_container}>
                            <div className={classes.list_title}>LANGUAGES</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item}>Javascript</li>
                                <li className={classes.list_item}>NodeJS</li>
                                <li className={classes.list_item}>Python</li>
                                <li className={classes.list_item}>Java</li>
                                <li className={classes.list_item}>C#</li>
                                <li className={classes.list_item}>C</li>
                            </ul>
                        </div>
                        <div className={classes.list_container}>
                            <div className={classes.list_title}>FRAMEWORK</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item_title}>FRONTEND</li>
                                <li className={classes.list_item}>React</li>
                                <li className={classes.list_item}>Angular</li>
                                <li className={classes.list_item_title}>BACKEND</li>
                                <li className={classes.list_item}>Spring Boot</li>
                                <li className={classes.list_item}>Django</li>
                                <li className={classes.list_item}>Symfony</li>
                            </ul>
                        </div>

                        <div className={classes.list_container}>
                            <div className={classes.list_title}>DATABASE</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item}>PostgreSQL</li>
                                <li className={classes.list_item}>MongoDB</li>
                                <li className={classes.list_item}>Oracle</li>
                            </ul>
                        </div>
                    </div>
*
* */
