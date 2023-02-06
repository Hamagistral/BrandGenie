const Subscription: React.FC = () => {
    return (
        <>
            <section className="bg-slate-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-16 text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Unleash the potential of your brand with AI</h2>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-50 rounded-lg border border-gray-100 shadow bg-slate-900">
                            <h3 className="mb-4 text-2xl font-semibold">Free</h3>
                            <p className="font-light text-gray-400 sm:text-lg">Try our product for free, offer available for one month after signing up.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$0</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free 25 Prompts</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                            </ul>
                            <button className="text-white mt-auto bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</button>
                        </div>
                        <div className="flex flex-col ring-4 ring-sky-500 p-6 mx-auto max-w-lg text-center text-gray-50 rounded-lg shadow bg-slate-900">
                            <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
                            <p className="font-light text-gray-400 sm:text-lg">Best option for personal use & for your next projects.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$9</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Up to 25 prompts/day</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <button className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</button>
                        </div>
                        <div className="flex flex-col p-6 mx-auto text-center text-gray-50 rounded-lg border border-gray-100 shadow bg-slate-900">
                            <h3 className="mb-4 text-2xl font-semibold">Entreprise</h3>
                            <p className="font-light text-gray-400 sm:text-lg">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$29</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Up to 100 prompts/day</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>24/7 Chat Support</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <button className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Get started</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Subscription;