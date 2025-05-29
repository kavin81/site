export const runtime = 'edge';

import { GetServerSideProps } from 'next'

const TARGET_DOMAIN = 'https://kavin1.vercel.app'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const path = context.resolvedUrl
    return {
        redirect: {
            destination: `${TARGET_DOMAIN}${path}`,
            permanent: true,
        },
    }
}

export default function Redirect() {
    return null
}
