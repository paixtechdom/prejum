const ScrollPageDown = (stopPos) => {
    let i = 0
    const increase = setInterval(() => {
        i++
        if(i < stopPos){
            document.documentElement.scrollTop += i
        }
        if(i > stopPos){
            clearInterval(increase)
            console.log(i)
        }
    }, 20);
}


export { ScrollPageDown }