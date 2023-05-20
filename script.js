let numhtml = document.getElementById('num-html');
let numcss = document.getElementById('num-css');
let numjavascript = document.getElementById('num-javascript');
let numpython = document.getElementById('num-python');
let numbootstrap = document.getElementById('num-bootstrap');

// counter
let counter = 0;

// counterlimits
let counterLimitHtml = 85;
let counterLimitCss = 87;
let counterLimitJavascript = 80;
let counterLimitPython = 75;
let counterLimitBootstrap = 80;


const loadProgressBar = (element, counter, counterLimit) =>{
    setInterval(()=>{
        // stop counter if limit reached otherwise it keeps running
        if(counter === counterLimit){
            clearInterval();
        }else{
            counter += 1;
            element.innerHTML = counter + "%";
        }
    }, 25);
};

// progressbar for HTML
loadProgressBar(numhtml, counter, counterLimitHtml);

// progressbar for CSS
loadProgressBar(numcss, counter, counterLimitCss);

// progressbar for Javascript
loadProgressBar(numjavascript, counter, counterLimitJavascript);

// progressbar for Python
loadProgressBar(numpython, counter, counterLimitPython);

// progressbar for Bootstrap
loadProgressBar(numbootstrap, counter, counterLimitBootstrap);