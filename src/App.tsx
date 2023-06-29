import './App.css'
import logo from '/logo.svg';
import grande from '/pinguimGrande.svg';
import fundo from '/fundo.svg';

function App() {
  return (
    <>
      <img src={fundo} className='planoFundo' />
      <div className='head'>
        <div className='header'>
          <img src={logo} className='logo' />
          <p className='menu'>
            <a className='item'>Home</a>
            <a className='item'>Saiba mais</a>
            <a className='item'>Contato</a>
          </p>
        </div>
        <div className='subHeader'>
          <div className='texto'>
            <h2 className='intro'>PYGUS aplicativo para o tratamento de crianças com desvio fonológico </h2>
            <span className='sub'>O aplicativo foi desenvolvido para o tratamento de crianças com
              desvio fonológico (DF) é um recurso com pistas auditivas e visuais
              que propicia a percepção do fonema trabalhado na estrutura da palavra.
              Isso facilita o entendimento do momento em que deve ser articulado o
              fonema instalado. Além disso, propõem-se um modelo autoexplicativo
              (sombras das sílabas) nas lacunas a serem preenchidas favorecendo a
              execução da atividade e a familiarização com a relação grafema-fonema.</span>
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
        <div className='diferencial'>
          <span className='titulo'>Diferencial</span>
          <span className='subTitulo'>O que o diferencia
            em relação aos existentes no mercado é o estímulo
            visual com cor e brilho no momento da produção
            do som alvo e uma voz infantil como pista auditiva,
            além da não aceitação da sílaba na lacuna que não
            corresponde.</span>
        </div>

        <div className='beneficios'>
          <span className='titulo1'>Benefícios</span>
          <span className='subTitulo1'>Traz benefícios
            como: manter a prática de terapia fora do
            ambiente de consultório; automatizar o fonema
            instalado pelo fonoaudiólogo por meio da
            consciência fonológica;e intensificar o
            processo terapêutico e de aprendizagem.</span>
        </div>
      </div>

      <div className='divVenhaConhecer'>
        <span className='venhaConhecer'>Venha conhecer nosso aplicativo!</span>

        <div className='divyoutube'>
          <iframe width="650" height="320"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
          </iframe>
        </div>

      </div>
    </>
  )
}

export default App
