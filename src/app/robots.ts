import { MetadataRoute } from 'next';
import { SITE } from '@/config/siteConfig';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${SITE.siteUrl}/sitemap.xml`,
    };
}
