import './welcome.styl'

function Welcome(){
  const texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ': )'];
  const numberOfParticles = 12;
  return<>
  <div>
      {texts.map((text, i) => (
        <div key={i} className={`background${i}`}>
          <div className={`text${i}`}>{text}</div>
          <div className={`frame${i}`}>
            {Array.from({ length: numberOfParticles }).map((_, j) => (
              <div key={j} className={`particle${i}${j}`}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
}

export default Welcome