"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import ThemeToggle from './ThemeToggle';
import '../../../styles/globals.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light'); // Zustand für das Theme

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        // Überwacht Änderungen am Theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems= [
        { name: 'Startseite', href: '/' },
        { name: 'To Do Liste', href: '/todo' },
        { name: 'Stundenplan', href: '/stundenplan' },
    ];

    const NavButtons =
        navItems.map((item, index) => (
            <li key={index} className={"w-full"}>
                <Link href={item.href}
                      className={"btn btn-ghost hover:underline hover:decoration-2 hover:underline-offset-4 w-full whitespace-nowrap"}
                      onClick={handleNav}
                >
                    {item.name}
                </Link>
            </li>
        ));

    return (
        <header>
            <nav
                className="fixed inset-x-0 top-0 w-full max-w-[95%] shadow-xl bg-[var(--navbar-bg)] text-[var(--navbar-text)] rounded-b-[24px] mx-auto z-30 flex flex-col">
                <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 py-4">
                    {/*----------------------------------- Logo -----------------------------------*/}
                    <Link href="/" className={"h-full flex items-center justify-center btn btn-ghost p-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="100%" height="100%"
                             viewBox="0 0 995 408"
                             version="1.1"
                             className={"max-h-full h-6 object-contain fill-current"}>
                            <g id="ArtBoard1" transform="matrix(1,0,0,1,-42.7173,-353.982)">
                                <g transform="matrix(1.45987,0,0,1.45987,-425.585,-776.32)">
                                    <g transform="matrix(0.68499,0,0,0.68499,292.013,532.444)">
                                        <path
                                            d="M781.427,468.176C743.515,473.169 716.512,478.454 716.442,484.029C716.208,502.774 716.091,526.206 716.091,554.324C716.091,588.066 713.865,617.708 709.413,643.249C704.961,668.789 696.408,690.347 683.755,707.921C671.102,725.495 653.528,738.734 631.033,747.638C608.538,756.542 579.483,760.994 543.866,760.994C507.312,760.994 477.437,756.776 454.239,748.341C431.042,739.905 412.765,727.135 399.408,710.03C386.052,692.924 376.797,671.367 371.642,645.357C366.487,619.348 363.909,588.769 363.909,553.622C363.909,534.133 363.853,516.895 363.74,501.911L447.542,353.982L458.808,353.982C466.307,353.982 470.876,354.567 472.516,355.739C474.156,356.911 474.391,358.785 473.219,361.363C472.047,363.94 470.407,367.338 468.298,371.556C466.189,375.773 465.135,380.928 465.135,387.021L465.135,481.217C465.135,482.154 465.369,485.435 465.838,491.058L465.838,554.324C465.838,589.472 471.696,616.888 483.412,636.571C495.128,656.253 515.279,666.095 543.866,666.095C571.516,666.095 590.379,656.253 600.454,636.571C610.53,616.888 615.568,588.535 615.568,551.513L615.568,530.424C615.099,523.863 614.865,516.365 614.865,507.929L614.865,481.217C614.865,453.567 614.279,433.181 613.108,420.06C611.936,406.938 610.882,397.565 609.944,391.941C609.007,387.255 607.601,382.569 605.727,377.882C603.852,373.196 601.977,368.978 600.103,365.229C598.228,361.948 598.228,359.254 600.103,357.145C601.977,355.036 605.961,353.982 612.053,353.982L781.427,353.982L781.427,468.176ZM846.74,606.15C845.176,606.15 844.16,607.402 843.69,609.904C843.221,612.407 842.987,614.284 842.987,615.535C842.361,626.171 842.126,636.963 842.283,647.911C842.439,658.86 842.517,669.808 842.517,680.757L842.517,693.426C842.517,699.057 842.674,704.922 842.987,711.022C843.299,717.122 843.769,722.752 844.394,727.914C845.02,733.075 845.958,736.907 847.21,739.41C848.148,740.974 849.947,743.242 852.606,746.213C855.265,749.185 856.594,751.453 856.594,753.017C856.594,756.458 855.499,758.648 853.309,759.586C851.12,760.525 848.617,760.994 845.802,760.994C844.863,760.994 843.847,760.916 842.752,760.759C841.657,760.603 840.484,760.525 839.233,760.525L765.565,760.525C763.375,760.525 761.498,760.212 759.934,759.586C758.37,758.961 757.588,757.397 757.588,754.894C757.588,753.33 759.074,750.749 762.046,747.152C765.017,743.555 766.972,740.974 767.911,739.41C769.788,735.656 771.274,729.869 772.369,722.049C773.463,714.228 774.245,705.939 774.715,697.18C775.184,688.421 775.497,679.975 775.653,671.842C775.81,663.708 775.888,657.452 775.888,653.073L775.888,610.608C775.888,601.067 775.731,591.057 775.418,580.578C775.106,570.099 774.793,560.245 774.48,551.017C774.167,541.789 773.698,533.812 773.072,527.086C772.447,520.361 771.665,515.903 770.726,513.714C769.162,510.273 767.207,507.614 764.861,505.737C762.515,503.86 761.342,501.514 761.342,498.698C761.655,496.196 762.749,494.632 764.626,494.006C766.503,493.381 769.944,493.068 774.949,493.068L827.033,493.068C831.412,493.068 835.323,494.163 838.764,496.352C842.205,498.542 845.333,501.201 848.148,504.329C850.963,507.457 853.544,510.82 855.89,514.417C858.236,518.015 860.504,521.378 862.694,524.506C876.458,543.275 890.691,563.138 905.393,584.097C920.096,605.056 934.329,624.919 948.092,643.688C949.031,644.94 949.813,645.8 950.439,646.269C951.064,646.738 952.159,646.973 953.723,646.973C954.974,646.973 955.913,645.8 956.538,643.454C957.164,641.108 957.555,638.527 957.712,635.712C957.868,632.896 957.868,630.159 957.712,627.5C957.555,624.841 957.477,623.043 957.477,622.104L957.477,589.258C957.477,581.751 957.399,573.931 957.242,565.797C957.086,557.664 956.773,550 956.304,542.805C955.835,535.611 955.365,529.354 954.896,524.037C954.427,518.719 953.723,515.121 952.785,513.244C951.221,510.429 949.657,507.927 948.092,505.737C946.528,503.547 945.746,501.514 945.746,499.637C945.746,496.509 947.701,494.632 951.612,494.006C955.522,493.381 959.197,493.068 962.638,493.068L1027.39,493.068C1029.27,493.068 1031.22,493.302 1033.26,493.772C1035.29,494.241 1036.31,496.04 1036.31,499.168C1036.31,501.357 1035.52,503.469 1033.96,505.502C1032.4,507.536 1030.99,509.803 1029.74,512.306C1026.92,518.875 1025.12,535.532 1024.34,562.278C1023.56,589.024 1023.64,628.517 1024.58,680.757C1024.58,683.885 1024.5,688.499 1024.34,694.599C1024.18,700.699 1024.18,706.877 1024.34,713.133C1024.5,719.39 1024.81,725.333 1025.28,730.964C1025.75,736.594 1026.61,740.817 1027.86,743.633C1028.8,745.51 1030.13,747.152 1031.85,748.56C1033.57,749.967 1034.43,751.922 1034.43,754.425C1034.43,757.553 1033.26,759.352 1030.91,759.821C1028.56,760.29 1022.7,760.525 1013.31,760.525L973.431,760.525C968.113,760.525 964.124,760.056 961.465,759.117C958.806,758.179 956.069,755.52 953.254,751.14C944.495,737.064 934.954,723.3 924.631,709.849C914.308,696.398 904.455,682.947 895.07,669.496C887.876,659.485 880.524,649.163 873.017,638.527C865.509,627.891 857.845,617.725 850.025,608.027C848.774,606.776 847.679,606.15 846.74,606.15ZM269.991,656.349C251.373,657.008 188.463,655.02 179.113,654.238C169.763,653.456 160.337,653.065 150.834,653.065C144.396,653.065 139.568,654.081 136.349,656.114C133.13,658.148 130.985,660.885 129.912,664.326C128.839,667.767 128.302,671.833 128.302,676.526L128.302,682.953C128.302,690.148 130.295,695.701 134.28,699.611C138.265,703.521 143.805,704.913 150.834,705.476C168.001,706.852 247.077,706.184 261.944,703.365C276.625,700.581 292.37,698.594 308.617,693.276C310.15,692.651 311.683,692.103 313.215,691.634C314.748,691.165 316.281,690.93 317.814,690.93C318.733,690.93 319.73,691.165 320.803,691.634C321.875,692.103 322.412,692.964 322.412,694.215C322.412,695.153 321.952,697.187 321.032,700.315C320.113,703.443 318.963,706.884 317.584,710.638C316.204,714.391 314.978,717.989 313.905,721.43C312.832,724.871 307.544,744.102 306.318,747.856C305.092,751.61 303.559,754.503 301.72,756.536C299.88,758.57 297.198,759.821 293.673,760.29C290.147,760.759 284.859,760.994 277.809,760.994L52.43,760.994C47.526,760.994 45.073,758.804 45.073,754.425C45.073,752.861 46.453,750.437 49.212,747.152C51.971,743.867 53.81,741.443 54.73,739.879C57.182,735.187 59.021,727.679 60.247,717.356C61.474,707.033 62.393,696.085 63.006,684.511C63.62,672.937 63.926,661.91 63.926,651.43L63.926,628.204C63.926,622.573 63.849,614.44 63.696,603.804C63.543,593.169 63.083,582.064 62.317,570.49C61.55,558.915 60.477,548.045 59.098,537.879C57.718,527.712 55.802,520.126 53.35,515.121C51.817,512.306 49.825,509.412 47.372,506.441C44.92,503.469 43.694,501.045 43.694,499.168C43.694,496.352 44.613,494.632 46.453,494.006C48.292,493.381 50.438,493.068 52.89,493.068L54.73,493.068L264.933,493.537L269.072,493.537C275.509,493.537 280.568,493.693 284.246,494.006C287.925,494.319 290.76,495.414 292.753,497.291C294.746,499.168 296.355,501.983 297.581,505.737C298.807,509.491 303.406,532.538 304.019,535.666C304.632,538.794 305.245,542.079 305.858,545.52C306.471,548.961 307.008,552.089 307.468,554.904C307.927,557.72 308.157,559.597 308.157,560.535C308.157,561.786 307.697,562.647 306.778,563.116C305.858,563.585 304.938,563.82 304.019,563.82C302.179,563.82 299.88,563.194 297.121,561.943C294.362,560.692 292.063,559.753 290.224,559.127C279.495,555.374 268.959,554.221 258.956,552.558C246.406,550.473 173.657,550.783 163.709,551.62C155.46,552.314 148.994,552.246 144.396,553.497C139.798,554.748 136.349,556.938 134.05,560.066C131.751,563.194 130.295,567.339 129.682,572.5C129.069,577.662 128.762,579.242 128.762,581.49C128.762,588.997 131.291,593.087 136.349,594.651C141.407,596.215 147.002,596.997 153.133,596.997C162.636,596.997 172.063,596.528 181.412,595.59C190.762,594.651 244.394,592.774 272.291,592.774C275.05,592.774 276.812,593.087 277.579,593.713C278.345,594.338 278.728,596.059 278.728,598.874L278.728,649.78C278.728,652.282 278.498,654.003 278.038,654.941C277.579,655.88 275.969,656.349 273.21,656.349L269.991,656.349ZM57.576,425.723L343.171,437.868L324.277,471.22C241.874,457.863 58.468,446.551 58.104,437.282C57.942,433.148 57.766,429.295 57.576,425.723ZM830.891,462.349L830.891,353.982L863.33,353.982L863.33,458.956C852.405,460.07 841.52,461.201 830.891,462.349ZM890.14,353.982L1028.92,353.982C1032.67,353.982 1035.13,355.153 1036.31,357.496C1037.48,359.84 1037.6,362.183 1036.66,364.526C1035.25,367.338 1033.5,371.321 1031.39,376.476C1029.28,381.631 1027.75,386.318 1026.82,390.535C1025.41,395.222 1024.36,401.197 1023.65,408.461C1022.95,415.725 1022.36,425.449 1021.9,437.634C1021.68,443.164 958.781,449.371 890.14,456.251L890.14,353.982ZM53.101,390.171L366.326,396.995L351.316,423.49L56.576,410.956C56.501,410.096 56.425,409.264 56.347,408.461C55.644,401.197 54.589,395.222 53.184,390.535C53.157,390.414 53.129,390.293 53.101,390.171ZM48.151,375.349C46.247,370.737 44.644,367.129 43.342,364.526C42.405,362.183 42.522,359.84 43.694,357.496C44.865,355.153 47.326,353.982 51.075,353.982L390.693,353.982L374.56,382.46L48.151,375.349Z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>

                    {/*----------------------------------- Desktop View -----------------------------------*/}
                    <div className="hidden sm:flex items-center space-x-4">
                        <ul className="flex items-center space-x-4">
                            {NavButtons}
                        </ul>
                        <ThemeToggle/> {/* ThemeToggle Button */}
                    </div>

                    {/*----------------------------------- Mobile Menu Button -----------------------------------*/}
                    <div onClick={handleNav} className="sm:hidden cursor-pointer btn btn-ghost">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
                <div className={`sm:hidden px-4 max-h-fit transition-all overflow-hidden ${menuOpen ? "h-fit pb-10 " : "h-0"}`}>
                    <div className="flex flex-col">
                        <ul className="flex flex-col gap-2">
                            {NavButtons}
                            <ThemeToggle/>
                        </ul>
                    </div>
                    <div className="flex flex-row justify-around pt-10 items-center">
                        <AiOutlineInstagram size={30} className="cursor-pointer"/>
                        <AiOutlineTwitter size={30} className="cursor-pointer"/>
                        <AiOutlineGithub size={30} className="cursor-pointer"/>
                    </div>
                </div>
            </nav>

            {/*----------------------------------- Mobile Darkened BG -----------------------------------*/}
            {menuOpen && (
                <div
                    className={`fixed inset-0 bg-black z-20 sm:hidden transition-all ${menuOpen ? ' bg-opacity-30' : 'bg-opacity-0'}`}
                    onClick={handleNav}
                />
            )}

            {/*----------------------------------- Mobile View -----------------------------------*/}
            <nav
                className={`hidden fixed left-0 top-0 w-[75%] sm:hidden h-screen p-6 ease-in-out duration-500 transform z-30 bg-base-200 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} // Hintergrundfarbe für Light und Dark Mode
            >

                <div className="flex flex-col">
                    <div className="flex w-full items-center justify-between">
                    <div onClick={handleNav} className="cursor-pointer btn btn-ghost btn-circle">
                            <AiOutlineClose size={25}/>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {NavButtons}
                        <ThemeToggle/>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer"/>
                    <AiOutlineTwitter size={30} className="cursor-pointer"/>
                    <AiOutlineGithub size={30} className="cursor-pointer"/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;