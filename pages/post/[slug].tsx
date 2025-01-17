import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import React from 'react';

import { fetchGraphQL, gql } from '../../utils';
import { DocumentRenderer } from '../../schema/fields/content/renderers';

import { Container, HomeLink } from '../../components/ui/layout';
import { Link } from '../../components/ui/link';
import { H1 } from '../../components/ui/typography';

export default function Post({ post }: { post: any }) {
  return (
    <Container>
      <HomeLink />
      <article>
        <H1>{post.title}</H1>
        {post.author?.name && (
          <p>
            By <span className="font-bold">{post.author.name}</span>
          </p>
        )}
        {post.content?.document && (
          <DocumentRenderer document={post.content.document} />
        )}
      </article>
    </Container>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const data = await fetchGraphQL(
    gql`
      query {
        allPosts {
          slug
        }
      }
    `
  );
  return {
    paths: data.allPosts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const data = await fetchGraphQL(
    gql`
      query ($slug: String!) {
        Post(where: { slug: $slug }) {
          title
          content {
            document(hydrateRelationships: true)
          }
          publishedDate
          author {
            id
            name
          }
        }
      }
    `,
    { slug: params!.slug }
  );
  return { props: { post: data.Post }, revalidate: 60 };
}
