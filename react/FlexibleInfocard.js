import React, { Component } from 'react'
import styles from "./FlexCard.css";

class FlexibleInfocard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={styles.flexContainer}>
                <div className={styles.flexImgBlock} style={{ flex: this.props.imgWidth + '%' }}>
                    <img src={this.props.imgUrl} />
                </div>

                <div className={styles.flexContentBlock} style={{ flex: this.props.contentWidth + '%' }}>
                    {this.props.heading ? <h3 className={this.props.headerBlockClass}>{this.props.heading}</h3> : ""}

                    {this.props.subHeading ? <h5 className={this.props.subHeaderBlockClass}>{this.props.subHeading}</h5> : ""}
                    {
                        this.props.paragraphs.map((paragraph) => {
                            return <p className={this.props.paragraphBlockClass}>{paragraph}
                            </p>
                        })
                    }

                </div>
            </div>
        )
    }
}

export default FlexibleInfocard
