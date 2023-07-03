import './index.css'

const ScoreCard = props => {
  const {score, restartClicked} = props

  const onClickRestart = () => {
    restartClicked()
  }

  return (
    <div className="score-card">
      <div className="score-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="trophy-img"
          alt="trophy"
        />

        <p className="your-score-text">YOUR SCORE</p>
        <p className="score-show">{score}</p>
        <button className="restart-btn" type="button" onClick={onClickRestart}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="restart-img"
          />
          <p>PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
