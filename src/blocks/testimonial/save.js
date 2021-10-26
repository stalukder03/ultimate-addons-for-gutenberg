/**
 * BLOCK: Testimonial - Save Block
 */

import classnames from 'classnames';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import PositionClasses from './classes';
import TestimonialImage from './components/Image';

export default function save( props ) {
	const {
		block_id,
		className,
		columns,
		test_block,
		imagePosition,
		showName,
		showContent,
		showCompany,
		showImg
	} = props.attributes;

	return (
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-block-${ block_id }`
			) }
		>
			<div
				className={ classnames(
					'is-carousel',
					`uagb-tm__columns-${ columns }`,
					'uagb-tm__items'
				) }
			>
				{ test_block.map( ( test, index ) => (
					<div
						className={ classnames(
							'uagb-testimonial__wrap',
							...PositionClasses( props.attributes )
						) }
						key={ 'wrap-' + index }
					>
						<div
							className="uagb-tm__content"
							key={ 'tm_content-' + index }
						>
							<div className="uagb-tm__overlay"></div>
							{ showImg && 
							<>
							{ ( imagePosition === 'top' ||
								imagePosition === 'left' ) && (
								<TestimonialImage
									attributes={ props.attributes }
									index_value={ index }
								/>
							) }
							</>
							}
							{ ( showName || showCompany || showContent ) &&
							<div className="uagb-tm__text-wrap">
								{
									// Get description.
									<>
									{ showContent &&
										<Description
											attributes={ props.attributes }
											setAttributes="not_set"
											props={ props }
											index_value={ index }
										/>
									}
									</>
								}
								{ ( showName || showCompany ) &&
								<div className="uagb-tm__meta-inner">
								{ showImg &&
								<>
									{ imagePosition === 'bottom' && (
										<TestimonialImage
											attributes={ props.attributes }
											index_value={ index }
										/>
									) }
								</>
								}

									{
										//title_text
										<>
											<div
												className="uagb-testimonial-details"
												key={ 'tm_wraps-' + index }
											>
												{ showName &&
												<AuthorName
													attributes={
														props.attributes
													}
													setAttributes="not_set"
													props={ props }
													index_value={ index }
												/>
												}
												{ showCompany &&
												<Company
													attributes={
														props.attributes
													}
													setAttributes="not_set"
													props={ props }
													index_value={ index }
												/>
												}
											</div>
										</>
									}
								</div>
								}
							</div>
							}
							{ showImg &&
							<>
							{ imagePosition === 'right' && (
								<TestimonialImage
									attributes={ props.attributes }
									index_value={ index }
								/>
							) }
							</>
							}
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
}
