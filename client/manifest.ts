import type { MetadataRoute } from 'next'

export default function manifest() : MetadataRoute.Manifest {
    return{
        name: 'Afetivo',
        short_name: 'Afetivo',
        description: 'A mood tracker for your daily use',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}