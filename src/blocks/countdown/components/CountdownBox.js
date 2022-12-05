import classnames from 'classnames';

const CountdownBox = ( props ) => {

    return (
        <div className={ classnames(
            'wp-block-uagb-countdown__box',
            'wp-block-uagb-countdown__box-' + props.unitType,
        ) }>
            <div className={ classnames(
            'wp-block-uagb-countdown__time',
            'wp-block-uagb-countdown__time-' + props.unitType,
            ) }>
                -
            </div>
            { props.showLabels &&
                <div className='wp-block-uagb-countdown__label'>{ props.label }</div>
            }
        </div>
    );
};

export default CountdownBox;