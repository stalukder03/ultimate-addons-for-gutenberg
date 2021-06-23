import ReactHtmlParser from 'react-html-parser';
import { ToggleControl } from '@wordpress/components';
import './ToggleField.scss';

function ToggleField( props ) {
	const {
		name,
		id,
		label,
		value,
		desc,
	} = props;

    let checked = 'disabled' ===  value ? false : true;

	function handleCheckboxClick( e ) {

        let checkedValue = e ? 'enabled' : 'disabled';
		// Trigger change
		let changeEvent = new CustomEvent( 'uag:toggle:change', {
			bubbles: true,
			detail: { e: e, name: name, value: checkedValue, id: id },
		} );

		document.dispatchEvent( changeEvent );
	}
	
	return (
		<div className="uag-field uag-toggle-field">
			<div className="uag-field__data">
                <ToggleControl
                    className={ props.class }
                    name={ name }
                    id={ id ? id : name }
                    label={ label }
                    checked={ checked }
                    onChange={ handleCheckboxClick }
                />
			</div>

			{ desc && (
				<div className="uag-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default ToggleField;
