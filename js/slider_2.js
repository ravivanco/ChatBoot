(function(){
    const sliders2 = [...document.querySelectorAll('.testimony__body__2')];
    const buttonNext2 = document.querySelector('#next__2');
    const buttonBefore2 = document.querySelector('#before__2');

    let value;
    buttonNext2.addEventListener('click', ()=>{
        changePosition(1);
    })
    buttonBefore2.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTestimony2 = document.querySelector('.testimony__body__2--show').dataset.id;

        value = Number(currentTestimony2);
        value+= add;

        sliders2[Number(currentTestimony2)-1].classList.remove('testimony__body__2--show');
        if(value === sliders2.length+1 || value === 0){
            value = value === 0? sliders2.length : 1;
        }

        sliders2[value-1].classList.add('testimony__body__2--show');
        console.log(value)
    }
})();