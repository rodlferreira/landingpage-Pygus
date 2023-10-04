import './App.css'
import logo from '/logo.svg';
import grande from '/pinguimGrande.svg';
import fundo from '/fundo.svg';
import mere from '/mere.jpeg';

function App() {
  return (
    <>
      <img src={fundo} className='planoFundo' />
      <div className='head'>
        <div className='header'>
          <img src={logo} className='logo' />
          <p className='menu'>
            <a href="#section1" className='item'>Quem Somos</a>
            <a className='item'>Saiba mais</a>
            <a className='item'>Contato</a>
          </p>
        </div>
        <div className='subHeader'>
          <div className='texto'>
            <h2 className='intro'>PYGUS aplicativo para o tratamento de crianças com desvio fonológico </h2>
            <span className='sub'>Pygus é um aplicativo desenvolvido para auxiliar o fonoaudiólogo no
              tratamento de desvio fonológico. O App proporciona um ambiente lúdico e dinâmico para que
              a criança automatize o fonema instalado. Tudo isso com o auxílio do nosso querido pinguim,
              o “Pygus”. </span>
            <div className='divButton'>
              <button className='quemSomos'>Quem somos</button>
            </div>
          </div>
          <div className='divPinguimGrande'>
            <img src={grande} className='pinguimGrande' />
          </div>
        </div>
      </div>
      <div className='middle'>
        <div id="section1" className='diferencial'>
          {/* <span className='titulo'>Diferencial</span> */}
          <span className='subTitulo'>Pygus é uma startup que surgiu a
            partir do desejo de popularizar o acesso ao tratamento de desvio
            fonológico e facilitar o trabalho dos fonoaudiólogos no acompanhamento
            de seus clientes. A empresa tem como missão oferecer recursos
            tecnológicos que atendam às necessidades de
            profissionais de saúde na relação com seus clientes.
            O App Pygus foi desenvolvido a partir da dissertação de mestrado
            da fonoaudióloga Mére Lander Moura Lins, uma das sócias da empresa. Os bons
            resultados obtidos na pesquisa fundamentaram a construção dos recursos oferecidos
            no aplicativo. Tudo pensado com base em ciência e tecnologia.</span>
        </div>

        <div className='beneficios'>
          <span className='titulo1'>Os Sócios</span>
          <div className='mere'>
            <img className='mereFoto' src={mere} />
          </div>
        </div>
      </div>

      <div className='divVenhaConhecer'>
        <span className='venhaConhecer'>Venha conhecer nosso aplicativo!</span>

        <div className='divyoutube'>
          <iframe width="650" height="320"
            src="https://www.youtube.com/watch?v=SfBnwQv5XfY">
          </iframe>
        </div>
        <div className='contato'>
          <span className='contatoNome'>Mere Lander</span>
        </div>
      </div>
    </>
  )
}

export default App