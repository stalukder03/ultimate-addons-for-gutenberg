/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { __ } from '@wordpress/i18n';

function classNames( ...classes ) {
  return classes.filter( Boolean ).join( ' ' )
}

const ChangeLogPopup = () =>{

	const dynamicUAGChangelogRSSFeed = uag_react.global_data.changelog_data;

    return (
        <Popover className="relative">
          {( { open } ) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group bg-white rounded-[0.2rem] inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                )}
              >
                <span>{ __( 'Changelog', 'ultimate-addons-for-gutenberg' ) }</span>
                <ChevronDownIcon
                  className={classNames( open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500' )}
                  aria-hidden="true"
                />
              </Popover.Button>

				<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:mt-[2rem]">
					<Transition.Child
					as={Fragment}
					enter="transform transition ease-in-out duration-150 sm:duration-150"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transform transition ease-in-out duration-300 sm:duration-300"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
					>
					<div className="w-screen max-w-md">
						<div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
						<div className="px-4 sm:px-6 pb-4 border-b border-gray-200">
							<div className="flex items-start justify-between">
							<Dialog.Title className="text-lg font-medium text-gray-900"> { __( 'Changelog', 'ultimate-addons-for-gutenberg' ) } </Dialog.Title>
							<div className="h-7 flex items-center">
								<button
								type="button"
								className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
								onClick={() => setOpen( false )}
								>
								<XIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							</div>
						</div>
						<div className="mt-6 relative flex-1 px-4 sm:px-6">
							{/* Replace with your content */}
							<div className="relative grid bg-white divide-y divide-gray-200">
								{dynamicUAGChangelogRSSFeed.map( ( item, index ) => {
									const title = dynamicUAGChangelogRSSFeed[index].title;
									const description = dynamicUAGChangelogRSSFeed[index].description;
									const link = 'https://ultimategutenberg.com/changelog/';
									const pubDate = dynamicUAGChangelogRSSFeed[index].date;

									return (
										<a
											key={title}
											href={link}
											className="-m-3 p-3 block rounded-[0.2rem] transition ease-in-out duration-150 mb-1"
											target={'_blank'}
											rel={'noreferrer noopener'}
										>
										<p className="text-base font-medium text-gray-900" dangerouslySetInnerHTML={{__html: title}}></p>
										<p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: pubDate}}></p>
										<p className="mt-3 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
										</a>
									);
								} )}
							</div>
							{/* /End replace */}
						</div>
						</div>
					</div>
					</Transition.Child>
				</div>
				</div>
			</Dialog>
		</Transition.Root>
	</>
	)
};

export default ChangeLogPopup;
