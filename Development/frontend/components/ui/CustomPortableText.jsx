import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#061739] tracking-tight mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#061739] tracking-tight mt-7 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#061739] tracking-tight mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading text-lg font-bold text-[#061739] tracking-tight mt-5 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base mb-4 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#C49838] pl-5 py-2 my-6 italic text-[#061739] bg-slate-50/80 rounded-r-lg font-medium text-[15px] sm:text-base">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700 text-[15px] sm:text-base">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-slate-700 text-[15px] sm:text-base">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#061739]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow noreferrer' : undefined}
          className="text-[#14588B] hover:text-[#0A2457] underline font-medium transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref && !value?.asset?.url) return null;
      const imageUrl = urlForImage(value)?.url();
      if (!imageUrl) return null;

      return (
        <div className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <div className="relative aspect-video w-full">
            <Image
              src={imageUrl}
              alt={value.alt || 'Article visual'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          {value.caption && (
            <p className="px-4 py-2.5 text-center text-xs text-slate-500 font-mono italic bg-white border-t border-slate-100">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export default function CustomPortableText({ value }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
