import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="md:px-28 bg-[#101034] max-lg:px-4 h-auto text-white">
            <div className="w-3/5 xl:w-1/2 flex justify-between items-center">
                <div>
                    <hr className="border-gray-400 mb-4" />
                    <p className="text-lg max-lg:text-sm font-semibold">
                        2024 © Salvatore Coppola-Finegan. All rights reserved.
                    </p>
                        <p className="max-lg:text-xs">
                            29 Bd Grande-Duchesse Charlotte<br /> L-1331 Stad Lëtzebuerg
                        </p>
                        <p className="max-lg:text-xs flex ">LËTZEBUERG  (LU)
                            {/* Links for Privacy Policy and Impressum */}
                         <div className="flex items-center space-x-4 pl-24">
                            <Link 
                                to="/privacy-policy" 
                                className="text-sm text-blue-400 hover:text-blue-600 transition duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <span>|</span>
                            <Link 
                                to="/impressum" 
                                className="text-sm text-blue-400 hover:text-blue-600 transition duration-300"
                            >
                                Impressum
                            </Link>
                        </div>
                        </p>

                        
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
