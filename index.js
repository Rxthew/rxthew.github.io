const currentProject = function(){
    const CurrentProjectBuilder = class {
        constructor(current){
            this._current = current;
        }
    
        get current(){
            return this._current;
        }
    
        set current(newCurrent){
            this._current = newCurrent;
        }

    };
    
    const ProjectDetails = class {
        constructor(srcs,alts,title,description,links,tools){
            this.srcs = srcs;
            this.alts = alts;
            this.title = title;
            this.description = description;
            this.links = links;
            this.tools = tools;
        }
    
        get previous(){
            return this._previous
        }
    
        set previous(newPrevious){
            !this._previous ? this._previous = newPrevious : false
        }
    
        get next(){
            return this._next
        }
    
        set next(newNext){
            !this._next ? this._next = newNext : false
        }
    };
    
    
    const iconsData =  {
            css3: {src: "assets/Icons/css3.svg", alt: "Css3"},
            ejs: {src: "assets/Icons/ejs.svg", alt: "Ejs"},
            html5: {src: "assets/Icons/html5.svg", alt: "Html5"},
            javascript: {src: "assets/Icons/javascript.svg", alt: "JavaScript"},
            sequelize: {src: "assets/Icons/sequelize.svg", alt: "Sequelize"},
            tailwindcss: {src: "assets/Icons/tailwindcss.svg", alt: "TailwindCSS"},
            webpack: {src: "assets/Icons/webpack.svg", alt: "Webpack"},
            typescript:   {src: "assets/Icons/typescript.svg", alt: "TypeScript"},
            express:    {src: "assets/Icons/express.svg", alt: "Express"},
            mongodb:    {src: "assets/Icons/mongodb.svg", alt: "Mongodb"},
            react:      {src: "assets/Icons/react.svg", alt: "React"},
            passport:      {src: "assets/Icons/passport.svg", alt: "Passport"},
            mui:      {src: "assets/Icons/mui.svg", alt: "Mui"},
            reactrouter:      {src: "assets/Icons/reactrouter.svg", alt: "React Router"},
            jest:      {src: "assets/Icons/jest.svg", alt: "Jest"}
    };
    
    const projectIcons = function(...keys){
        return keys.map(key => iconsData[key]);
    };
    
    
    const whoSaidWhat = new ProjectDetails(
                {wide: "./assets/screenshots/wsw.png", mobile: "./assets/screenshots/wsw_mobile.png"}, 
                {wide: "Wide screenshot of project: WhosaidWhat " , mobile:"Mobile screenshot of project: WhosaidWhat "},
                "Who Said What",
                "Template blog with authentication served via a RESTful API",
                {live: "https://rxthew.github.io/whosaidwhat", repo: "https://www.github.com/rxthew/whosaidwhatapi"}, 
                projectIcons('typescript','express','mongodb','react','passport','mui','reactrouter','jest')
                
    );
    
    const foot = new ProjectDetails(
                {wide: "./assets/screenshots/foot.png", mobile: "./assets/screenshots/foot_mobile.png"}, 
                {wide: "Wide screenshot of project: Footman " , mobile:"Mobile screenshot of project: Footman "},
                "Footman",
                "Football-themed CRUD app",
                {live: "https://footman.up.railway.app", repo: "https://www.github.com/rxthew/footman"},
                projectIcons('typescript','express','sequelize','ejs')
                
    
    );
    
    
    const marketplace = new ProjectDetails(
        {wide: "./assets/screenshots/marketplace.png", mobile: "./assets/screenshots/marketplace_mobile.png"}, 
        {wide: "Wide screenshot of project: Marketplace " , mobile:"Mobile screenshot of project: Marketplace "},
        "Marketplace",
        "E-commerce front-end simulation",
        {live: "https://rxthew.github.io/marketplace", repo: "https://www.github.com/rxthew/marketplace"},
        projectIcons('typescript','react','reactrouter','tailwindcss','jest')
        
    
    );
    
    const meal = new ProjectDetails(
        {wide: "./assets/screenshots/meal.png", mobile: "./assets/screenshots/meal_mobile.png"}, 
        {wide: "Wide screenshot of project: Mealwars " , mobile:"Mobile screenshot of project: Mealwars "},
        "Mealwars",
        "Meal comparison tool",
        {live: "https://rxthew.github.io/mealwars", repo: "https://www.github.com/rxthew/mealwars"},
        projectIcons('typescript','react','css3')
        
    
    );
    
    const journal = new ProjectDetails(
        {wide: "./assets/screenshots/journal.png", mobile: "./assets/screenshots/journal_mobile.png"}, 
        {wide: "Wide screenshot of project: Journal maker " , mobile:"Mobile screenshot of project: Journal maker "},
        "Journalmaker",
        "Journal template generator",
        {live: "https://rxthew.github.io/journalmaker", repo: "https://www.github.com/rxthew/journalmaker"},
        projectIcons('typescript','react','css3')
        
    
    );
    
    const weather = new ProjectDetails(
        {wide: "./assets/screenshots/weather.png", mobile: "./assets/screenshots/weather_mobile.png"}, 
        {wide: "Wide screenshot of project: Weather forecast " , mobile:"Mobile screenshot of project: Weather foreacast "},
        "Weather Forecast",
        "Weather forecast renderer",
        {live: "https://rxthew.github.io/weatherAPI", repo: "https://www.github.com/rxthew/weatherAPI"},
        projectIcons('html5', 'css3', 'javascript', 'webpack')
        
    
    );
    
    const projectPointers = {
        "Who Said What": {p: foot, n: weather},
        "Footman": {p: marketplace, n: whoSaidWhat},
        "Marketplace": {p: meal, n: foot},
        "Mealwars": {p: journal, n: marketplace},
        "Journalmaker": {p: weather, n: meal},
        "Weather Forecast": {p: whoSaidWhat, n: journal}
    };
    
    
    [whoSaidWhat, foot, marketplace, meal, journal, weather].map((project) => project.previous = projectPointers[project.title].p);
    [whoSaidWhat, foot, marketplace, meal, journal, weather].map((project) => project.next = projectPointers[project.title].n)

  

    return new CurrentProjectBuilder(whoSaidWhat);

};



const projectHelpers = function(){

    const projectDOMtargets = function(){ 

        const images = Array.from(document.querySelectorAll('#devices img'));
        const toolsContainer = document.querySelector('ul');
        const title = Array.from(document.querySelectorAll('#project_details h2'))[0]
        const description = Array.from(document.querySelectorAll('#project_details p'))[0];
        const links = Array.from(document.querySelectorAll('#project_details a'))
    
        return {
            images, toolsContainer,title,description,links
        }
    
    };
    
    const changeDeviceImages = function(currentProject, imageElements){
        const {alts, srcs} = currentProject;
        const indexedAlts = [alts.mobile, alts.wide];
        const indexedSrcs = [srcs.mobile, srcs.wide];
        imageElements.map(function(element,index){
            element.setAttribute('src',indexedSrcs[index]); 
            element.setAttribute('alt',indexedAlts[index])
        });
        return 
    };
    
    const changeTools = function(currentProject, toolsContainer){
    
        const clearPreviousTools = () => Array.from(toolsContainer.children).map(child => child.remove());
        
        const domTool = function(tool){
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');
            img.setAttribute('src',tool.src);
            img.setAttribute('alt',`${tool.alt} logo`);
            p.textContent = tool.alt;
            li.appendChild(img);
            li.appendChild(p);
            return li;
        };
    
        const generateNewTools = function(){
            const currentTools = currentProject.tools;
            const newTools = currentTools.map(domTool);
            newTools.map(tool => toolsContainer.appendChild(tool));
        };
    
        clearPreviousTools();
        generateNewTools()
        return
    };
    
    const changeTitle = function(currentProject, title){
        title.textContent = currentProject.title;
        return
    
    };
    
    const changeDescription = function(currentProject, description){
        description.textContent = currentProject.description;
        return
    
    };
    
    const changeLinks = function(currentProject,linkElements){
        const {links} = currentProject;
        const indexedLinks = [links.repo, links.live];
        linkElements.map(function(element,index){element.setAttribute('href',indexedLinks[index])});
        return
    
    };

    const toggleIndicator = function(pointer){

        const sharedValues = function(){
            const highlighted = document.querySelector('.highlighted');
            const indicators = Array.from(document.querySelectorAll('#project_tooling ol > li'));
            const startIndex = 0;
            const endIndex = indicators.length - 1;
            const highlightedIndex = indicators.indexOf(highlighted);
            return {
                highlighted,
                highlightedIndex,
                indicators,
                endIndex,
                startIndex,
            }

        };

        const changeHighlighted = function(targetElement){
            const removeHighlighted = function(){
                const { highlighted } = sharedValues();
                highlighted.classList.remove('highlighted')
            };
    
            const addHighlighted = function(targetElement){
                targetElement.classList.add('highlighted')
            };
            removeHighlighted();
            addHighlighted(targetElement);
        };

        
        const backwardFlow = function(){
            const { startIndex, endIndex, highlightedIndex, indicators } = sharedValues();
            highlightedIndex <= startIndex ? changeHighlighted(indicators[endIndex]) : changeHighlighted(indicators[highlightedIndex - 1]);
        };

        const forwardFlow = function(){
            const { startIndex, endIndex, highlightedIndex, indicators } = sharedValues();
            highlightedIndex >= endIndex ? changeHighlighted(indicators[startIndex]) : changeHighlighted(indicators[highlightedIndex + 1]);
        };

        pointer === 'next' ? forwardFlow() : backwardFlow()

    };
    
    
    const changeProject = function(currentProject, pointer){
    
        const newProject = currentProject.current[pointer];
    
        const {images,toolsContainer,title,description,links} = projectDOMtargets();
        changeDeviceImages(newProject, images);
        changeTools(newProject, toolsContainer);
        changeTitle(newProject,title);
        changeDescription(newProject, description);
        changeLinks(newProject,links);
        toggleIndicator(pointer);
    
        currentProject.current = newProject;
    };

    const changeToSpecificProject = function(currentProject, chosenTitle){
        while(currentProject.current.title !== chosenTitle){
            changeProject(currentProject, 'next')
        }
        return
    };

    const resetProjectDetails = function(currentProject){
        while(currentProject.current.title !== "Who Said What"){
            changeProject(currentProject, 'next')
        }
        return
    };

    

    return {
        changeProject,
        changeToSpecificProject,
        resetProjectDetails
        
    }

};


const aboutHelpers = function(){

    
    const isWideScreen = function(){
        const isWideScreenWidth = window.matchMedia('(min-width:800px)');
        return isWideScreenWidth.matches
    }

   

    const closeAllDetails = function(){ 
        const detailses = Array.from(document.querySelectorAll('details'));
        detailses.map(d => d.removeAttribute('open'));
        return
    };


    const removeAllContracted = function(){
        Array.from(document.querySelectorAll('.contracted')).map(e => e.classList.remove('contracted'));
        
    };

    const toggleContractedState = function(targetElement,det){
        det.hasAttribute('open') ?
            targetElement.classList.add('contracted')
        :
            targetElement.classList.remove('contracted')
    
    };

    return {
        closeAllDetails,
        isWideScreen,
        removeAllContracted,
        toggleContractedState,

    }

};

const animationStatus = (function(){
    const status = {
        notAnimating: true
    };
    
    const getStatus = function(){ return status.notAnimating};
    const setStatus = function(){ 
        status.notAnimating = !status.notAnimating;
        return getStatus()
    }

    return {
        getStatus,
        setStatus
    }

})(); 

const headerHelpers = function(project){

    const postAnimationHandler = function(postAnimationAction, targetElement){
        
        const executeActionOnce = function(){
            postAnimationAction()
            targetElement.removeEventListener('animationend',executeActionOnce);
        };

       targetElement.addEventListener('animationend',executeActionOnce);
    };

    const identifyButtonRelations = function(buttonElement){

        const getButtonIndex = function(){
    
            const header = document.querySelector('header');
            const buttons = Array.from(header.querySelectorAll('button'))
            const index = buttons.findIndex(e => e === buttonElement);
            return index
        };
    
        const getArticle = function(buttonIndex){
            const articles = Array.from(document.querySelectorAll('article'));
            const article = articles[buttonIndex];
            return article;
        };
    
        const article = getArticle(getButtonIndex());
        const svgSibling = buttonElement.nextElementSibling;
        const turbulence = svgSibling.querySelector('feTurbulence');
    
        
      
        return {
            article,
            svgSibling,
            turbulence
        }
    
    }

    const addDefault = function(){
        const main = document.querySelector('main');
        main.classList.add('default')
    };

    const removeDefault = function(){
        const main = document.querySelector('main');
        main.classList.remove('default');
    };
    
    const makeVisible = function(element){
         element.classList.remove('hidden');
    };
    
    const makeInvisible = function(element){
         element.classList.add('hidden');
    };

    const makeNone = function(element){
        element.classList.add('none');

    };

    const removeNone = function(element){
        element.classList.remove('none');

    };
    
    const expandArticle = function(article){
        article.classList.remove('closed');
        article.classList.add('open');
    };
    
    const contractArticle = function(article){
        article.classList.remove('open');
        article.classList.add('closed');
    };
    
    const addHighlight = function(button){
        button.classList.add('bold');
    
    };
    
    const removeHighlight = function(button){
        button.classList.remove('bold');
    
    };
    
    const setFrequency = function(feTurbulence){
        const pseudoRandomAttempt = Math.round((Math.random() * 0.7) * 10)/10;
        const frequency = pseudoRandomAttempt > 0.2 ? pseudoRandomAttempt : 0.3;
        feTurbulence.setAttribute('baseFrequency',frequency)
    
    };
    
    const scrollToTop = function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


    const positiveWorkflow = function(button, hiddenElements, turbulence){
        const {noneElements, visibilityElements} = hiddenElements; 
        const { setStatus } = animationStatus;
        const article = identifyButtonRelations(button).article;

        addHighlight(button);
        noneElements.map(removeNone)
        visibilityElements.map(makeVisible);
        setFrequency(turbulence);
        postAnimationHandler(setStatus, article);
        visibilityElements.map(expandArticle);
        removeDefault();
        setStatus();
           
    };


    const negativeWorkflow = function(button, visibleElements){

        const {
            resetProjectDetails
        } = projectHelpers();

        const {
            closeAllDetails,
            removeAllContracted,
        } = aboutHelpers();

        const {noneElements, visibilityElements} = visibleElements;
        const { setStatus } = animationStatus;


        const resetClosedState = function(){ 
            removeHighlight(button);
            noneElements.map(makeNone);
            visibilityElements.map(makeInvisible); 
            resetProjectDetails(project); 
            removeAllContracted();
            closeAllDetails();
            setStatus()
        ;}


        const article = identifyButtonRelations(button).article;
        scrollToTop();
        postAnimationHandler(resetClosedState, article); 
        visibilityElements.map(contractArticle);
        addDefault();
        setStatus()

    };

    const mixedWorkflow = function(turnOff, turnOn){
        const article = document.querySelector('.open');
        postAnimationHandler(() => positiveWorkflow(...turnOn), article)
        negativeWorkflow(...turnOff)
        
    };

    const revertToDefaultHeader = function(){
        const { getStatus } = animationStatus;
        const header = document.querySelector('header');
        const highlighted = header.querySelector('.bold');
        const visible = {noneElements: Array.from(document.querySelectorAll('header svg')), visibilityElements: Array.from(document.querySelectorAll('article'))};
        highlighted && getStatus() ? negativeWorkflow(highlighted, visible) : null;
        return
        

    };

    return {
        identifyButtonRelations,
        mixedWorkflow,
        positiveWorkflow,
        revertToDefaultHeader
    }
    

};

const eventTargets = function(){
    const headerAndChildren = Array.from(document.querySelectorAll('header, header *'));
    const headerButtons = Array.from(document.querySelectorAll('header button'));
    const headerSvgs = Array.from(document.querySelectorAll('header svg'));
    const projectToolingPointers= Array.from(document.querySelectorAll('#project_tooling > div button'));
    const projectToolingPointersSvgs = Array.from(document.querySelectorAll('#project_tooling > div button > svg'));
    const projectToolingProjectButtons = Array.from(document.querySelectorAll('#project_tooling ol button'));
    const projectToolingProjectImages = Array.from(document.querySelectorAll('#project_tooling ol button > img'));
    
    const navSummaries= Array.from(document.querySelectorAll('nav summary'));
     return {
         headerAndChildren,
         headerButtons,
         headerSvgs,
         projectToolingPointers,
         projectToolingProjectButtons,
         projectToolingProjectImages,
         projectToolingPointersSvgs,
         navSummaries
      
     }
 };


const project = currentProject();


const clickSpecificProject = function(event){
    const {changeToSpecificProject} = projectHelpers();

    const newProject = event.target.id;
    changeToSpecificProject(project,newProject);
};

const clickSpecificProjectImage = function(event){
    const button = event.target.parentElement;
    button.click()
};

const clickProjectPointer = function(event){

    const {changeProject} = projectHelpers();

    const pointer = event.target.id; 
    changeProject(project,pointer)
};

const clickProjectSvg = function(event){
    const button = event.target.nodeName === "svg" ? event.target.parentElement : event.target.closest('svg').parentElement;
    button.click()
};


const toggleStatefulText = function(event){

    const {
        toggleContractedState,
    } = aboutHelpers();

    const details = event.target.parentElement;
    const p = details.nextElementSibling;

    toggleContractedState(p,details);

};


const clickHeaderButton = function(event){

    const {
        identifyButtonRelations,
        mixedWorkflow,
        positiveWorkflow,
        revertToDefaultHeader
    } = headerHelpers(project);

    const { getStatus } = animationStatus;
    
    const produceOnAndOffSwitches = function(){
        const header = document.querySelector('header');
        const relations = identifyButtonRelations(event.target);
        const currentBoldButton = header.querySelector('.bold');
        const otherRelations = currentBoldButton ? identifyButtonRelations(currentBoldButton) : null;
        const turnOn = [event.target, {visibilityElements: [relations.article], noneElements: [relations.svgSibling]},relations.turbulence];
        const turnOff = otherRelations && [currentBoldButton, {visibilityElements: [otherRelations.article], noneElements: [otherRelations.svgSibling]}];
        return {
            turnOn,
            turnOff
        }        
    };

    

    const openArticle = function(){
        const {turnOff, turnOn} = produceOnAndOffSwitches();
        const areOtherArticlesOpen = turnOff;
        return areOtherArticlesOpen ? mixedWorkflow(turnOff, turnOn) : positiveWorkflow(...turnOn)
    }

    const isThisArticleAlreadyOpen = event.target.classList.contains('bold');
    const executeAction = function(){
        return isThisArticleAlreadyOpen ?  revertToDefaultHeader() : openArticle()

    };
     
    return getStatus() ? executeAction() : false;
}; 

const clickHeaderSvg = function(event){
    const button = event.target.nodeName === "svg" ? event.target.previousElementSibling : event.target.closest('svg').previousElementSibling;
    button.click()
};


const clickEventListener = function(event){      
    const {
        headerAndChildren,
        headerButtons, 
        headerSvgs,
        projectToolingProjectButtons,
        projectToolingProjectImages,
        projectToolingPointers, 
        projectToolingPointersSvgs,
        navSummaries, 
        } = eventTargets();  
        
    const { revertToDefaultHeader } = headerHelpers(project);

    switch(true){
        case headerButtons.includes(event.target): clickHeaderButton(event);
        break
        case headerSvgs.includes(event.target) || headerSvgs.includes(event.target.closest('svg')): clickHeaderSvg(event)
        break
        case headerAndChildren.includes(event.target): revertToDefaultHeader();
        break
        case projectToolingProjectButtons.includes(event.target) : clickSpecificProject(event);
        break
        case projectToolingProjectImages.includes(event.target) : clickSpecificProjectImage(event);
        break
        case projectToolingPointers.includes(event.target): clickProjectPointer(event);
        break
        case projectToolingPointersSvgs.includes(event.target) || projectToolingPointersSvgs.includes(event.target.closest('svg')): clickProjectSvg(event)
        break
        case navSummaries.includes(event.target): toggleStatefulText(event);
        break
    }
    

};


const addListenerToBody = function(){
    const body = document.querySelector('body');
    body.addEventListener('click', clickEventListener)
};

addListenerToBody()

