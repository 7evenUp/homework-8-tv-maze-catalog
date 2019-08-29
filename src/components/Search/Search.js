// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchRequest } from '../../actions'
import ShowPreview from '../ShowPreview'
import styles from './Search.module.css'

class Search extends Component {
    state = {
        inputValue: ''
    }

    handleChange = (event) => {
        const val = event.target.value
        this.setState({inputValue: val})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { inputValue } = this.state
        const { searchRequest } = this.props

        searchRequest(inputValue)

        this.setState({inputValue: ''})
    }

    render() {
        const { inputValue } = this.state
        const { search = [], isFetching } = this.props
        return (
            isFetching ? <p>Выполняется поиск</p> : (
                <div>
                    <div className={styles.previewList}>
                        <input
                            className={`${styles.input} t-input`}
                            value={inputValue}
                            onChange={this.handleChange}
                            placeholder="Название сериала"
                        />
                        <div className={styles.buttonWrapper}>
                            <button
                                className={`${styles.button} t-search-button`}
                                onClick={this.handleSubmit}
                            >Найти</button>
                        </div>
                    </div>
                    <div className={`${styles.searchPanel} t-search-result`}>
                        {search.map(show => <ShowPreview key={show.id} {...show} />)}
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.search.result,
        isFetching: state.search.isFetching,
        error: state.search.error
    }
}
const mapDispatchToProps = { searchRequest }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)