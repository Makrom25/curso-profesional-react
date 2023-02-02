import React, { Fragment } from 'react'
import { ImageWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const { show, element } = useIntersectionObserver()
  const [ liked, setLiked ] = useLocalStorage(key, false)

  console.log(liked)

  const Icon = liked
    ? MdFavorite
    : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <Img src={src} />
            </ImageWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />{likes} likes!
          </Button>

        </Fragment>
      }
    </Article>

  )
}
