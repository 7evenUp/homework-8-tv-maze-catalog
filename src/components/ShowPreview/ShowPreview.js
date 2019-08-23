// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './ShowPreview.module.css'

export default class ShowPreview extends Component {
    render() {
        const { name, id, image, summary}  = this.props
        return (
            <div className={`${styles.container} t-preview`}>
                <div>
                    <Link to={id ? `shows/${id}` : ''} className="t-link">{name}</Link>
                    {image !== null && <img src={image.medium} alt={name} />}
                </div>
                <div dangerouslySetInnerHTML={{__html: summary}}/>
            </div>
        )
    }
}