import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  img: CustomImage,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header name={globalData.name} />
      <article
        className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl md:px-10"
        data-sb-object-id={`posts/${slug}.mdx`}
      >
        <header className="text-center">
          <h1
            className="mb-6 text-3xl font-semibold text-white md:text-5xl"
            data-sb-field-path="title"
          >
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p
              className="mx-auto max-w-xl text-lg text-slate-300"
              data-sb-field-path="description"
            >
              {frontMatter.description}
            </p>
          )}
        </header>
        <main className="mt-10">
          <article
            className="prose prose-slate max-w-none text-slate-200 dark:prose-invert"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid mt-12 gap-4 md:grid-cols-2">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/40 px-10 py-8 text-center text-slate-200 transition hover:border-slate-500/40 hover:bg-slate-900/60 md:text-right"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Previous
              </p>
              <h4 className="mb-6 text-2xl font-semibold text-white">
                {prevPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0" />
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/40 px-10 py-8 text-center text-slate-200 transition hover:border-slate-500/40 hover:bg-slate-900/60 md:text-left"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Next
              </p>
              <h4 className="mb-6 text-2xl font-semibold text-white">
                {nextPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto md:ml-0" />
            </Link>
          )}
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
