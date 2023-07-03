import './index.css'

const TabItem = props => {
  const {tabDetails, selectedTab, clickedTabButton} = props
  const {tabId, displayText} = tabDetails

  const onClickTabBtn = () => {
    clickedTabButton(tabId)
  }

  const activeTabClass = selectedTab === tabId ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-btn ${activeTabClass}`}
        type="button"
        onClick={onClickTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
