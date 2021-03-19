import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'

interface ExternalLinkProps {
    href: string
}

export default function ExternalLink({href}: ExternalLinkProps) {
    return (
        <div className="external-link">
            <Link href={href}>
                <FiExternalLink />
            </Link>
        </div>
    )
}