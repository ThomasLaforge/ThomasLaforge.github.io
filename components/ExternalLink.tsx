import * as React from 'react'
import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'

interface ExternalLinkProps {
    href: string
}

const CustomComponent = React.forwardRef((props, ref) => (
    <FiExternalLink />
))
  
export default function ExternalLink({href}: ExternalLinkProps) {
    return (
        <div className="external-link">
            <Link href={href}>
                <CustomComponent />              
            </Link>
        </div>
    )
}