import React, { useEffect } from 'react'
import { CountUp } from './CountUp';

function FadeIn(id) {

    useEffect(() => {

          let scrollTriggers = document.querySelectorAll(id);
          let array = Array.from(scrollTriggers);

          //Enters in viewport
          window.addEventListener("scroll", () => {

            array.forEach((trigger) => {
                var top = trigger.getBoundingClientRect().top;
                let index = array.indexOf(trigger)
                if (top < window.innerHeight -50 && trigger.classList.contains('toShow')) {
                    trigger.classList.add('fade-in');
                    array.splice(index, 1);
                }
                if (top < window.innerHeight && trigger.classList.contains('CountUp')) {
                    CountUp(trigger);
                    array.splice(index, 1);
                }
                if (array == 0) {
                    window.removeEventListener("scroll", null);
                }
            })
          })

        }





)}

export default FadeIn
