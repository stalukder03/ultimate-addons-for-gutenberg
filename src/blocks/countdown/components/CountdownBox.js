import classnames from 'classnames';

const CountdownBox = ( props ) => {

    return (
        <div className={ classnames(
            'wp-block-uagb-countdown__box',
            'wp-block-uagb-countdown__box-' + props.unitType,
        ) }>
            <span className={ classnames(
            'wp-block-uagb-countdown__time',
            'wp-block-uagb-countdown__time-' + props.unitType,
        ) }></span>
            { props.showLabels &&
                <span className='wp-block-uagb-countdown__label'>{ props.label }</span>
            }
        </div>
    );
};

export default CountdownBox;
