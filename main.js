const container = document.querySelector('.js-container');
const maxSnowFlakes = 50;
const snowflakes = [];


const createSnowfall = () => {

    if(snowflakes.length < maxSnowFlakes) {

        const snowflake = document.createElement('div');
        let transformValue = Math.random() * 360;
    
        snowflake.classList.add('snowflake');
    
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = Math.random() * 15 + 5 + 'px';
        snowflake.style.animationDuration =Math.random() * 15 + 7 + 's';
        snowflake.style.transform = `rotate(${transformValue}deg)`;
    
        snowflake.textContent = '🍁';
    
        container.append(snowflake);
        snowflakes.push(snowflake);
    
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            snowflakes.splice(snowflakes.indexOf(snowflake), 1);
        })
    }
};

setInterval(createSnowfall, 50);