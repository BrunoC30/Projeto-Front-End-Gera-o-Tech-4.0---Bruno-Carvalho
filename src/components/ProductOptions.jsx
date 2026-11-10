

const ProductOptions = ({ options, shape, radius, type, title}) => {
    console.log(options,shape,radius,type)
    //caso seja circle radius vai ser ignorada
    radius = (shape == 'circle') ? '100%' : `${radius}px`;
    const sizes = (shape == 'circle') ? {h:'31px',w:'31px'} : {w:'46px',h:'46px'}


    return (<>
            <h4 style={{color:'var(--light-gray)'}}>{title}</h4>
        <ul style={{display:'flex',gap:'10px'}}>
            {type === 'color' ? (
                
                options.map(item => (
                    //caso type seja color, o fundo sera igual ao conteudo
                    <li>
                            <input type="radio" name="opt2" style={{ backgroundColor:item,borderRadius:radius,
                            height:sizes.h, width:sizes.w,appearance:'none'
                            }}/>
                    </li>
                ))

            ) : (
                options.map(item => (
                    //caso type seja text, o valor será igual ao conteudo
                    <li style={{position:'relative',height:sizes.h, width:sizes.w}}>
                        <p style={{position:'absolute',top:'30%',left:'30%'}}>{item}</p>
                        <input type="radio" name="opt" style={{ color:'var(--dark-gray-2)',borderRadius:radius,
                                height:sizes.h, width:sizes.w,appearance:'none'
                    }}/>    
                    </li>
                ))
            )}
        </ul>
    </>);
}

export default ProductOptions;