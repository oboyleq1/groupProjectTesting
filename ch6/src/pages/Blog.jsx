import { useQuery } from '@tanstack/react-query'
import { PostList } from '../components/PostList.jsx'
import { CreatePost } from '../components/CreatePost.jsx'
import { PostFilter } from '../components/PostFilter.jsx'
import { PostSorting } from '../components/PostSorting.jsx'
import { getPosts } from '../api/posts.js'
import { useState } from 'react'
import { Header } from '../components/Header.jsx'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')
  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  const posts = postsQuery.data ?? []

  /* return (
    <div style={{ padding: 8 }}>
      <Header />
      <br />
      <hr />
      <br />
      <CreatePost />
      <br />
      <hr />
      Filter By:
      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <br />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </div>
  ) */

  return (
    <div className='container py-4'>
      {/* Header with login/signup */}
      <Header />

      {/* Banner */}
      <div className='text-center my-4'>
        <h1 className='display-4'>Our Project</h1>
        <p className='lead'>Welcome!</p>
      </div>

      {/* Create Post Form */}
      <div className='card shadow-sm p-4 mb-4'>
        <CreatePost />
      </div>

      {/* Filters and Sorting */}
      <div className='row mb-4'>
        <div className='col-md-6 mb-2'>
          <div className='mb-1 fw-bold'>Filter by Author:</div>
          <PostFilter
            field='author'
            value={author}
            onChange={(value) => setAuthor(value)}
          />
        </div>
        <div className='col-md-6 mb-2'>
          <div className='mb-1 fw-bold'>Sort Posts:</div>
          <PostSorting
            fields={['createdAt', 'updatedAt']}
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            orderValue={sortOrder}
            onOrderChange={(orderValue) => setSortOrder(orderValue)}
          />
        </div>
      </div>

      {/* Post List */}
      <div className='row'>
        <div className='col-12'>
          {postsQuery.isLoading && (
            <p className='text-center'>Loading posts...</p>
          )}
          {postsQuery.isError && (
            <div className='alert alert-danger text-center'>
              Failed to load posts.
            </div>
          )}
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
