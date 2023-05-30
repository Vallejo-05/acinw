import ColorSchemesExample from "./Navbar";
import WithHeaderExample from "./footer";
import '../pages/xhome.css'
function Sobre(){
    return(
        <div>
            <ColorSchemesExample/>
        <h1 className="titsobre"> Sobre Nós</h1>
        <p className="txtsobre">Nós somos uma nova empresa no mercado de eletrodoméstrico e temos como objetivo agradar todos os cliente
            sem ter nenhum tipo de problema com compra ou entrega, esperamos que você goste da noss loja! 
        </p> <br></br>
        <WithHeaderExample/>
        </div>
    )
}
export default Sobre;