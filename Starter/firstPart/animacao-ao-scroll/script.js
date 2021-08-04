function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');
    
        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove('ativo')
            });
            tabContent[index].classList.add('ativo');
        }
    
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}

function initAccordion () {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'
    
    if(accordionList.length){
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        
        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        
        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion)
        });
    }
}

function initScrollSuave () {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event)  {
        event.preventDefault()
        const href = this.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop
        
        // // forma alternativa
        // window.scrollTo({
            //     top: topo,
            //     behavior: "smooth"
            // })
            
            section.scrollIntoView({
                behavior: "smooth",
                block: 'start',
            });
            
        }
        
        linksInternos.forEach(link => {
            link.addEventListener('click', scrollToSection);
        })
    }
    
    function initScrollAnimation() {
        //Selecting all the elements which have the class 'js-scroll'
        const sections = document.querySelectorAll('.js-scroll')
        
        //If "sections const" catch any element the function will continue
        if(sections.length) {
            const halfOfWindow = window.innerHeight * 0.7
            
            function showElementsOnScroll() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top
                    const isSectionVisible = (sectionTop - halfOfWindow) < 0;
                    
                    isSectionVisible
                        ? section.classList.add('ativo')
                        : section.classList.remove('ativo')
                })
            }
        }
        showElementsOnScroll()
        window.addEventListener('scroll', showElementsOnScroll)
    }
    
    initTabNav()
    initAccordion()
    initScrollSuave()
    initScrollAnimation()