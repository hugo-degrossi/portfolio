
import React, {useRef, useEffect, useState} from 'react';


export default  function FadeInSection(props) {
    const [isVisible, setIsVisible] = React.useState(false);
    const domRef = useRef();
    const [isLoaded, setIsLoaded] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true)
        }, props.waitingTime);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!startAnimation) {return}

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {setIsVisible(entry.isIntersecting)});
        });
        observer.observe(domRef.current);
        return () => {
            observer.disconnect()
        }
    }, [startAnimation]);

    useEffect(() => {
        if (isVisible) {setIsLoaded(true)}
    }, [isVisible]);

    return (
        <div
            className={`fade-in-section ${isLoaded ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>

    );
}
