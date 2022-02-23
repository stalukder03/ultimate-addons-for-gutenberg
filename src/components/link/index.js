import React from 'react';
import { CheckboxControl } from '@wordpress/components';
import { useState, useLayoutEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import PropTypes from 'prop-types';

const propTypes = {
	label: PropTypes.string,
	link: PropTypes.object,
	target: PropTypes.object,
	noFollow: PropTypes.object,
	setAttributes: PropTypes.func
};

const defaultProps = {
	label: 'URL',
	link: {},
	target: {},
	setAttributes: () => {},
};

export default function Link({ setAttributes, label, link, target, noFollow }) {
	const [isShowOptions, setShowOptions] = useState(false)
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	return (
		<React.Fragment>
			<div className='uag-link-control'>
				<label>{label}</label>
				<div className='uag-link-control__link'>
					<input type='url' value={link.value} placeholder={__('https://', 'ultimate-addons-for-gutenberg')} onChange={ ( e ) => setAttributes( {[link.label]: e.target.value} ) } />
					<button onClick={() => setShowOptions(!isShowOptions)}><span className="dashicons dashicons-admin-generic"></span></button>
				</div>
				{
					isShowOptions && (
						<div className='uag-link-control__options'>
							<CheckboxControl
								label={__('Open in new window', 'ultimate-addons-for-gutenberg')}
								checked={ target.value }
								onChange={ (value) => setAttributes( {[target.label]: value} ) }
							/>
							<CheckboxControl
								label={__('Add Nofollow', 'ultimate-addons-for-gutenberg')}
								checked={ noFollow.value }
								onChange={ (value) => setAttributes( {[noFollow.label]: value} ) }
							/>
						</div>
					)
				}
			</div>
		</React.Fragment>
	);
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
