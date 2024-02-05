export const AnimatedBorder = () => {
    return(
        <>  
        <div className="absolute top-0 trr" style={{
            width: 2+'px',
            height: 150+'px',
            right: 0
        }}></div>
        <div className="line absolute top-0 trt" style={{
            width: 150+'px',
            height: 2+'px',
            right: 0
        }}></div>
        <div className="absolute bottom-0 bll" style={{
            width: 2+'px',
            height: 150+'px',
            left: 0
        }}></div>
        <div className="line absolute bottom-0 blb" style={{
            width: 150+'px',
            height: 2+'px',
            left: 0
        }}></div>
    </>
    )
}