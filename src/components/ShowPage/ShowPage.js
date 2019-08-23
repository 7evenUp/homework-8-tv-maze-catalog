// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showRequest } from '../../actions'
import styles from './ShowPage.module.css'

class ShowPage extends Component {
    componentDidMount() {
        const { match: { params : {id} }, showRequest } = this.props;
        showRequest(id);
    }

    render() {
        const { isFetching, show } = this.props;

        return (
            isFetching ? <div>Загрузка...</div> : (
                <div>
                    <p>{show.name}</p>
                    <img src={show.image && show.image.medium} alt={show.name} />
                    <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
                    <div className={styles.cast}>
                        {
                            show._embedded && show._embedded.cast.map(({person: {id, name, image}}) => {
                                return (
                                    <div className="t-person" key={id}>
                                        <p>{name}</p>
                                        {image && <img src={image.medium} alt={name} />}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.shows.isFetching,
        show: state.shows.show
    }
}

const mapDispatchToProps = { showRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);