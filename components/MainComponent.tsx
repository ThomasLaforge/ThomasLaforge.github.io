import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ReactElement } from "react";
// @ts-ignore
import {ImGithub} from 'react-icons/im';
import {GrLinkedin} from 'react-icons/gr';
interface MainLayoutProps {
    children: ReactElement
}

function MainLayout({ children }: MainLayoutProps){
    const history = useRouter()
    
    const menuItems = [
        { link: '/', title: 'Présentation' },
        { link: '/blog', title: 'Blog' },
        { link: '/cv', title: 'CV' },
        { link: '/contact', title: 'Contact' }
    ]

    const currentMenuItem = menuItems.findIndex(m => m.link === history.asPath)
    
    // Default Blog item cause blog slugs are only differents pages
    // if(currentMenuItem === -1){
    //     currentMenuItem = menuItems.findIndex(m => m.title === 'Blog')
    // }

    return (<div className="layout">
        <header>
            <div className="profile">
                <Link href="/">
                    <a>
                        <img 
                            className='logo' 
                            src={'/avatar.png'} 
                            alt="logo emprunté..."
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a className="name">Thomas Laforge</a>
                </Link>
                <div className="functions">
                    <div className="function">Developpeur web freelance</div>
                    <div className="function">Prof de squash</div>
                </div>
            </div>
            <nav>
                <ul className="menu">
                    {menuItems.map((item, key) => (
                        <li key={key} className={currentMenuItem === key ? 'menu-item_selected' : ''}>
                            <Link href={item.link}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="socials">
                <div className="social-media-elt">
                    <a href='https://github.com/ThomasLaforge/'>
                        <ImGithub />
                    </a>
                </div>
                <div className="social-media-elt">
                    <a href='https://www.linkedin.com/in/thomas-laforge-b5936374/'>
                        <GrLinkedin />
                    </a>
                </div>
            </div>
        </header>
        <div className="content">
            <div className="inner">
                {children}
            </div>
        </div>
    </div>
    );
}

export default MainLayout;