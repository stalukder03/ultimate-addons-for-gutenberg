/**
 * BLOCK: Column - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import Title from './components/Title';
import Price from './components/Price';
import Description from './components/Description';
import PositionClasses from '../price-list/classes';
import RestMenuImage from './components/RestMenuImage';

export default function save( props ) {
	const { 
		imagePosition,
		showTitle,
		showContent,
		showPrice,
		showImg
	} = props.attributes;

	return (
		<>
			<div
				className={ classnames(
					'uagb-rest_menu__wrap',
					'uagb-rest_menu_repeater',
					...PositionClasses( props.attributes )
				) }
			>
				<div className="uagb-rm__content">
					{ showImg && <> 
					{ ( imagePosition === 'top' || imagePosition === 'left' ) && (
						<RestMenuImage attributes={ props.attributes } />
					) }
					</> }
					{ ( showTitle || showContent || showPrice ) && 
					<div className="uagb-rm__text-wrap">
						{
							<>
								<div className="uagb-rm-details">
								{ ( showTitle || showContent ) && 
									<div className="uagb-rm__title-wrap">
									{ showTitle && 
										<Title
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
									}
									{ showContent && 
										<div className="uagb-rest-menu-text-wrap">
											<Description
												attributes={ props.attributes }
												setAttributes="not_set"
												props={ props }
											/>
										</div>
									}
									</div>
								}
								{ showPrice &&
									<div className="uagb-rm__price-wrap">
										<Price
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
										/>
									</div>
								}
								</div>
							</>
						}
					</div>
					}
					{ showImg && <> 
					{ imagePosition === 'right' && (
						<RestMenuImage attributes={ props.attributes } />
					) }
					</> }
				</div>
				<div className="uagb-rm__separator-parent">
					<div className="uagb-rm__separator"></div>
				</div>
			</div>
		</>
	);
}
