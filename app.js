/* DEFINITION OF OUR FUNCTION */

const sectionClicker = () =>{
    /* INITIALIZATION OF ALL ELEMENTS I NEED TO MAKE IT WORK */
    const sections = document.querySelectorAll('header section');
    const logo = document.querySelector('header #first .first-row a img');
    const sectionNames = document.querySelectorAll('.section-name');
    const spanLetters = document.querySelectorAll('.letters');
    const burger = document.querySelector('.burger');
    const miniSectionContainer = document.querySelector('.mini-sections');
    const miniSections = document.querySelectorAll('.mini-sections .mini-section');
    const sectionSpans = document.querySelectorAll('section .section-name')
    burger.addEventListener('click', e => {
        miniSectionContainer.classList.toggle('burger-clicked');
        burger.classList.toggle('toggle-burger');
        miniSections.forEach(miniSection =>{
            miniSection.addEventListener('click', e=>{
                burger.classList.remove('toggle-burger');
                window.scrollTo({ top: 0, behavior: 'smooth'});
                sectionSpans.forEach(span =>{
                    span.style.display = 'none';
                })
                sections.forEach(section =>{
                    section.classList.remove('focused');
                    if(e.currentTarget.id === 'section-one'){
                        sections[0].classList.add('focused');
                    } else if (e.currentTarget.id === 'section-two'){
                        sections[1].classList.add('focused')
                    } else if (e.currentTarget.id === 'section-three'){
                        sections[2].classList.add('focused')
                    } else if (e.currentTarget.id === 'section-four'){
                        sections[3].classList.add('focused')
                    }
                });
                miniSectionContainer.classList.remove('burger-clicked');

            })
        })
    })
    /* FOR EACH SECTION */
    sections.forEach((section,i) =>{
        /* ON CLICK */
        section.addEventListener('click', (e)=>{
            /* IF INDEX OF THAT SECTION IS EQUAL TO 0 (FIRST WHITE SECTION) */
            if(i===0){
                /* ADD THAT LETTER FROM ALL OF THEM */
                spanLetters.forEach(letter =>{
                    letter.classList.remove('remove-span');
                })
                /* ADD THAT ROTATED TEXT FOR ALL OF THEM */
                sectionNames.forEach(span =>{
                    span.classList.remove('remove-span')
                })
            } else if(i===1){
                /* IF INDEX OF THAT SECTION IS EQUAL TO 1 (SECOND BLUE SECTION) */
                spanLetters.forEach(letter =>{
                    /* SHOW LETTERS FOR ALL OF SECTIONS */
                    letter.classList.remove('remove-span')
                })
                sectionNames.forEach(span =>{
                    span.classList.remove('remove-span')
                })
                spanLetters[0].classList.add('remove-span')
                sectionNames[0].classList.add('remove-span')
            } else if(i===2){
                spanLetters.forEach(letter =>{
                    letter.classList.remove('remove-span')
                })
                sectionNames.forEach(span =>{
                    span.classList.remove('remove-span')
                })
                spanLetters[1].classList.add('remove-span')
                sectionNames[1].classList.add('remove-span')
            } else if(i===3){
                spanLetters.forEach(letter =>{
                    letter.classList.remove('remove-span')
                })
                sectionNames.forEach(span =>{
                    span.classList.remove('remove-span')
                })
                spanLetters[2].classList.add('remove-span')
                sectionNames[2].classList.add('remove-span')
            }

            if(e.currentTarget.classList.contains('focused')){
                return;
            } else{
                sections.forEach((section) => {
                    section.classList.remove('focused')
                })
                e.currentTarget.classList.add('focused');
                window.scrollTo({ top: 0, behavior: 'smooth'});
                console.log(e.currentTarget.id)
                if(e.currentTarget.id === 'first'){
                    sections.forEach(section =>{
                        section.classList.remove('second-clicked');
                        section.classList.remove('third-clicked');
                        section.classList.remove('fourth-clicked');
                    })
                } else if(e.currentTarget.id === 'second'){
                    sections.forEach(section =>{
                        section.classList.remove('third-clicked');
                        section.classList.remove('fourth-clicked')
                        section.classList.add('second-clicked')
                    })
                    e.currentTarget.classList.add('second-clicked');

                } else if(e.currentTarget.id === 'third'){
                    sections.forEach(section =>{
                        section.classList.remove('second-clicked');
                        section.classList.remove('fourth-clicked')
                        section.classList.add('third-clicked')
                    })
                    e.currentTarget.classList.add('third-clicked');

                } else if(e.currentTarget.id === 'fourth'){
                    sections.forEach(section =>{
                        section.classList.remove('third-clicked');
                        section.classList.remove('fourth-clicked')
                        section.classList.add('fourth-clicked')
                    })
                    e.currentTarget.classList.add('fourth-clicked');
                }
          if(e.currentTarget.id!='first'){
               logo.classList.remove('expanded-first');
               logo.classList.add('not-expanded-first');
               secondRow.classList.remove('expanded-text');
               secondRow.classList.add('not-expanded-text');
            } else{
             logo.classList.remove('not-expanded-first');
             logo.classList.add('expanded-first');
             secondRow.classList.add('expanded-text');
             secondRow.classList.remove('not-expanded-text');
            }
            }

          /*  if(e.currentTarget.id!='first'){
               logo.classList.remove('expanded-first');
               logo.classList.add('not-expanded-first');
               secondRow.classList.remove('expanded-text');
               secondRow.classList.add('not-expanded-text');
            } else{
             logo.classList.remove('not-expanded-first');
             logo.classList.add('expanded-first');
             secondRow.classList.add('expanded-text');
             secondRow.classList.remove('not-expanded-text');
            }
            sections.forEach(section =>{
                section.classList.remove('focused-section');
            })
            section.classList.add('focused-section')*/
        })
    })
}
/* CALLING FUNCTION */
sectionClicker();