import { FacebookIcon, FacebookShareButton } from 'react-share';

export default function ArticleShare() {
  return (
    <div className="mb-8">
      <h4 className="mb-2 text-slate-500">Share</h4>

      <div className="flex items-center gap-2 [&>button>svg]:h-8 [&>button>svg]:w-8 [&>button>svg]:rounded-lg">
        <FacebookShareButton url={route('articles.show')}>
          <FacebookIcon />
        </FacebookShareButton>
      </div>
    </div>
  );
}
