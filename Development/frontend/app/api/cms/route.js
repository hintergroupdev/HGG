import { NextResponse } from 'next/server';
import {
  getSiteSettings,
  getLeadershipMembers,
  getInsightsArticles,
  getPublicationStreams,
  getServices,
  getIndustries,
  getProjects,
  getLegalPage,
} from '@/lib/sanityData';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const slug = searchParams.get('slug');

    let result = null;

    switch (type) {
      case 'siteSettings':
        result = await getSiteSettings();
        break;
      case 'leadership':
        result = await getLeadershipMembers();
        break;
      case 'insights':
        result = await getInsightsArticles();
        break;
      case 'streams':
        result = await getPublicationStreams();
        break;
      case 'services':
        result = await getServices();
        break;
      case 'industries':
        result = await getIndustries();
        break;
      case 'projects':
        result = await getProjects();
        break;
      case 'legal':
        result = await getLegalPage(slug || 'privacy-policy');
        break;
      default:
        return NextResponse.json({ error: `Invalid CMS type: ${type}` }, { status: 400 });
    }

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      },
    });
  } catch (error) {
    console.error('[CMS API Error]', error);
    return NextResponse.json({ error: 'Failed to query CMS data' }, { status: 500 });
  }
}
