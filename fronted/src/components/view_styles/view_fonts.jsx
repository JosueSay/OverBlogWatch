import '../../styles/fonts.css'
import '../../styles/colors.css'

function viewFonts (){
    return (
        <div className='Fuentes'>
            {/* Aplica las fuentes de Aller */}
            <div classNmae='Aller'>
                <h1 style={{ fontFamily: 'Aller BD' }} className='c_white'>Aller BD</h1>
                <h1 style={{ fontFamily: 'Aller BDIT' }} className='c_white'>Aller BDIT</h1>
                <h1 style={{ fontFamily: 'Aller IT' }} className='c_white'>Aller IT</h1>
                <h1 style={{ fontFamily: 'Aller LT' }} className='c_white'>Aller LT</h1>
                <h1 style={{ fontFamily: 'Aller LTIT' }} className='c_white'>Aller LTIT</h1>
                <h1 style={{ fontFamily: 'Aller RG' }} className='c_white'>Aller RG</h1>
                <h1 style={{ fontFamily: 'Aller Display' }} className='c_white'>Aller Display</h1>
            </div>

            {/* Aplica las fuentes de BloggerSans */}
            <div classNmae='BloggerSans'>
                <h1 style={{ fontFamily: 'Blogger Sans' }} className='c_white'>Blogger Sans</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Bold' }} className='c_white'>Blogger Sans Bold</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Italic' }} className='c_white'>Blogger Sans Italic</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Light' }} className='c_white'>Blogger Sans Light</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Bold Italic' }} className='c_white'>Blogger Sans Bold Italic</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Light Italic' }} className='c_white'>Blogger Sans Light Italic</h1>
                <h1 style={{ fontFamily: 'Blogger Sans Medium' }} className='c_white'>Blogger Sans Medium</h1>
                <h1 style={{ fontFamily: 'BloggerSans Medium Italic' }} className='c_white'>Blogger Sans Medium Italic</h1>  
            </div>

            {/* Aplica las fuentes de QuickSand */}
            <div classNmae='QuickSand'>
                <h1 style={{ fontFamily: 'Quicksand Dash' }} className='c_white'>Quicksand Dash</h1>
                <h1 style={{ fontFamily: 'Quicksand bold' }} className='c_white'>Quicksand bold</h1>
                <h1 style={{ fontFamily: 'Quicksand Bold Italic' }} className='c_white'>Quicksand Bold Italic</h1>
                <h1 style={{ fontFamily: 'Quicksand Italic' }} className='c_white'>Quicksand Italic</h1>
                <h1 style={{ fontFamily: 'Quicksand Light' }} className='c_white'>Quicksand Light</h1>
                <h1 style={{ fontFamily: 'Quicksand Light Italic' }} className='c_white'>Quicksand Light Italic</h1>
                <h1 style={{ fontFamily: 'Quicksand Regular' }} className='c_white'>Quicksand Regular</h1>  
            </div>
        </div>
      )
}

export default viewFonts

