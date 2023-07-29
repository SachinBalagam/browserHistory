import {Component} from 'react'
import './index.css'

class HistoryListComponent extends Component {
  OnDeleteButton = () => {
    const {onButtonDelete, initialHistoryList} = this.props
    const {id} = initialHistoryList
    onButtonDelete(id)
  }

  render() {
    const {initialHistoryList} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
    return (
      <li className="each-list">
        <div className="item-content-container">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="item-image" />
          <p className="title">{title}</p>

          <p className="domain">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={this.OnDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default HistoryListComponent
