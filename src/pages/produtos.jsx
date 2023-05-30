import Card from 'react-bootstrap/Card';
import '../pages/xhome.css'

function BasicExample() {
  return (
    <div className='produtos'>
      <div className='geladeira'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://brastemp.vtexassets.com/arquivos/ids/232499/geladeira-brastemp-brh86ar-frontal-aberta-1.jpg?v=638047433044570000" />
      <Card.Body>
        <Card.Title>Geladeira 3 portas </Card.Title>
        <div className='preco'>
        <Card.Text>R$:4240,90</Card.Text>
        </div>
        <Card.Text>
        Geladeira EletroTop Gourmand Frost Free French Door Água e Gelo na Porta 515 litros Inox - BRH86AR • 110V
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      <div className='maquina'>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://brastemp.vtexassets.com/arquivos/ids/234171/Brastemp_Lavadora_BWK12B9_Imagem_Frontal_1.jpg?v=638119860394600000" />
     <Card.Body>
       <Card.Title>Máquina de Lavar</Card.Title>
       <div className='preco'>
        <Card.Text>R$:2378,90</Card.Text>
        </div>
       <Card.Text>
       Máquina de Lavar EletroTop 12Kg Cinza Platinum com Ciclo Tira Manchas Advanced e Ciclo Antibolinha - BWK12B9 
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   <div className='fogao'>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://whirlpool.vtexassets.com/arquivos/ids/184916-400-400/Brastemp_Fogao_BFS5NCR_Imagem_Frontal_1.jpg?v=636547325205500000" />
     <Card.Body>
       <Card.Title>Fogão</Card.Title>
       <div className='preco'>
        <Card.Text>R$:1880,00</Card.Text>
        </div>
       <Card.Text>
       Fogão EletroTop 5 Bocas Cor Inox Com Botões Removíveis E Exclusivo Aro Protetor - BFS5NCR 
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   <div className='frigobar'>
   <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://whirlpool.vtexassets.com/arquivos/ids/218196-400-400/Frigobar-Brastemp-BRA08BB-Frontal-1.jpg?v=637466863298730000" />
     <Card.Body>
       <Card.Title>Frigobar</Card.Title>
       <div className='preco'>
        <Card.Text>R$:2113,00</Card.Text>
        </div>
       <Card.Text>
       Frigobar EletroTop Retrô 76 litros Ice White - BRA08BB
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   </div>
  );
}

export default BasicExample;